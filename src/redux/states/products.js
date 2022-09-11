import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    products: [],
    displayableProducts: [],
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        getProducts: (state) => state.products,
        getDisplayableProducts: (state) => state.displayableProducts,
        setProducts: (state, action) => ({...state, products: action.payload, displayableProducts: action.payload })
    }
}, )

export const { getProducts, getDisplayableProducts, setProducts } = productsSlice.actions

export default productsSlice.reducer