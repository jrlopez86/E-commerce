import React from 'react'
import carrito from '../../img/carrito.png'
import logo from '../../img/logo.png'


const NavBar = () => {

  const options = [
    {id:0, title: 'Inicio'},
    {id:1, title: 'Cartas'},
    {id:2, title: 'Pokemon'}
  ]

  
  return (
    options.map(item => (   
      <nav className='navBarMod navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <img className='navBarMod__logo' src={logo} alt="" />
          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='flex-row-reverse collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navBarMod__a navbar-nav'>
              <a className='nav-link' href="#">{item.title}</a>
              <a href="#"><img className='navBarMod__carrito' src={carrito} alt="carrito de compras"/></a>
              <span className='navBarMod__contador'>3</span>
            </div>
          </div>
        </div>
      </nav>
      
   ))
   
  )
  
}

export default NavBar
