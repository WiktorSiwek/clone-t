import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import WelcomePage from '../welcomePage/WelcomePage';


export default class Layout extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {}
    }

    public redirectToWelcomePage = () => {
        return <Redirect to='/welcome' />;
    }


    public render() {
        return (
        <Router>
            <Switch>
                <Route exact={true} path='/' render={this.redirectToWelcomePage} />
                <Route path='/welcome' component={WelcomePage} />
            </Switch>
        </Router>
        )
    }
}
