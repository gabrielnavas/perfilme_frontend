import env from '../../env'

export const register = async ({
  name='', 
  email='', 
  password='', 
  passwordConfirmation=''
}) => {
  const url = `${env.api.endpoint}user`
  const payload = { name, email, password, passwordConfirmation }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const json = await response.json()

  if(response.status === 400) {
    return {
      errors: json,
      user: undefined
    }
  }

  return {
    errors: [],
    user: json
  }
}

export const userLoginAPI = async ({
  email='', 
  password='', 
}) => {
  const url = `${env.api.endpoint}auth`
  const payload = { email, password }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const json = await response.json()

  if(response.status === 400) {
    return {
      errors: json,
      token: undefined
    }
  }

  return {
    errors: [],
    token: json.token
  }
}