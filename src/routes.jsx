'use strict'

import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './views/Home';
import UserLogin from './views/Auth';
import UserRegister from './views/Auth';

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="login" component={UserLogin} />
            <Route path="register" component={UserRegister} />
        </Route>
    </Router>
);
