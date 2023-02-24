import React, { Component, Fragment } from "react";
import ClassRoom from "../components/ClassRoom/ClassRoom";

export default class ClassRoomPage extends Component {
  render() {
    return (
      <Fragment>
        <ClassRoom
          title="ClassRoom"
          text="This is the classroom dashboard all things that you can see using it."
        />
      </Fragment>
    );
  }
}
