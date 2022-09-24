import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/products.services";
import { setProductsStore } from "../../redux/states/products";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import Pagination from "../../components/Pagination/Pagination";

function Home() {
  const {displayableProducts} = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [storeLoaded, setStoreLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  let indexOfLastProduct = currentPage * productsPerPage
  let indexOfFirstProduct = indexOfLastProduct - productsPerPage
  let currentProducts = displayableProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  useEffect(() => {
    getProducts()
      .then((res) => dispatch(setProductsStore(res)))
      .then(() => {   
        setStoreLoaded(true);
      })
      .then(()=> console.log(displayableProducts.length))
      .catch((error) => console.error(error));
  }, [dispatch]);
  
  const changePage = (pageNum) => {
    setCurrentPage(pageNum)
  }

  return storeLoaded ? (
    <>
      <h1>Hello from Home</h1>
      <ProductsSlider currentProducts={currentProducts} />
      <Pagination productsPerPage={productsPerPage} productsAmount={displayableProducts.length} changePage={changePage}/>
    </>
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
}

export default Home;
