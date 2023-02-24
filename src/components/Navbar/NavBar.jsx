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
                <ScrollLink className='nav-link' activeClass='active' to='cartas' spy={true} smooth={true} offset={-1200} duration={500}>Cartas</ScrollLink >
              <ul className="menu">
                  <li><Link className='nav-link' to=''>Categoría</Link>
                    <ul>
                      <li><Link className='nav-link' to=''>Fuego</Link></li>
                      <li><Link className='nav-link' to=''>Agua</Link></li>
                      <li><Link className='nav-link' to=''>Planta</Link></li>
                      <li><Link className='nav-link' to=''>Electrico</Link></li>
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
              <h1>POKEMON TRADING CARDS</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo praesentium vel eligendi ratione sint nobis tenetur quos sequi, expedita atque aut quasi dicta temporibus sed neque dolorum? Exercitationem, beatae?</p>
          </div>
          <Banner />
        </div>
      </header>
  )
}

export default NavBar

