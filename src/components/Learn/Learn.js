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
import axios from "axios";
import DataLoading from "../DataLoading/DataLoading";
import ReactMarkdown from "react-markdown";

class Learn extends Component {
  state = {
    loading: true,
    coursePlanInfo: {},
  };
  async componentDidMount() {
    await this.fetchedCoursePlanInfo();
  }
  fetchedCoursePlanInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Course-plane"
      );
      this.setState({
        coursePlanInfo: {
          title: res.data?.data?.attributes?.title,
          description: res.data?.data?.attributes?.description,
          list: res.data?.data?.attributes?.list,
          video_link: res.data?.data?.attributes?.video_link,
        },
        loading: false,
      });
    } catch (err) {
      console.log("coursePlanInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    return (
      <Fragment>
        <Container className="text-center mt-3">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={6} md={6} sm={12} className="text-justify p-4">
                  <h3 className="videoTitle">
                    {this.state.coursePlanInfo.title}
                  </h3>
                  <p className="videoDes">{this.state.coursePlanInfo.description}</p>
                  <ReactMarkdown className="videoDes mt-3">
                      {this.state.coursePlanInfo.list}
                  </ReactMarkdown>
                  {/* <ul className="mt-3">
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
                  </ul> */}
                </Col>

                <Col lg={6} md={6} sm={12} className=" p-4">
                  <Player
                    poster="https://pixabay.com/photos/lighthouse-tower-ocean-sea-beach-5622924/"
                    startTime={0}
                    src={this.state.coursePlanInfo.video_link}
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
