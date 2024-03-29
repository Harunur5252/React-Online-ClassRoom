import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import { Context } from "../../context/Context";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      show: false,
    };
  }
  static contextType = Context;
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  modalClose = () => {
    this.setState({ show: false });
  };

  modalSHow = () => {
    this.setState({ show: true });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const { freeClassInfo } = this.context;
    return (
      <Fragment>
        <Container className="text-center carouselMarginUp">
          <h3 className="videoTitle">FREE CLASS</h3>
          <p className="videoDes">Watch free videos on React by Harun</p>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {freeClassInfo?.freeClassInfos?.map((freeClass) => {
              return (
                <>
                  <div className="mt-5">
                    <Row>
                      <Col lg={4} sm={12} md={4} className="p-2 ">
                        <Card
                          style={{ width: "18rem" }}
                          className="carouselCard"
                        >
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
                    </Row>
                  </div>

                  <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={this.modalClose}
                  >
                    <Modal.Body>
                      <Player
                        poster="/assets/poster.png"
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
            })}
          </Slider>
        </Container>

        <div style={{ textAlign: "center" }} className="mt-5">
          <Button
            className="button m-2"
            variant="dark"
            size="md"
            onClick={this.previous}
          >
            <FontAwesomeIcon className="carouselItemBtn" icon={faGreaterThan} />
          </Button>
          <Button
            className="button"
            variant="dark"
            size="md"
            onClick={this.next}
          >
            <FontAwesomeIcon className="carouselItemBtn" icon={faLessThan} />
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Carousel;
