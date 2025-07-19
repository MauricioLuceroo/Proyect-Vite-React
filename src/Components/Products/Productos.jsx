import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { obtenerImagen } from '../../utils/UseImagenes';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 18rem;
  margin: 20px;
  transition: transform 0.3s ease;
  border: none;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
  padding: 10px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(1, 5, 89, 1);
  }
`;

const ImagenProducto = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const CustomButton = styled.button`
  background-color: #13366cff;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #314eddff;
  }

  &:disabled {
    background-color: #000000ff;
    cursor: not-allowed;
  }
`;

const CarritoButton = styled(CustomButton)`
  width: 100%;
  font-weight: 600;
  margin-top: 8px;
`;

const Productos = ({ producto }) => {
  const { agregarCarrito, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const itemCarrito = cart.find((p) => p.id === producto.id);
  const cantidad = itemCarrito ? itemCarrito.cantidad : 0;

  const imagenUrl = obtenerImagen(producto.imagen);

  const handleClickCard = (e) => {
    if (e.target.closest('button')) return;
    navigate(`/productos/${producto.id}`);
  };

  return (
    <StyledCard onClick={handleClickCard}>
      <ImagenProducto variant="top" src={imagenUrl} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center text-primary">{producto.nombre}</Card.Title>
        <Card.Text className="text-secondary text-center" style={{ fontSize: '0.95rem' }}>
          <strong>Precio:</strong> ${producto.precio} <br />
        </Card.Text>
        <CarritoButton
          onClick={() => agregarCarrito(producto)}
          disabled={cantidad >= producto.stock}
        >
          <AiOutlineShoppingCart style={{ marginRight: '8px' }} />
          Comprar
        </CarritoButton>
      </Card.Body>
    </StyledCard>
  );
};

export default Productos;
