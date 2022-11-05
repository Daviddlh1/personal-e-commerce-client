import React, { useEffect, useState } from "react";
import { getProductById } from "../../logic/api";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const response = getProductById(productId)
        response.then((res) => setProduct(res))
    },[productId,product])
    return (
        <>
            <div>
                <img src={product.images?.length && product.images[0]} alt={product.title} />
                <div>
                    <h3>Description:</h3>
                    <p>{product.description}</p>
                    <h3>Price:</h3>
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    )
}