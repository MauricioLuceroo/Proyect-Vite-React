import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../Context/CartContext';

const Container = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;

const Imagen = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const Titulo = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #13366c;
  text-align: center;
`;

const Texto = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #555;
  text-align: center;
`;

const Precio = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #037f58ff;
  margin-bottom: 1.2rem;
`;

const Volver = styled(Link)`
  margin-top: 1.5rem;
  background-color: #13366c;
  color: #fff;
  padding: 10px 10px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
`;

const CarritoButton = styled.button`
  margin-top: 1rem;
  background-color: #0f2e5e;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1577e0ff;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const DetallesProductos = () => {
  const { id } = useParams();
  const { agregarCarrito } = useContext(CartContext);
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://687ad236abb83744b7edeff3.mockapi.io/Productos/${id}`) 
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta');
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar producto:', err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Container><Texto>Cargando producto...</Texto></Container>;
  if (error || !producto) return <Container><Texto>Error al cargar el producto</Texto></Container>;

  return (
    <Container>
      <Imagen src={producto.imagen} alt={producto.nombre} />
      <Titulo>{producto.nombre}</Titulo>
      <Precio>${producto.precio}</Precio>
      <Texto><strong>Descripción:</strong> {producto.descripcion}</Texto>
      <Texto><strong>Stock disponible:</strong> {producto.stock}</Texto>

      <CarritoButton
        onClick={() => agregarCarrito(producto)}
        disabled={producto.stock <= 0}
      >
        <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
        Comprar
      </CarritoButton>

      <Volver to="/productos">← Volver a productos</Volver>
    </Container>
  );
};

export default DetallesProductos;
