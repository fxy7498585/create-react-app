import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as React from 'react'
import Index from '../app/mobile/index'


const Routes: React.FC = () => (
  <Router basename={''}>
    <Switch>
      <Route path={'/'} exact={true} component={Index} />
      <Redirect to={'/'} />
    </Switch>
  </Router>
);


export default Routes;
