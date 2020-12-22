import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, MainApp, Meeting } from '../../pages';

const Routes = () => {
    return (
        // BrowserRouter(Router) wrapper all routing / routes (By Prana)
        <Router>
            {/* Switch page*/}
            <Switch>
                {/* Route for Page */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;