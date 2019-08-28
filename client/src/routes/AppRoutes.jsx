import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default AppRoutes;
