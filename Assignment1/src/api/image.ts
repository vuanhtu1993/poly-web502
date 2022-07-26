import axios from "axios";

const imageInstance = axios.create({
    baseURL: "https://image-uploader-anhhtus.herokuapp.com/api"
})

export const upload = (base64Image: string) => {
    const url = "/upload"
    return imageInstance.post(url, {data: base64Image})
}

export const uploadFile = (file:File) => {
    const CLOUDINARY_NAME = "dv3vzmogk";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "free_preset";
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);
    const res = axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    });
  
    return res;
  };