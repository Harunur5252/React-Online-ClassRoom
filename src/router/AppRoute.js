import React, { Component, Fragment } from 'react';
import { Switch,Route,} from "react-router-dom";
import HomePage from '../Pages/HomePage'    
import CoursePlanePage from '../Pages/CoursePlanePage' 
import FreeClassPage from '../Pages/FreeClassPage' 
import RegistrationPage from '../Pages/RegistrationPage' 
import UserLoginPage from '../Pages/UserLoginPage' 


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/coursePlane">
                        <CoursePlanePage />
                    </Route>
                    <Route path="/classPage">
                        <FreeClassPage />
                    </Route>
                    <Route path="/registrationPage">
                        <RegistrationPage />
                    </Route>
                    <Route path="/userLogin">
                        <UserLoginPage />
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;