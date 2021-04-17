import * as paths from './paths'

export const register = async ({
  name='', 
  email='', 
  password='', 
  passwordConfirmation=''
}) => {
  const payload = { name, email, password, passwordConfirmation }
  const response = await fetch(paths.user.register, {
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