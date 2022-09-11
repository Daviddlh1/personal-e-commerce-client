import axios from "axios"

const baseUrl = "https://api.escuelajs.co/api/v1/products"

export const getProducts = async() => {
    return (await axios.get(baseUrl)).data;
}