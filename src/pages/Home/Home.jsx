import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/products.services";
import { setProductsStore } from "../../redux/states/products";
import ProductSlider from "../../components/ProductSlider/ProductsSlider";

function Home() {
  const dispatch = useDispatch();
  const [storeLoaded, setStoreLoaded] = useState(false);
  const products = useSelector((store) => store.products.displayableProducts);
  useEffect(() => {
    getProducts()
      .then((res) => dispatch(setProductsStore(res)))
      .then(() => {
        setStoreLoaded(true);
      })
      .catch((error) => console.error(error));
  }, []);
  return storeLoaded ? (
    <>
      <h1>Hello from Home</h1>
      <ProductSlider products={products} />
    </>
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
}

export default Home;
