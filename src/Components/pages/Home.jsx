import React from "react";
import Footer from "../Estatico/Footer";
import Header from "../Estatico/Header";
import Productos from "../Productos";
import ProductList from "../ProductList";
import "./StyleHome.css"; // Importamos el CSS específico para Home

const Home = ({productos, loading, error}) => {
  return (
    <>
      <Header />
      <main className="home">

        <h1 className="titulo">Bienvenidos a mi Tienda</h1>

        <p className="texto"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Laborum sint est iste blanditiis illo possimus labore excepturi, 
          aliquam cumque officiis omnis aspernatur quae dicta id velit quos 
          necessitatibus. Totam, vitae!
        </p>

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

export default Home;
