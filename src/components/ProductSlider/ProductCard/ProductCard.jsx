import React, { useEffect } from "react";

function ProductCard({product}) {
  useEffect(() => {
    console.log(product);
  });
  return (
    <>
      <div className="product-card__container">
        <img
          src="../../../assets/Screen Shot 2022-09-11 at 1.31.38 PM.png"
          alt="mockedImage"
        />
        <div>
          <h3>Nombre del producto</h3>
          <p>
            <span>Precio: </span>mockedPrice
          </p>
          <div>
            <p>Descripción</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a
              vero iste, molestias aperiam tempore! Similique velit neque
              laborum quod iure deleniti maiores, eos, mollitia qui iusto
              obcaecati, adipisci magni?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
