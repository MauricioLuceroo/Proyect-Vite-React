import React, { useEffect, useState } from "react";
import loadingGif from "../../assets/Loading.gif"; 
import ProductList from "../Products/ProductList.jsx";
import "./StyleHome.css";

const API_URL = "https://687ad236abb83744b7edeff3.mockapi.io/Productos";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="home">
      <section className="productos">
        {loading ? (
          <div className="gifLoading">
            <img src={loadingGif} alt="Cargando..." />
          </div>
        ) : (
          <ProductList productos={productos} />
        )}
      </section>
    </main>
  );
};

export default Home;
