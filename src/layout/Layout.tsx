import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import BoardPage from '../boardPage/BoardPage';
import WelcomePage from '../welcomePage/WelcomePage';


class Layout extends Component {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    public redirectToWelcomePage = () => {
        return <Redirect to='/main' />;
    }

    public render() {
        return (
        <Router>
            <Switch>
                <Route exact={true} path='/' render={this.redirectToWelcomePage} />
                <Route path='/welcome' component={WelcomePage} />
                <Route path='/board' component={BoardPage} />
            </Switch>
        </Router>
        )
    }
}

export default Layout;
