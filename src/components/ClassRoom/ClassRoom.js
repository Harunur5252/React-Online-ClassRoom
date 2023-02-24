import React, { Component, Fragment } from "react";

import Menu from "../Menu/Menu";

export default class ClassRoom extends Component {
  render() {
    return (
      <Fragment>
        <title>{this.props.title}</title>
        <Menu>
          <div className="container mt-5">
            <p
              className="text-justify"
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              {this.props.text}
            </p>
          </div>
        </Menu>
      </Fragment>
    );
  }
}
