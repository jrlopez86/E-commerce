import React from 'react'
import logo from '../../img/logo.png'
import Banner from './Banner'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Link as ScrollLink  } from 'react-scroll';


const NavBar = () => {
  
  return (
      <header>
        <nav className='navBarMod navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <img className='navBarMod__logo' src={logo} alt="" />
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='flex-row-reverse collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navBarMod__a navbar-nav'>
                <Link className='nav-link' to={'/'}>Inicio</Link>
                <ScrollLink className='nav-link' to='cartas' smooth={true} duration={500}>Cartas</ScrollLink>
              <ul className="menu">
                  <li><Link className='nav-link' to=''>Categoría</Link>
                    <ul>
                      <li><Link className='nav-link' to='/categorias/fuego'>Fuego</Link></li>
                      <li><Link className='nav-link' to='/categorias/agua'>Agua</Link></li>
                      <li><Link className='nav-link' to='/categorias/planta'>Planta</Link></li>
                      <li><Link className='nav-link' to='/categorias/insecto'>Insecto</Link></li>
                    </ul>
                  </li>
                </ul>
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>

        <div className='contenedor'>
          <div className='contenedor__texto'> 
              <h1>POKÉMON TRADING CARDS</h1>
              <p> Pokémon es un juego de cartas coleccionables en el que los jugadores utilizan cartas con imágenes de Pokémon, personajes y objetos para luchar contra su oponente. Cada jugador tiene una baraja de 60 cartas que contiene Pokémon, energía y cartas de entrenador.</p>
          </div>
          <Banner />
        </div>
      </header>
  )
}

export default NavBar

