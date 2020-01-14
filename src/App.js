import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncView = asyncComponent(() => {
  return import('./containers/ViewImage.js');
});

const App = () => {
  return (
    <div>
      <header>
        <h1>Clink link below</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='/user'>User</Link>
          </li>
          <li>
            <Link to='/view'>View</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <h1>Hallo</h1>
        </Route>
        <Route path='/user'>
          <Users />
        </Route>
        <Route path='/view'>
          <AsyncView />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
