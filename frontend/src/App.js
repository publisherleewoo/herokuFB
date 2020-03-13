import React from 'react';
import router from './router'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        {
          router.map((r,i) => <Route key={i} exact={r.exact} path={r.path} component={r.component} />)
        }
      </Switch>
    </Router>
  );
}

export default App;
