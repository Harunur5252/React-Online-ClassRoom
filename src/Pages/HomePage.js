import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Login from "../components/Login/Login";
import LearningPoint from "../components/LearningPoint/LearningPoint";
import Video from "../components/Video/Video";
import Payment from "../components/Payment/Payment";
import Carousel from "../components/Carousel/Carousel";
import FindMoreSection from "../components/FindMoreSection/FindMoreSection";
import Footer from "../components/Footer/Footer";
import JoinClassRoom from "../components/JoinClassRoom/JoinClassRoom";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="Home" />
        <Login />
        <LearningPoint />
        <Video />
        <JoinClassRoom />
        <Payment />
        <Carousel />
        <FindMoreSection />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
