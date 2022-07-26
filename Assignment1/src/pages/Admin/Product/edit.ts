import {upload, uploadFile} from '../../../api/image'

const EditProductPage = {
	render: async () => {
		return /*html*/`
				<img id="edit-image"/>
				<input id="edit-file" type="file" accept="image/png, image/jpg, image/jpeg" />
        `
	},
	afterRender: async () => {
		const editFile = document.querySelector('#edit-file')
		const editImage = document.querySelector('#edit-image')

		editFile?.addEventListener('change', async (event) => {
			const file: File = event.target.files[0]
			try {
				const res = await uploadFile(file)
				console.log(res)
			} catch(err) {
				console.log(err.message);
				
			}
			// const reader = new FileReader()
			// reader.readAsDataURL(file)
			// reader.onloadend = async () => {
			// 	const res = await upload(reader.result)
			// 	console.log(res)
			// 	const data = res.data
			// 	editImage.src = data.url
			// }
		})
	}	
}

export default EditProductPage;

const logging = <T>(input: number):T => {
	return input
}