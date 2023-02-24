import React, { Component } from "react";
import { Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ClassVideo from "../components/ClassVideo/ClassVideo";
import Footer from "../components/Footer/Footer";
class FreeClassPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="FreeClass" />
        <ClassVideo />
        <Footer />
      </Fragment>
    );
  }
}

export default FreeClassPage;
