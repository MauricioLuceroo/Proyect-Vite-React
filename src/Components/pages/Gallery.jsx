
import React from "react";
import Header from "../Estatico/Header";
import Footer from "../Estatico/Footer";
import ProductList from "../Products/ProductList";
import loading from "../../assets/Loading.gif"; 
import { VscLoading } from "react-icons/vsc";

const Gallery = ({ productos, loading, error }) => {
  return (
    <>
      
      <main className="gallery">
        <h2 style={{marginLeft: 30}}>Todos los productos</h2>
         {                        
         loading 
         ? (
         <div className="gifLoading">
           <img src={loading} alt="Cargando..." />
           </div>
         )  
           : <ProductList productos={productos} />     
        }
      </main>
      
    </>
  );
};

export default Gallery;
