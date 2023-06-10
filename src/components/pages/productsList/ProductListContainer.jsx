import { useContext } from "react";
import ProductListPresentacion from "./ProductListPresentacion"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";


const ProductListContainer = () => {
    const { dispatch } = useContext(CartContext);

    const [products, setProducts] = useState([]);
  
  
    let endpoint = "https://fakestoreapi.com/products";
  
    useEffect(() => {
      const getData = async () => {
        const getProducts = axios.get(endpoint);
        let res = await getProducts;
        setProducts(res.data);
      };
  
      getData();
    }, [endpoint]);

  return (
    <ProductListPresentacion products={products} dispatch={dispatch}/>
  )
}

export default ProductListContainer