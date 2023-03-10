import React, { Component, Fragment } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";

export default class PageLoading extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ margin:'0 auto',textAlign:"center",marginTop:'8rem' }}>
          <img
            src="./Pulse-0.6s-51px.svg"
            height={100}
            width={100}
            alt="dataLoadingLogo"
          />
        </div>
      </Fragment>
    );
  }
}
