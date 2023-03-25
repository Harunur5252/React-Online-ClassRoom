import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import DataLoading from "../DataLoading/DataLoading";
import ReactMarkdown from "react-markdown";
import { Context } from "../../context/Context";

class Learn extends Component {
  static contextType = Context;

  render() {
    const { coursePlanInfo } = this.context;
    return (
      <Fragment>
        <Container className="text-center mt-3">
          <Row>
            {coursePlanInfo?.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={6} md={6} sm={12} className="text-justify p-4">
                  <h3 className="videoTitle">
                    {coursePlanInfo?.coursePlanInfo.title}
                  </h3>
                  <p className="videoDes">
                    {coursePlanInfo?.coursePlanInfo.description}
                  </p>
                  <ReactMarkdown className="videoDes mt-3">
                    {coursePlanInfo?.coursePlanInfo.list}
                  </ReactMarkdown>
                </Col>

                <Col lg={6} md={6} sm={12} className=" p-4">
                  <Player
                    poster="https://pixabay.com/photos/lighthouse-tower-ocean-sea-beach-5622924/"
                    startTime={0}
                    src={coursePlanInfo?.coursePlanInfo.video_link}
                  >
                    <BigPlayButton position="center" />

                    <ControlBar autoHide={false}>
                      <ReplayControl seconds={5} order={2.1} />
                      <ForwardControl seconds={5} order={3.1} />
                    </ControlBar>
                  </Player>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Learn;
