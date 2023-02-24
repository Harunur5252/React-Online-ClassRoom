import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => {
    this.setState({ show: false });
  };
  modalSHow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            <Col lg={12} md={12} sm={12} className="videoCard">
              <div>
                <FontAwesomeIcon
                  onClick={this.modalSHow}
                  className="playBtn"
                  icon={faPlayCircle}
                />
                <h3 className="videoTitle text-center">React Course Plan</h3>
                <p className="videoDes text-center text-justify">
                  React Course Plan The overall skills gained from this project
                  based courses will prepare you for any type of project
                  development. In this course you will be taught how to write a
                  complete project with React JS including User Panel + Admin
                  Panel. Source code will also be provided with each class of
                  the course, so you can easily practice manually. This project
                  uses React JS with PHP for the server site and MySQL for the
                  database.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player
              poster=""
              startTime={0}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <BigPlayButton position="center" />

              <ControlBar autoHide={false}>
                <ReplayControl seconds={5} order={2.1} />
                <ForwardControl seconds={5} order={3.1} />
              </ControlBar>
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button className="videoBtn" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
