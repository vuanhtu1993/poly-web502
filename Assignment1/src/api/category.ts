import Product from "../model/product";
import instance from "./instance";

type Category = {
    name: string,
    id: number
}

export const createCategory = (category: Category) => {
    const url = "/category"
    return instance.post(url, category)
}

export const getCategories = () => {
    const url = "/category"
    return instance.get(url)
}