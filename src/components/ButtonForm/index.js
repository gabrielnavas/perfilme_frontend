import React from 'react'

import './styles.css'

const ButtonForm = ({ type, onClick, children}) => 
  <button 
    type={type} 
    onClick={onClick}>
      { children }
  </button>

export default ButtonForm