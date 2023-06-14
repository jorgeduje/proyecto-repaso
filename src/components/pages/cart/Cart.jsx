import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeById } from "../../../store/cartSlice";


const Cart = () => {
  
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.cart);

  return (
    <div>
      <Link to="/">home</Link>
      <h1>Estoy en el carrito</h1>

      {cart.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} alt="" />
          <button onClick={()=>dispatch( removeById(prod.id) )}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
