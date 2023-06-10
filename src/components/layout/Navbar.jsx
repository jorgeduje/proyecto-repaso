import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../../context/DarkContext";



const Navbar = () => {

  const { dispatch } = useContext(DarkContext)

  return (
    <div>
      <ul>
        <li>Productos</li>
        <Link to="/">Ir al home</Link>
       <Link to="/cart">Ir al carrito</Link>
      </ul>

      <button onClick={()=> dispatch( {type:"changeMode" } ) }>Cambiar de modo </button>
  
    </div>
  );
};

export default Navbar;
