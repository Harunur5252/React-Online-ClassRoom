import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import UserLoginPanel from "../components/UserLoginPanel/UserLoginPanel";
import Footer from "../components/Footer/Footer";

class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="UserLogin" />
        <UserLoginPanel />
        <Footer />
      </Fragment>
    );
  }
}

export default UserLoginPage;
