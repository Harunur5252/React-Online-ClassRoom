import React, { Component, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import HarunImage from "../../assets/images/image.jpg";

class ClassVideo extends Component {
  constructor(props) {
    super(props);
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
    const carouselImgSize = {
      height: "300px",
      width: "300px",
    };

    return (
      <Fragment>
        <Container className="text-center mt-4">
          <Row>
            <Col lg={3} sm={12} md={3} className="p-2">
              <Card className="carouselCard">
                <Card.Img
                  variant="top"
                  src="https://react.rabbil.com/images/class1.svg"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <FontAwesomeIcon
                      onClick={this.modalSHow}
                      className="carouselBtn"
                      icon={faPlayCircle}
                    />
                  </Card.Title>
                  <Card.Text>
                    <p className="videoDes">Introduction</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} sm={12} md={3} className="p-2">
              <Card className="carouselCard">
                <Card.Img
                  variant="top"
                  src="https://react.rabbil.com/images/class1.svg"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <FontAwesomeIcon
                      onClick={this.modalSHow}
                      className="carouselBtn"
                      icon={faPlayCircle}
                    />
                  </Card.Title>
                  <Card.Text>
                    <p className="videoDes">Introduction</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} sm={12} md={3} className="p-2">
              <Card className="carouselCard">
                <Card.Img
                  variant="top"
                  src="https://react.rabbil.com/images/class1.svg"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <FontAwesomeIcon
                      onClick={this.modalSHow}
                      className="carouselBtn"
                      icon={faPlayCircle}
                    />
                  </Card.Title>
                  <Card.Text>
                    <p className="videoDes">Introduction</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} sm={12} md={3} className="p-2">
              <Card className="carouselCard">
                <Card.Img
                  variant="top"
                  src="https://react.rabbil.com/images/class1.svg"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <FontAwesomeIcon
                      onClick={this.modalSHow}
                      className="carouselBtn"
                      icon={faPlayCircle}
                    />
                  </Card.Title>
                  <Card.Text>
                    <p className="videoDes">Introduction</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player
              poster={HarunImage}
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

export default ClassVideo;
