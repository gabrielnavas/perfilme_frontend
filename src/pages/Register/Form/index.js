import React from 'react'

import './styles.css'
import {register as userRegisterAPI} from '../../../services/api/user'

const Form = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const handleRegister = React.useCallback(() => {
    (async () => {
      const {errors, user} = await userRegisterAPI({
        name,
        email,
        password,
        passwordConfirmation
      })
      setErrors(errors)
    })()
  }, [name, email, password, passwordConfirmation])

  return (
    <form>
      <span className='title_form'>Registrar</span>
      <div className='group_input'>
        <label>*Nome</label>
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'  
          autoFocus 
          placeholder='Ricardo da Silva...'
        />
      </div>
      <div className='group_input'>
        <label>*E-mail</label>
        <input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text' 
          placeholder='ricargo@gmail.com' />
      </div>
      <div className='group_input'>
        <label>*Senha</label>
        <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' 
          placeholder='********' />
      </div>
      <div className='group_input'>
        <label>*Confirmação de Senha</label>
        <input 
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          type='password'
          placeholder='********' />
      </div>
      <div className='group_button'>
        <button type='button' onClick={handleRegister}>Cadastrar</button>
      </div>
      <div className='errors'>
        {errors.length > 0 && errors.map(error => <span>{`* ${error}`}</span>)}
      </div>
    </form>
  )
}

export default Form