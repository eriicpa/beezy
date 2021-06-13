import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from './Route';

import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';

import NewService from '../pages/NewService';
import UpdateSerice from '../pages/UpdateService';



export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/services/new" component={NewService} isPrivate/>
        <Route path="/editprofile" component={EditProfile} isPrivate/>
        <Route path="/services/update" component={UpdateSerice} isPrivate/>

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}