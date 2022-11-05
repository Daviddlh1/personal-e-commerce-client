import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductsSlider.module.css"
import { Link } from "react-router-dom";

function ProductsSlider({ currentProducts }) {
  useEffect(() => {
    console.log(currentProducts)
  },[currentProducts])
  return  (
    <>
      <div className={styles.container}>
        {currentProducts.map(
          (product) => (
            <Link className={styles.productContainer} key={product.id} to={`product/${product.id}`}>
              <ProductCard 
              product={product}
              />
            </Link>
          )
        )}
      </div>
    </>
  )
}

export default ProductsSlider;
