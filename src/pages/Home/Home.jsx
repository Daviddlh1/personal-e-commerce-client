import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../../services/products.services"
import { setProducts } from "../../redux/states/products";
import ProductSlider from "../../components/ProductSlider/ProductsSlider"

function Home() {
  let products = useSelector((store) => store.displayableProducts);;
  const [isLoading, setIsLoading] = useState(true)
  
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((res) => {
      dispatch(setProducts(res))
    })
  },[products]);

  function pageContentDidLoad(didLoad) {
    setIsLoading(didLoad)
  }

  if(products) return <><h1>Loading</h1></>
  else return (
    <>
      <h1>Hello from Home</h1>
      <ProductSlider />
    </>
  );
}

export default Home;
