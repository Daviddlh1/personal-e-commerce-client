import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./ProductSlider.module.css";

function ProductSlider({ products }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 10;
  useEffect(() => {
    pagination().then(() => console.log(currentProducts, currentPage));
  });

  async function pagination() {
    if (currentPage === 0 && currentProducts.length === 0) {
      await setCurrentProducts(
        products.slice(currentPage, currentPage + productsPerPage)
      );
      await setCurrentPage(currentPage + productsPerPage);
    }
  }

  function nextPage() {
    setCurrentProducts(
      products.slice(currentPage, currentPage + productsPerPage)
    );
    setCurrentPage(currentPage + productsPerPage);
  }
  function previousPage() {
    if (currentPage >= 10) {
      setCurrentProducts(
        products.slice(currentPage - productsPerPage, currentPage)
      );
      setCurrentPage(currentPage - productsPerPage);
    }
  }
  return (
    <>
      <div>
        <div className={styles.productSlider__CarrouselContainer}>
          {currentProducts?.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        <button onClick={() => previousPage()}>Previous Page</button>
        <button onClick={() => nextPage()}>Next Page</button>
      </div>
    </>
  );
}

export default ProductSlider;
