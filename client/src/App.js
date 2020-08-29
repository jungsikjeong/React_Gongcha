import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import About from './components/About';
import Recipe from './components/Recipe';
import PostList from './components/PostList/PostList';
import OriginalTea from './components/Layouts/Recipe/OriginalTea';
import Smoothie from './components/Layouts/Recipe/Smoothie';
import Login from './components/Login';
import Register from './components/Register';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/originalTea' component={OriginalTea} />
          <Route path='/smoothie' component={Smoothie} />
          <Route path='/postList' component={PostList} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
