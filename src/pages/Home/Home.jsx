import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/products.services";
import { setProductsStore } from "../../redux/states/products";
import ProductsSlider from "./Components/ProductsSlider/ProductsSlider";
import Pagination from "./Components/Pagination/Pagination";

function Home() {
  const { displayableProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [storeLoaded, setStoreLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  let indexOfLastProduct = currentPage * productsPerPage;
  let indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts = displayableProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    getProducts()
      .then((res) => dispatch(setProductsStore(res)))
      .then(() => {
        setStoreLoaded(true);
      })
      .then(() => console.log(displayableProducts.length))
      .catch((error) => console.error(error));
  }, [dispatch]);

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(displayableProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return storeLoaded ? (
    <>
      <h1>Hello from Home</h1>
      <ProductsSlider currentProducts={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        productsAmount={displayableProducts.length}
        changePage={changePage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
}

export default Home;
