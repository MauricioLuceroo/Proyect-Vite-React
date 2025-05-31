import React from "react";
import { Link } from "react-router-dom";
import Header from "../Estatico/Header";
import Footer from "../Estatico/Footer";


const NotFound = () => {
  return (
    <>
    <Header />
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
       <button><Link to="/"> Volver al inicio </Link></button>
    <Footer />
    </>
  );
};

export default NotFound;