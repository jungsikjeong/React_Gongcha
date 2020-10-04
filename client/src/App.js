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
import Profile from './components/Profile';
import PostPage from './components/PostList/PostPage';
import PrivateRoute from './components/routing/PrivateRoute';
import ProfileMenu from './components/Header/ProfileMenu';
import Write from './components/Write/Write';
import UserProfile from './components/UserProfile/UserProfile';

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
          {/* auth페이지 */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          {/* Menu */}
          <Route path='/about' component={About} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/originalTea' component={OriginalTea} />
          <Route path='/smoothie' component={Smoothie} />

          {/* Post */}
          <Route exact path='/postList' component={PostList} />
          <PrivateRoute exact path='/write' component={Write} />
          <Route exact path='/postPage/:id' component={PostPage} />

          {/* 내 정보 */}
          <PrivateRoute path='/profile' component={Profile} />

          {/* 유저 프로필 */}
          {/* // todo:: `/profile/:userid로 변경` */}
          <Route exact path='/userProfile' component={UserProfile} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
