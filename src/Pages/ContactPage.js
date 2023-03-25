import React, { Component, Fragment } from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export default class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <title>Contact</title>
        <TopNavigation />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}
