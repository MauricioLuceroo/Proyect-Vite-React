import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <>
    
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
       <button><Link to="/"> Volver al inicio </Link></button>
    
    </>
  );
};

export default NotFound;