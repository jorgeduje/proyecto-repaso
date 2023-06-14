import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";



const ProductsList = () => {

  const dispatch = useDispatch()

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

  console.log(products);

  return (
    <div>
      {products.map(({id, title, image}) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt=""  style={{width: "200px"}}/>
            <button onClick={()=>dispatch( addToCart({id, title, image}) ) }>Agregar</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
