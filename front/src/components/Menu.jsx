import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
  <NavLink className="nav-link" activeClassName="active" exact to="/"><img src="/public/logo.png" alt="" className='img-fluid' /></NavLink>
   
    <button class="navbar-toggler" type="button" onClick={toggleMenu} >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
       
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" onClick={closeMenu} >
        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
          
        </li>
        <li class="nav-item" onClick={closeMenu}>
        <NavLink className="nav-link" activeClassName="active" to="/citas">Mis turnos</NavLink>
          
        </li>
        <li class="nav-item" onClick={closeMenu}>
        <NavLink className="nav-link" activeClassName="active" to="/contacto">Contacto</NavLink>
        </li>
        <li class="nav-item" onClick={closeMenu}>
        <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
          
        </li>

        <li class="nav-item" onClick={closeMenu}>
        <NavLink className="btn btn-outline-primary font-weight-bold" activeClassName="active" to="/login">Inicia sesión</NavLink>
      
        </li>

       
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}
