import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import About from './components/Layouts/About';
import Recipe from './components/Layouts/Recipe';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/default' component={Default} /> */}

        <Route path='/about' component={About} />
        <Route path='/recipe' component={Recipe} />
      </Fragment>
    </Router>
  );
};

export default App;
