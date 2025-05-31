
import React from "react";
import Header from "../Estatico/Header";
import Footer from "../Estatico/Footer";
import ProductList from "../ProductList";
import loading from "../../../public/assets/Loading.gif"; // Importamos la imagen de carga

const Gallery = ({ productos, loading, error }) => {
  return (
    <>
      <Header />
      <main className="gallery">
        <h2>Todos los productos</h2>
         {                        
         loading 
         ? (
         <div className="gifLoading">
           <img src="/assets/Loading.gif" alt="Cargando..." />
           </div>
         )  
           : <ProductList productos={productos} />     
        }
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
