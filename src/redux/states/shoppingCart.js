import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const shoppingCart = createSlice({
    name: "shoppingCart",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => ({...state, products: [...state.products, ...action.payload] }),
        deleteAProduct: (state, action) => {
            const productToBeDeleted = action.payload
            const productsIntheShoppingCart = state.products.filter((product) => product.id !== productToBeDeleted.id)
            return ({
                ...state,
                products: productsIntheShoppingCart,
            })
        }
    }
})

export const { addProduct, deleteAProduct } = shoppingCart.actions

export default shoppingCart.reducer