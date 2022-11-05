import axios from "axios"

const baseUrl = "https://api.escuelajs.co/api/v1"
const databaseBaseUrl = "http://localhost:5001/api"

// Products
export const getProducts = async() => {
    const products = (await axios.get(`${databaseBaseUrl}/products`)).data;
    products.forEach((product) => {
        product.images = JSON.parse(product.images)
    })
    return products
}

export const getProductById = async (productId) => {
    const product = (await axios.get(`${databaseBaseUrl}/products/${productId}`)).data
    return product
}

//Categories
export const getCategories = async() => {
    return(await axios.get(`${baseUrl}/categories`)).data
}


//Categories from database
export const getCategoriesFromDatabase = () => {
    return (axios.get(`${databaseBaseUrl}/categories/createCategory`))
}
