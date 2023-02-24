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

class Learn extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-3">
          <Row>
            <Col lg={6} md={6} sm={12} className="text-justify p-4">
              <h3 className="videoTitle">What You Going To Learn</h3>
              <a className="videoDes">
                The overall skills gained from tthis project based courses will
                prepare you for any type of project development. In this course
                you will be taught how to write a complete project with React JS
                including User Panel + Admin Panel. Source code will also be
                provided with each class of the course, so you can easily
                practice manually. This project uses React JS with PHP for the
                server site and MySQL for the database
              </a>
              <ul className="mt-3">
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
                <li className="videoDes">
                  Creating Api with PHP and using React js
                </li>
              </ul>
            </Col>

            <Col lg={6} md={6} sm={12} className=" p-4">
              <Player
                poster="https://pixabay.com/photos/lighthouse-tower-ocean-sea-beach-5622924/"
                startTime={0}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />

                <ControlBar autoHide={false}>
                  <ReplayControl seconds={5} order={2.1} />
                  <ForwardControl seconds={5} order={3.1} />
                </ControlBar>
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Learn;
