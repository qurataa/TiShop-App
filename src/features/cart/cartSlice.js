import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const selectCartIndex = state.cartItem.findIndex((product) => product.id === newItem.id);

      if (selectCartIndex !== -1) {
        state.cartItem[selectCartIndex].quantity += 1;
        state.cartItem[selectCartIndex].totalPrice = state.cartItem[selectCartIndex].quantity * newItem.price;
      } else {
        state.cartItem.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      const deleteItem = action.payload
      const selectCartIndex = state.cartItem.findIndex((product) => product.id === deleteItem.id);

      if (state.cartItem[selectCartIndex].quantity > 1) {
        state.cartItem[selectCartIndex].quantity -= 1;
        state.cartItem[selectCartIndex].totalPrice -= deleteItem.price;
      }else{
        state.cartItem.splice(selectCartIndex,1)
      }

    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

//selector
export const selectCartItems = state => state.cart.cartItem;
export const selectCartTotalItems = state => state.cart.cartItem.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotalPrices = state => state.cart.cartItem.reduce((total, item) => total + item.totalPrice, 0)
