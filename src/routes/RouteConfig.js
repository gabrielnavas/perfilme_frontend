import { Switch, Route, Router } from 'react-router-dom'

import * as paths from './pathsRoutes'
import historyRouter from './historyRoutes'
import ShowPage from '../pages/ShowPage'

 const RouterConfig = () => (
  <Router history={historyRouter}>
      <Switch>
          <Route
              exact
              path={paths.SHOW_PAGE}
              component={ShowPage}
          />
          {/* <PrivateRoute
              exact
              redirectPath={LOGIN_PAGE_ROUTE}
              path={TODO_PAGE_ROUTE}
              component={TodoPage}
          /> */}
          <Route 
            path="*" 
            component={() => <h1>not found</h1>}
          />
      </Switch>
  </Router>
)

export default RouterConfig