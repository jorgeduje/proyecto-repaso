import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("carrito")) || [],
  edad: 2,
};

//ANCHOR --->  localStorage.setItem( "carrito" , JSON.stringify() )
//ANCHOR --->  JSON.parse(localStorage.getItem( "carrito" ) )
//ANCHOR --->  localStorage.removeItem("carrito")

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("carrito", JSON.stringify(state.cart));
    },
    removeById: (state, action) => {
      let newArray = state.cart.filter((prod) => prod.id !== action.payload);
      state.cart = newArray;
      state.cart.length > 0
        ? localStorage.setItem("carrito", JSON.stringify(state.cart))
        : localStorage.removeItem("carrito");
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("carrito");
    },
  },
});
export const { addToCart, removeById, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
