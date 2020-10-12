import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About';
import Recipe from '../Recipe';
import PostList from '../PostList/PostList';
import OriginalTea from '../Layouts/Recipe/OriginalTea';
import Smoothie from '../Layouts/Recipe/Smoothie';
import Login from '../Login';
import Register from '../Register';
import Profile from '../Profile';
import PostPage from '../PostList/PostPage';
import PrivateRoute from '../routing/PrivateRoute';
import ProfileMenu from '../Header/ProfileMenu';
import Write from '../Write/Write';
import UserProfile from '../UserProfile/UserProfile';
import NotFound from '../Layouts/NotFound';

const Routes = () => {
  return (
    <>
      <Switch>
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
        <Route exact path='/userProfile/:id' component={UserProfile} />

        {/* 경로 외에 곳으로 갔을때 */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
