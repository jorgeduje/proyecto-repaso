import { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../context/DarkContext";
import { Typography } from "@mui/material";
import TraerComentarios from "../../../TraerComentarios";
import TraerUsuarios from "../../../TraerUsuarios";

const Home = () => {
  const { isDark } = useContext(DarkContext);
  console.log(isDark);

  return (
    <div>
      <h1 style={{ color: isDark ? "white" : "black" }}>Este es el home</h1>
      <Link to="/login">Iniciar sesion</Link>
      <Link to="/products">ver productos</Link>

      <Typography variant="h1" color="primary">
        Este es el titulo de la app
      </Typography>

      <TraerComentarios />
      <TraerUsuarios />
    </div>
  );
};

export default Home;
