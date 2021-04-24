import React from 'react'

import { userLoginAPI } from '../../../services/api/user'
import { Redirect, useHistory } from 'react-router'
import * as pathsRoutes from '../../../routes/pathsRoutes'

import Form from '../../../components/Form'
import ButtonsFormGroup from '../../../components/ButtonsFormGroup'
import ButtonForm from '../../../components/ButtonForm'
import InputGroup from '../../../components/InputGroup'
import Input from '../../../components/Input'
import Label from '../../../components/Label'
import ErrorFormGroup from '../../../components/ErrorFormGroup'
import ErrorForm from '../../../components/ErrorForm'

const FormLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const history = useHistory()

  const handleRegister = React.useCallback(() => {
    (async () => {
      const { errors: errorsResp, token, user } = await userLoginAPI({
        email,
        password,
      })
      if(token) {
        return history.push({
          pathname: pathsRoutes.SHOW_PAGE,
          state: { user, token }
        })
      }
      setErrors(errorsResp)
    })()
  }, [email, password, history])

  return (
    <Form formTitle='Realizar login'>
      <InputGroup>
        <Label>*E-mail</Label>
        <Input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text' 
          placeholder='ricardo@gmail.com' />
      </InputGroup>
      <InputGroup>
        <Label>*Senha</Label>
        <Input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' 
          placeholder='********' 
        />
      </InputGroup>
      <ButtonsFormGroup>
        <ButtonForm 
          type='button' 
          onClick={handleRegister}>
            Logar
        </ButtonForm>
      </ButtonsFormGroup>
      <ErrorFormGroup>
      {
        errors.length > 0 && 
          errors.map((error, i) => 
            <ErrorForm key={i}>{`* ${error}`}</ErrorForm>)
      }
      </ErrorFormGroup>
    </Form>
  )
}

export default FormLogin
