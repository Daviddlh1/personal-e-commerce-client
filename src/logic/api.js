import axios from "axios"

const baseUrl = "https://api.escuelajs.co/api/v1"
const databaseBaseUrl = "http://localhost:5001/api"

// Products
export const getProducts = async() => {
    return (await axios.get(`${baseUrl}/products`)).data;
}

//Categories
export const getCategories = async() => {
    return(await axios.get(`${baseUrl}/categories`)).data
}

//Products from database
export const getProductsFromDatabase = () => {
    return (axios.get(`${databaseBaseUrl}/products/getProductsFromDatabase`))
}

//Categories from database
export const getCategoriesFromDatabase = () => {
    return (axios.get(`${databaseBaseUrl}/categories/createCategory`))
}
