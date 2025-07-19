import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../Products/ProductList";
import loadingGif from "../../assets/Loading.gif";

const ProductosFiltrados = () => {
  const { animal } = useParams(); // <-- viene de la URL: perro o gato
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("https://mockapi.io/turuta/productos"); 
        const data = await res.json();

        // Filtramos por tipo de animal
        const filtrados = data.filter(
          (producto) => producto.animal?.toLowerCase() === animal.toLowerCase()
        );

        setProductos(filtrados);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [animal]);

  if (loading) {
    return (
      <div className="gifLoading">
        <img src={loadingGif} alt="Cargando..." />
      </div>
    );
  }

  if (error) {
    return <p>Hubo un error al cargar los productos.</p>;
  }

  if (productos.length === 0) {
    return <p>No se encontraron productos para "{animal}".</p>;
  }

  return (
    <main className="gallery">
      <h2 style={{ marginLeft: 30 }}>
        Productos para {animal === "gato" ? "gatos" : "perros"}
      </h2>
      <ProductList productos={productos} />
    </main>
  );
};

export default ProductosFiltrados;
