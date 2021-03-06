import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
};

export default routes;
