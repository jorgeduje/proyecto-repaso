import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    edad: 2
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action)=>{
        state.cart = [...state.cart, action.payload ]
      },
      removeById: (state, action)=>{
        let newArray = state.cart.filter( prod => prod.id !== action.payload)
        state.cart = newArray
      }
    },
})
export const { addToCart, removeById } = cartSlice.actions

export default cartSlice.reducer