import React from 'react'

import './styles.css'

import ButtonAuth from './ButtonsAuth'

const Header = () => 
  <header>
    <span>Perfil me</span>
    <nav className='header_menu'>
      <ButtonAuth />
    </nav>
  </header>

export default Header