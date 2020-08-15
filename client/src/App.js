import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Main} />

        {/* <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch> */}
      </Fragment>
    </Router>
  );
};

export default App;
