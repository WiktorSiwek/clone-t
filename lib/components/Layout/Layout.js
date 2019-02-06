import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import BoardPage from '../boardPage/BoardPage';
import WelcomePage from '../welcomePage/WelcomePage';


class Layout extends Component {
   constructor(props) {
      super(props);
      this.state = {
         elo: 120
      };
   }

    redirectToWelcomePage = () => {
       return <Redirect to='/welcome' />;
    }

    render() {
       return (
          <Router>
             <Switch>
                <Route exact={true} path='/' render={this.redirectToWelcomePage} />
                <Route path='/welcome' component={WelcomePage} />
                <Route path='/board' component={BoardPage} />
             </Switch>
          </Router>
       );
    }
}

export default Layout;
