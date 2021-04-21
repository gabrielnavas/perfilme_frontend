import React from 'react'

import './styles.css'

const Form = ({ children, formTitle }) => {
  return (
    <form>
      <span className='title_form'>{ formTitle }</span>
      { children }
    </form>
  )
}

export default Form