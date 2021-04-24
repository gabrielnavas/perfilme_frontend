import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import * as pathsRoute from '../../../routes/pathsRoutes'

const ButtonAuth = () => {

  const locatin = useLocation()

  return locatin.pathname === pathsRoute.CREATE_USER ? (
    <Link
      to={'/login'}>
        <button>Logar</button>
    </Link>
  ) : (
    <Link
      to={"/create_user"}>
        <button>Me registrar</button>
    </Link>
  )
}

export default ButtonAuth