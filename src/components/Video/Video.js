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

import DataLoading from "../DataLoading/DataLoading";
import { Context } from "../../context/Context";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  static contextType = Context

  modalClose = () => {
    this.setState({ show: false });
  };
  modalSHow = () => {
    this.setState({ show: true });
  };

  render() {
    const {videoInfo} = this.context
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            {videoInfo.loading ? (
              <DataLoading />
            ) : (
              <Col lg={12} md={12} sm={12} className="videoCard">
                <div>
                  <FontAwesomeIcon
                    onClick={this.modalSHow}
                    className="playBtn"
                    icon={faPlayCircle}
                  />
                  <h3 className="videoTitle text-center">
                    {videoInfo?.videoInfo?.title}
                  </h3>
                  <p className="videoDes text-center text-justify">
                    {videoInfo?.videoInfo?.description}
                  </p>
                </div>
              </Col>
            )}
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player
              poster=""
              startTime={0}
              src={videoInfo?.videoInfo?.video_link}
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
