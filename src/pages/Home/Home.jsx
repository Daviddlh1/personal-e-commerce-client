import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsFromDatabase } from "../../logic/api";
import { setProductsStore } from "../../redux/states/products";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import PromotionsSection from "./Components/PromotionsSection/PromotionsSection";
import Categories from "./Components/Categories/Categories";
import ProductsSlider from "./Components/ProductsSlider/ProductsSlider";
import Pagination from "./Components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";

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
    getProductsFromDatabase()
      .then((res) => {
        dispatch(setProductsStore(res.data))
        console.log(res)
      })
      .then(() => {
        setStoreLoaded(true);
      })
      .catch((err) => console.log(err));
    // getProducts()
    //   .then((res) => dispatch(setProductsStore(res)))
    //   .then(() => {
    //     setStoreLoaded(true);
    //   })
    //   .catch((error) => console.error(error));
  }, [displayableProducts.length, dispatch]);

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
      <Banner />
      <Navbar />
      <PromotionsSection />
      <Categories />
      <ProductsSlider currentProducts={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        productsAmount={displayableProducts.length}
        changePage={changePage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <Footer />
    </>
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
}

export default Home;
