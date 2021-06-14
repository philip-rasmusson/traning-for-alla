import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView/HomeView'
import RoutingPath from './RoutingPath'
import { Footer } from '../components/footer/Footer'

export const Routes = (props:{children?: React.ReactChild}) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
            </Switch>
            <Footer />
        </Router>
    )
}
