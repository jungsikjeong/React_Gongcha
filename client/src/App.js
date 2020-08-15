import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Default from './default/Default';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Main} />
        <Route exact path='/default' component={Default} />

        {/* <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch> */}
      </Fragment>
    </Router>
  );
};

export default App;
