import { configureStore } from "@reduxjs/toolkit"
import {
    user,
    products,
    shoppingCart
} from "../states"

export const store = configureStore({
    reducer: {
        user: user,
        products: products,
        shoppingCart: shoppingCart
    }
})