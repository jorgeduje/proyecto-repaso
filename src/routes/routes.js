import Cart from "../components/pages/cart/Cart";
import Home from "../components/pages/home/Home";
import ProductListContainer from "../components/pages/productsList/ProductListContainer";


export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "productList",
    path: "/products",
    Element: ProductListContainer ,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];
