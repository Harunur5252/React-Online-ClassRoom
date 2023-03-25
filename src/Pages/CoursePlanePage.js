import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Learn from "../components/Learn/Learn";
import Footer from "../components/Footer/Footer";

class CoursePlanePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="CoursePlan" />
        <Learn />
        <Footer />
      </Fragment>
    );
  }
}

export default CoursePlanePage;
