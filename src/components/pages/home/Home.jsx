import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {



  return (
    <div>
      <h1>Este es el home</h1>
      <Link to="/login">Iniciar sesion</Link>
      <Link to="/products">ver productos</Link>

    </div>
  );
};

export default Home;
