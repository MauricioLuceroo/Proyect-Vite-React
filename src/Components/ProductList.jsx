import React from 'react';
import './StyleProductos.css';
import Productos from './Productos';

const ProductList = ({ productos }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
    {
        productos.map((producto) => (
        <Productos key={producto.id} producto={producto} />
      ))
    }
      
    </div>
  )
}

export default ProductList;