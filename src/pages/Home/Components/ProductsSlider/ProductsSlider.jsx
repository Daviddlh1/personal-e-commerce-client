import React from "react";
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductsSlider.module.css"

function ProductsSlider({ currentProducts }) {
  
  return  (
    <>
      <div className={styles.container}>
        {currentProducts.map(
          (product) => (
            <ProductCard 
            key={product.id}
            product={product}
            />
          )
        )}
      </div>
    </>
  )
}

export default ProductsSlider;
