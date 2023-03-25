import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import HarunImage from "../../assets/images/image.jpg";
import DataLoading from "../DataLoading/DataLoading";
import { Context } from "../../context/Context";

class ClassVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  static contextType = Context;

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
    const { freeClassInfo } = this.context;
    return (
      <Fragment>
        <Container className="text-center mt-4">
          <Row>
            {freeClassInfo?.loading ? (
              <DataLoading />
            ) : (
              freeClassInfo?.freeClassInfos?.map((freeClass) => {
                return (
                  <>
                    <Col
                      lg={3}
                      sm={12}
                      md={3}
                      className="p-2"
                      key={freeClass?.id}
                    >
                      <Card className="carouselCard">
                        <Card.Img variant="top" src={freeClass?.img_link} />
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
                            <p className="videoDes">{freeClass?.title}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    
                    <Modal
                      size="lg"
                      show={this.state.show}
                      onHide={this.modalClose}
                    >
                      <Modal.Body>
                        <Player
                          poster={HarunImage}
                          startTime={0}
                          src={freeClass?.video_link}
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
                  </>
                );
              })
            )}
          </Row>
        </Container>

        {/* <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player poster={HarunImage} startTime={0} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
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
        </Modal> */}
      </Fragment>
    );
  }
}

export default ClassVideo;
