import React from 'react'

const ErrorForm = ({ key, message }) => 
  <span key={key}>{`* ${message}`}</span>

export default ErrorForm