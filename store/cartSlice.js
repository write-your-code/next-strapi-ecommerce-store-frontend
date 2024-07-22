// "use client";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productExist = state.cartItems.find(
        (p) => p.name === action.payload.name
      );
      // console.log("exist", productExist)
      // console.log("cart", state.cartItems)
      if (productExist) {
        productExist.quantity++;
        // console.log("product exist:", productExist.quantity)
        // console.log("product exist calculation:", action.payload)
        productExist.price = action.payload.oneQtyPrice * productExist.quantity;
      } else {
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)),
        console.log("add to cart called", state.cartItems);
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.price = p.oneQtyPrice * action.payload.value;
            // p.quantity = action.payload.value
          }
          return { ...p, [action.payload.key]: action.payload.value };
        }
        return p;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      // localStorage.removeItem("cartItems");
    },
    totalAmount: (state) => {
      // return state.cartItems.reduce(
      //   (total, item) => total + item.price * item.quantity,
      //   0
      // );

      const subTotal = state.cartItems.reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.quantity;
      }, 0);
      return 55;
    },
  },
});

export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
