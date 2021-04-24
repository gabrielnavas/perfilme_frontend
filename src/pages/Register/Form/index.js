import React from 'react'
import { useHistory } from 'react-router'

import * as pathRoutes from '../../../routes/pathsRoutes'

import Form from '../../../components/Form'
import ButtonsFormGroup from '../../../components/ButtonsFormGroup'
import ButtonForm from '../../../components/ButtonForm'
import InputGroup from '../../../components/InputGroup'
import Input from '../../../components/Input'
import Label from '../../../components/Label'
import ErrorForm from '../../../components/ErrorForm'
import ErrorFormGroup from '../../../components/ErrorFormGroup'

import {register as userRegisterAPI} from '../../../services/api/user'

const FormRegister = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const history = useHistory()

  const handleRegister = React.useCallback(() => {
    (async () => {
      const { errors } = await userRegisterAPI({
        name,
        email,
        password,
        passwordConfirmation
      })
      if(errors && errors.length === 0) {
        console.log('foi');
        history.push(pathRoutes.LOGIN)
      }
      setErrors(errors)
    })()
  }, [name, email, password, passwordConfirmation, history])

  return (
    <Form formTitle='Registrar'>
      <InputGroup>
        <Label>* Nome</Label>
        <Input 
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'  
          autoFocus 
          placeholder='Ricardo da Silva...'
        />
      </InputGroup>
      <InputGroup>
        <Label>* E-mail</Label>
        <Input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text' 
          placeholder='ricardo@gmail.com' />
      </InputGroup>
      <InputGroup>
        <Label>* Senha</Label>
        <Input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' 
          placeholder='********' />
      </InputGroup>
      <InputGroup>
        <Label>*Confirmação de Senha</Label>
        <Input 
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          type='password'
          placeholder='********' />
      </InputGroup>
      <ButtonsFormGroup>
        <ButtonForm 
          type='button' 
          onClick={handleRegister}>
            Cadastrar
        </ButtonForm>
      </ButtonsFormGroup>
      {
        errors.length > 0 && 
          errors.map((error, i) => 
            <ErrorForm key={i}>{`* ${error}`}</ErrorForm>)
      }
    </Form>
  )
}

export default FormRegister