import React from 'react';
import './StyleProductos.css';

const Productos = ({ producto }) => {
  // Armamos la URL de la imagen desde src/assets
  const imagenUrl = `/assets/${producto.imagen}`;

  return (
    <section className="card">
      <div className="imgContenedor">
        <img src={imagenUrl} alt={producto.nombre} className="imagen" />
      </div>
      <h3 className="nombre">{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>
      <p className="stock">Stock: {producto.stock}</p>

      <div className="cantidad">
        <button className="boton">-</button>
        <span> </span>
        <button className="boton">+</button>
      </div>
      <button className="agregarCarrito">Añadir al carrito</button>
    </section>
  );
};  

export default Productos;
