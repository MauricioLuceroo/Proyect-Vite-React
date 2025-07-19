import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Productos from '../Products/Productos'; // El componente de tarjeta que ya tenés
import styled from 'styled-components';

const OfertasContainer = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: #f7f9fc;
`;

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #13366c;
  font-size: 2rem;
`;

const GridProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Ofertas = () => {
  const { products } = useContext(CartContext); // Suponemos que los productos están ahí
  const [productosEnOferta, setProductosEnOferta] = useState([]);

  useEffect(() => {
    // Filtrar los productos que tienen descuento o están en oferta
    const filtrados = products.filter((p) => p.descuento || p.oferta);
    setProductosEnOferta(filtrados);
  }, [products]);

  return (
    <OfertasContainer>
      <Titulo>¡Ofertas Especiales!</Titulo>

      {productosEnOferta.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay productos en oferta por ahora 😔</p>
      ) : (
        <GridProductos>
          {productosEnOferta.map((producto) => (
            <Productos key={producto.id} producto={producto} />
          ))}
        </GridProductos>
      )}
    </OfertasContainer>
  );
};

export default Ofertas;
