import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  
  return (
    <>
    
      <div className={styles.productCard__container}>
        <img
          className={styles.productCard__container__image}
          src={product.images[0]}
          alt="mockedImage"
        />
        <div>
          <h3>{product.title}</h3>
          <p>
            <span>Precio: </span>
            {product.price}
          </p>
          <div>
            <p>Descripción</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
