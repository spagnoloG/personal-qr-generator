import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import {routes} from './router';

const App = () => {

  const [auth, setAuth] = React.useState();

  React.useEffect(() => {

  }, [])
  
  return (
    <div className="App">
      <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      </Router>
    </div>
  );
}

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default App;
