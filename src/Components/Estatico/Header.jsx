import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #314eddff, #000000ff);
  background-size: auto;
  padding: 10px ;
  margin-bottom: 2rem;
  text-align: center;

`;


const Logo = styled(NavLink)`
  font-size: 3rem;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-shadow:
    0 0 5px #77c3e7ff,
    0 0 10px #77c3e7ff,
    0 0 20px #66d5eeff,
    0 0 40px #66d5eeff,
    0 0 80px #66d5eeff;

  }
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 1.25rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  color: white;
  text-decoration: none;
  margin: 0 2rem;
  

  &.active {
    color: #ffffffff;
    border-bottom: 2px solid #ffffffff;
    text-shadow:
    0 0 5px #36a6daff,
    0 0 10px #fafafaff,
    0 0 20px #36a6daff,
    0 0 40px #36a6daff,
    0 0 80px #36a6daff; 
`;

//Nav bar
const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;


const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-left: 2rem;
`;

const CartBtn = styled(Button)`
  background-color: transparent !important;
  color: white !important;
  border: 2px solid white !important;
  padding: 7px 10px;
  border-radius: 8px;


  &:hover {
    background-color: #314eddff !important;
  }

  svg {
    vertical-align: middle;
  }
`;
const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #ff4d4f;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1px 6px;
  border-radius: 50%;
  z-index: 1;
`;

const LoginBtn = styled(Button)`
  background-color: transparent !important;
  color: white !important;
  border: 2px solid white !important;
  padding: 10px 10px;
  border-radius: 8px;
  margin-right: 20px;

  &:hover {
    background-color: #314eddff !important;
    color: white !important;
  }
`;
const MenuWrapper = styled.div`
  position: relative;
`;

const MenuToggle = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  cursor: pointer;

  &:hover {
   background-color: transparent;
    border-bottom: 2px solid #ffffffff;
    text-shadow:
    0 0 5px #36a6daff,
    0 0 10px #fafafaff,
    0 0 20px #36a6daff,
    0 0 40px #36a6daff,
    0 0 80px #36a6daff; ;
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 2.2rem;
  background-color: white;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.65);
  border-radius: 8px;
  width: 10rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  padding: 10px;
  color: black;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #314eddff;
    color: white;
    border-radius: 8px;
  }

  &.active {
    background-color: #314eddff;
    color: white;
  }
`;


const Header = ({ setIsCartOpen }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const { cart } = useContext(CartContext);
  const cantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <HeaderContainer>
      <div className="container">
        <h1>
          <Logo to="/">PetShop</Logo>
        </h1>

        <NavRow>
          <NavLinksWrapper>
            <NavLinkStyled to="/">Inicio</NavLinkStyled>

            {/* Menú desplegable */}
            <MenuWrapper ref={dropdownRef}>
              <MenuToggle onClick={() => setShowDropdown(prev => !prev)}>
                Productos ▾
              </MenuToggle>

              {showDropdown && (
                <MenuDropdown>
                  <MenuItem as={NavLink} to="/productos/perros" onClick={() => setShowDropdown(false)}>
                    Perros
                  </MenuItem>
                  <MenuItem as={NavLink} to="/productos/gatos" onClick={() => setShowDropdown(false)}>
                    Gatos
                  </MenuItem>
                </MenuDropdown>
              )}
            </MenuWrapper>


            <NavLinkStyled to="/Ofertas">Ofertas</NavLinkStyled>
            <NavLinkStyled to="/Contacto">Contacto</NavLinkStyled>
          </NavLinksWrapper>

              
          <RightControls>
            <CartBtn onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }}>
              <AiOutlineShoppingCart size={24} />
              {cantidadTotal > 0 && <CartBadge>{cantidadTotal}</CartBadge>}
            </CartBtn>

            <LoginBtn variant="outline-light" onClick={() => navigate("/Login")}>
              Inicio de sesión
            </LoginBtn>
          </RightControls>
        </NavRow>
      </div>
    </HeaderContainer>
  );
};

export default Header;
