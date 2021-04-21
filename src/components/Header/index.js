import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

const Header = () => {
  
  const history = useHistory()

  return (
    <header>
      <span>Perfil me</span>
      <nav className='header_menu'>
      <button onClick={() => history.push('/login')}>Login</button>
      <button onClick={() => history.push('/create_user')}>Register</button>
        {/* <button>Logoff</button> */}
        {/* <button>Show me</button> */}
      </nav>
    </header>
  )
}

export default Header