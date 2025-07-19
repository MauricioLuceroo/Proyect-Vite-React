import React from 'react';
import Productos from './Productos';

const ProductList = ({ productos, modoAdmin = false, onEliminar }) => {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {productos.map(producto => (
        <div key={producto.id} style={{ position: 'relative', margin: '1rem' }}>
          <Productos producto={producto} />
          {modoAdmin && (
            <button
              onClick={() => onEliminar(producto.id)}
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '4px 8px',
                cursor: 'pointer',
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
