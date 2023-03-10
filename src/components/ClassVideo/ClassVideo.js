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
import axios from "axios";
import DataLoading from "../DataLoading/DataLoading";

class ClassVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      freeClassInfos: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.fetchedFreeClassInfo();
  }
  fetchedFreeClassInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Free-class?populate=*"
      );
      this.setState({
        freeClassInfos: res.data?.data?.attributes?.freeClasses,
        loading: false,
      });
    } catch (err) {
      console.log("freeClassInfos error", err.response?.data?.error?.message);
    }
  };

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
    // console.log(this.state.freeClassInfos)
    return (
      <Fragment>
        <Container className="text-center mt-4">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              this.state?.freeClassInfos?.map((freeClass) => {
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
                  </>
                );
              })
            )}
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player poster={HarunImage} startTime={0} src="">
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
