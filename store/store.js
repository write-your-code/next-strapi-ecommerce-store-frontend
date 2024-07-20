import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import cartReducer from "./cartSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        cart: cartReducer,
    }
})
// export default store;