import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard"
import styles from "./ProductsSlider.module.css"

function ProductsSlider({ currentProducts }) {
  
  return  (
    <>
      <div className={styles.container}>
        {currentProducts.map(
          (product) => (
            <>
            <ProductCard product={product} key={product.id}/>
            </>
          )
        )}
      </div>
    </>
  )
}

export default ProductsSlider;
