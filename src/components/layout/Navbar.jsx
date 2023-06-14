import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Productos</li>
        <li>About</li>
        <li>contacto</li>
        <Link to="/cart">Carrito</Link>
      </ul>
  
    </div>
  );
};

export default Navbar;
