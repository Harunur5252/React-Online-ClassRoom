import React, { Component, Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageLoading from "../components/PageLoading/PageLoading";


const HomePage = React.lazy(() => import("../Pages/HomePage"));
const CoursePlanePage = React.lazy(() => import("../Pages/CoursePlanePage"));
const FreeClassPage = React.lazy(() => import("../Pages/FreeClassPage"));
const RegistrationPage = React.lazy(() => import("../Pages/RegistrationPage"));
const UserLoginPage = React.lazy(() => import("../Pages/UserLoginPage"));
const ClassRoomPage = React.lazy(() => import("../Pages/ClassRoomPage"));
const ClassRoomHomePage = React.lazy(() => import("../Pages/ClassRoomHomePage"));
const TutorialPage = React.lazy(() => import("../Pages/TutorialPage"));
const FilesPage = React.lazy(() => import("../Pages/FilesPage"));
const MessagesPage = React.lazy(() => import("../Pages/MessagesPage"));
const ProfilePage = React.lazy(() => import("../Pages/ProfilePage"));
const AboutPage = React.lazy(() => import("../Pages/AboutPage"));
const ContactPage = React.lazy(() => import("../Pages/ContactPage"));
const PrivacyPage = React.lazy(() => import("../Pages/PrivacyPage"));
const TermsPage = React.lazy(() => import("../Pages/TermsPage"));
const RefundPage = React.lazy(() => import("../Pages/RefundPage"));


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={<PageLoading />}>
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
        </Suspense>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Fragment>
    );
  }
}

export default AppRoute;
