import styled from "styled-components";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.44);
  z-index: 999;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ControlBtn = styled.button`
  background-color: #eee;
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  color: black;
`;

const ActionBtn = styled.button`
  padding: 0.5rem;
  display: block;
  
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

function Cart({ isCartOpen, setIsCartOpen }) {
  const {
    cart,
    añadirAlCarrito,
    eliminarDelCarrito,
    deleteFromCart,
    limpiarCarrito,
  } = useCart();

  const navigate = useNavigate();

  return (
   <Overlay $isOpen={isCartOpen} onClick={() => setIsCartOpen(false)}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setIsCartOpen(false)}>X</CloseBtn>
        <h2>Tu carrito</h2>

        {cart.length === 0 ? (
          <>
            <p>No hay productos en el carrito.</p>
            <ActionBtn onClick={() => { setIsCartOpen(false); navigate("/productos"); }}>
              Ver productos
            </ActionBtn>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <span>{item.nombre}</span>
                <ItemControls>
                  <ControlBtn onClick={() => removeFromCart(item.id)}>-</ControlBtn>
                  <span>{item.quantity}</span>
                  <ControlBtn onClick={() => añadirAlCarrito(item)}>+</ControlBtn>
                  <ControlBtn onClick={() => eliminarDelCarrito(item.id)}>🗑️</ControlBtn>
                </ItemControls>
              </CartItem>
            ))}

            <ActionBtn onClick={limpiarCarrito}>Vaciar carrito</ActionBtn>
            <ActionBtn onClick={() => { setIsCartOpen(false); navigate("/checkout"); }}>
              Finalizar compra
            </ActionBtn>
          </>
        )}
      </Sidebar>
    </Overlay>
  );
}

export default Cart;
