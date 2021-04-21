import React from 'react'

import './styles.css'

const Input = ({
  type,  
  value,
  onChange,
  placeholder,
  autoFocus, 
}) => (
  <input 
    className='input_form'
    type={type} 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    autoFocus={autoFocus} 
  />
)

export default Input