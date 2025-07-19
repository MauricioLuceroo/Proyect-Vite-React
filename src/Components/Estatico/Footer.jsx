import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #314eddff, #000000ff);
  background-size: auto;
  background-position: center;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 PetShop. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
