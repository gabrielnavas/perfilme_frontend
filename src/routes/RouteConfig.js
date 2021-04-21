import { Switch, Route, Router } from 'react-router-dom'

import * as paths from './pathsRoutes'

import historyRouter from './historyRoutes'

import ShowPage from '../pages/ShowPage'
import Register from '../pages/Register'
import Login from '../pages/Login'

 const RouterConfig = () => (
  <Router history={historyRouter}>
      <Switch>
          <Route
              exact
              path={paths.SHOW_PAGE}
              component={ShowPage}
          />
          <Route
              exact
              path={paths.CREATE_USER}
              component={Register}
          />
          <Route
              exact
              path={paths.LOGIN}
              component={Login}
          />
          {/* <Route path='*' component={ShowPage} />s */}
          {/* <PrivateRoute
              exact
              redirectPath={LOGIN_PAGE_ROUTE}
              path={TODO_PAGE_ROUTE}
              component={TodoPage}
          /> */}
      </Switch>
  </Router>
)

export default RouterConfig