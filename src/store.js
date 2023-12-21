import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/sort/sortProductSlice";




export default configureStore({
    reducer: {
        cart : cartSlice,
        sortProduct : productSlice,
    }
});