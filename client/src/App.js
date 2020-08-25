import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import About from './components/About';
import Recipe1 from './components/Recipe1';
import PostList from './components/PostList/PostList';
import OriginalTea from './components/Layouts/Recipe/OriginalTea';
import Smoothie from './components/Layouts/Recipe/Smoothie';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/recipe' component={Recipe1} />
        <Route path='/originalTea' component={OriginalTea} />
        <Route path='/smoothie' component={Smoothie} />
        <Route path='/postList' component={PostList} />
      </Fragment>
    </Router>
  );
};

export default App;
