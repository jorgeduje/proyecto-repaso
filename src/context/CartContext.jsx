import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [], 
  total: 0,
  precio: 0,
};

const cartReducer = (state, action) => {
  // action = {type, payload}

  switch (action.type) {
    case "addToCart":
      return {...state,  cart: [...state.cart, action.payload] };
    case "deleteById":
      let newArray = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, cart: newArray };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  let data = {
    dispatch,
    cart: state.cart,
    total: state.total,
    precio: state.precio
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
