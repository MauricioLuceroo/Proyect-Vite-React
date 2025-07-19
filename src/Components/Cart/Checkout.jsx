import React from "react";
import styled from "styled-components";

const CheckoutWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;

  h2 {
    color: #13366cff;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 40px;
  }
`;

const OpinionesSection = styled.div`
  background-color: #f4f4f4;
  padding: 30px 20px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    margin-bottom: 20px;
    color: #222;
  }

  .opinion {
    margin-bottom: 15px;
    font-style: italic;
    color: #444;
  }

  .autor {
    font-weight: bold;
    color: #13366cff;
  }
`;

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <h2>¡Gracias por tu compra! 🛍️</h2>
      <p>En breve recibirás un correo con los detalles del pedido.</p>

      <OpinionesSection style={{ marginTop: "100px" }}>
        <h3>Opiniones de clientes</h3>
        <div className="opinion">
          "Todo llegó perfecto y rápido. ¡Gracias por el excelente servicio!"
          <div className="autor">- Valeria M.</div>
        </div>
        <div className="opinion">
          "Muy buena atención. Mi perrito está feliz con su nuevo juguete."
          <div className="autor">- Martín R.</div>
        </div>
        <div className="opinion">
          "Fácil de comprar y súper confiable. ¡Recomiendo!"
          <div className="autor">- Carla G.</div>
        </div>
      </OpinionesSection>
    </CheckoutWrapper>
  );
};

export default Checkout;
