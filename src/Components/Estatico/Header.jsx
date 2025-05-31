
import React from 'react';
import { NavLink } from 'react-router-dom';
import './StyleEstatico.css'; // Import the CSS file for styling

function Header() {  
  return (
    <header className='header'>  
     <h1><NavLink to="/" className='Logo'>PetShop</NavLink></h1>
      <nav className='navBar'>   
        <ul>
           <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
           Inicio </NavLink>
           <NavLink to="/Productos" className={({ isActive }) => isActive ? "link active" : "link"}>
           Productos
          </NavLink>
           <NavLink to="/Contacto" className={({ isActive }) => isActive ? "link active" : "link"}>
          Contacto
          </NavLink>
           <NavLink to="/SobreNosotros" className={({ isActive }) => isActive ? "link active" : "link"}>
          Sobre Nosotros
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
 
