import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Estatico/Header'
import Footer from '../Estatico/Footer'
import { CartContext } from '../../Context/CartContext'
import styled from 'styled-components'
import { useContext } from 'react'
import { obtenerImagen } from '../../utils/UseImagenes'
import { AiOutlineShoppingCart } from 'react-icons/ai'


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
`;

const DetallesProductos = () => {
  const { id } = useParams();
  const { products, loading, error, agregarCarrito } = useContext(CartContext);

  if (loading) return <Container><Texto>Cargando producto...</Texto></Container>;
  if (error) return <Container><Texto>Error al cargar los productos</Texto></Container>;

  const productoEncontrado = products.find((prod) => prod.id === parseInt(id));

  if (!productoEncontrado) return <Container><Texto>Producto no encontrado</Texto></Container>;

  const imagenUrl = obtenerImagen(productoEncontrado.imagen);

  const handleAgregar = () => {
    agregarCarrito(productoEncontrado);
    alert('Producto agregado al carrito ✅');
  };

  return (
    
      
      <Container>
        <Imagen src={imagenUrl} alt={productoEncontrado.nombre} />
        <Titulo>{productoEncontrado.nombre}</Titulo>
        <Precio>${productoEncontrado.precio}</Precio>
        <Texto><strong>Descripción:</strong> {productoEncontrado.descripcion}</Texto>
        <Texto><strong>Stock disponible:</strong> {productoEncontrado.stock}</Texto>

         <CarritoButton
                 onClick={() => agregarCarrito(productoEncontrado)}
                 disabled={productoEncontrado.stock <= products.stock}
               >
                 <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
                 Comprar
         </CarritoButton>

        <Volver to="/productos">← Volver a productos</Volver>
      </Container>
      
    
  );
};

export default DetallesProductos;
