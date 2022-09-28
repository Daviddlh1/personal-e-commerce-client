import axios from "axios"

const baseUrl = "https://api.escuelajs.co/api/v1"

// Products
export const getProducts = async() => {
    return (await axios.get(`${baseUrl}/products`)).data;
}

//Categories
export const getCategories = async() => {
    return(await axios.get(`${baseUrl}/categories`)).data
}