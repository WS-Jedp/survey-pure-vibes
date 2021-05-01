import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Charity } from '../pages/Charity'

export const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/charity" exact={true}>
                    <Charity />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}