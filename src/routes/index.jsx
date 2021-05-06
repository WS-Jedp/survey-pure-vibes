import React from 'react'
import { Route, Switch, Redirect, useLocation  } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home } from '../pages/Home'
import { Poverty } from '../pages/Poverty'
import { Solutions } from '../pages/Solutions'
import { SolutionEnglish } from '../pages/Solution/SolutionEnglish'
import { SolutionMetorship } from '../pages/Solution/SolutionMentorship'
import { Goal } from '../pages/Goal'
import { Ready } from '../pages/Ready'
import { Manners } from '../pages/Survey/Manners'
import { Charity } from '../pages/Survey/Charity'
import { Subscription } from '../pages/Survey/Subscription'
import { ImpactInitiator } from '../pages/Survey/ImpactInitiator'
import { CreativeCreatures } from '../pages/Survey/CreativeCreatures'
import { TravelTripsters } from '../pages/Survey/TravelTripsters'

export const App = () => {

    const location = useLocation()

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Switch  location={location} key={location.pathname}>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/poverty" exact={true}>
                        <Poverty />
                    </Route>
                    <Route path="/solutions" exact={true}>
                        <Solutions />
                    </Route>
                    <Route path="/english-project" exact={true}>
                        <SolutionEnglish />
                    </Route>
                    <Route path="/mentorship-project" exact={true}>
                        <SolutionMetorship />
                    </Route>
                    <Route path="/goal" exact={true}>
                        <Goal />
                    </Route>
                    <Route path="/ready" exact={true}>
                        <Ready />
                    </Route>
                    <Route path="/manners">
                        <Manners />
                    </Route>
                    <Route path="/charity">
                        <Charity />
                    </Route>
                    <Route path="/subscription">
                        <Subscription />
                    </Route>
                    <Route path="/impact-initiator">
                        <ImpactInitiator />
                    </Route>
                    <Route path="/creative-creatures">
                        <CreativeCreatures />
                    </Route>
                    <Route path="/travel-tripsters">
                        <TravelTripsters />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </AnimatePresence>
        </>
    )
}