import React, { Component, Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageLoading from "../components/PageLoading/PageLoading";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";

const HomePage = React.lazy(() => import("../Pages/HomePage"));
const CoursePlanePage = React.lazy(() => import("../Pages/CoursePlanePage"));
const FreeClassPage = React.lazy(() => import("../Pages/FreeClassPage"));
const RegistrationPage = React.lazy(() => import("../Pages/RegistrationPage"));
const UserLoginPage = React.lazy(() => import("../Pages/UserLoginPage"));
const ClassRoomPage = React.lazy(() => import("../Pages/ClassRoomPage"));
const ClassRoomHomePage = React.lazy(() =>
  import("../Pages/ClassRoomHomePage")
);
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
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            </Route>
            <Route path="/coursePlane">
              <PublicRoute>
                <CoursePlanePage />
              </PublicRoute>
            </Route>
            <Route path="/classPage">
              <PublicRoute>
                <FreeClassPage />
              </PublicRoute>
            </Route>
            <Route path="/registrationPage">
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            </Route>
            <Route path="/userLogin">
              <PublicRoute>
                <UserLoginPage />
              </PublicRoute>
            </Route>
            <Route path="/classroom">
              <PrivateRoute>
                <ClassRoomPage />
              </PrivateRoute>
            </Route>
            <Route path="/ClassRoomHome">
              <PrivateRoute>
                <ClassRoomHomePage />
              </PrivateRoute>
            </Route>
            <Route path="/tutorials">
              <PrivateRoute>
                <TutorialPage />
              </PrivateRoute>
            </Route>
            <Route path="/files">
              <PrivateRoute>
                <FilesPage />
              </PrivateRoute>
            </Route>
            <Route path="/messages">
              <PrivateRoute>
                <MessagesPage />
              </PrivateRoute>
            </Route>
            <Route path="/profile">
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            </Route>
            <Route path="/about">
              <PublicRoute>
                <AboutPage />
              </PublicRoute>
            </Route>
            <Route path="/contact">
              <PublicRoute>
                <ContactPage />
              </PublicRoute>
            </Route>
            <Route path="/privacy">
              <PublicRoute>
                <PrivacyPage />
              </PublicRoute>
            </Route>
            <Route path="/terms">
              <PublicRoute>
                <TermsPage />
              </PublicRoute>
            </Route>
            <Route path="/refund">
              <PublicRoute>
                <RefundPage />
              </PublicRoute>
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
