import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

function ProductSlider() {
  const [products, setProducts] = useState([]);
  const displayableProducts = useSelector((store) => store.displayableProducts);
  useEffect(() => {
    setProducts(displayableProducts);
    print(displayableProducts);
  }, [products]);
  function print(i) {
    console.log("----------------------", i);
  }

  const product = {
    name: "name",
  };
  return (
    <>
      {products?.map(() => (
        <ProductCard product={product} />
      ))}
    </>
  );
}

export default ProductSlider;
