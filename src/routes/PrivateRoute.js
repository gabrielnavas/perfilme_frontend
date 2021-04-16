import { Redirect, Route } from 'react-router-dom'

import { getToken } from '../services/localStorage/token'

export const PrivateRoute = ({ exact, path, redirectPath, component: Component }) => {

  if (!getToken()) {
    return <Redirect exact to={redirectPath} />
  }

  return (
    <Route exact={exact} path={path} component={Component} />
  )
}