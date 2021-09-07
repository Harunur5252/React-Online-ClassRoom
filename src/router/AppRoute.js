import React, { Component, Fragment } from 'react';
import { Switch,Route,} from "react-router-dom";
import HomePage from '../Pages/HomePage'    
import CoursePlanePage from '../Pages/CoursePlanePage' 
import FreeClassPage from '../Pages/FreeClassPage' 
import RegistrationPage from '../Pages/RegistrationPage' 
import UserLoginPage from '../Pages/UserLoginPage' 
import ClassRoomPage from '../Pages/ClassRoomPage';
import ClassRoomHomePage from '../Pages/ClassRoomHomePage';
import TutorialPage from '../Pages/TutorialPage';
import FilesPage from '../Pages/FilesPage';
import MessagesPage from '../Pages/MessagesPage';
import ProfilePage from '../Pages/ProfilePage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import PrivacyPage from '../Pages/PrivacyPage';
import TermsPage from '../Pages/TermsPage';
import RefundPage from '../Pages/RefundPage';


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
                    <Route path="/classroom">
                        <ClassRoomPage />
                    </Route>
                    <Route path="/ClassRoomHome">
                        <ClassRoomHomePage />
                    </Route>
                    <Route path="/tutorials">
                        <TutorialPage />
                    </Route>
                    <Route path="/files">
                        <FilesPage />
                    </Route>
                    <Route path="/messages">
                        <MessagesPage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/privacy">
                        <PrivacyPage />
                    </Route>
                    <Route path="/terms">
                        <TermsPage />
                    </Route>
                    <Route path="/refund">
                        <RefundPage />
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;