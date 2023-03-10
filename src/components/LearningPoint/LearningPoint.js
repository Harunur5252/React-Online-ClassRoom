import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataLoading from "../DataLoading/DataLoading";

class LearningPoint extends Component {
  state = {
    LearningPointInfos: [],
    loading: true,
  };
  async componentDidMount() {
    await this.fetchedLearningPointInfo();
  }
  fetchedLearningPointInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Learning-point?populate=*"
      );
      this.setState({
        LearningPointInfos: res.data?.data?.attributes?.learningTopics,
        loading: false,
      });
    } catch (err) {
      console.log(
        "LearningPointInfo error",
        err.response?.data?.error?.message
      );
    }
  };

  render() {
    const imageStyle = {
      width: "50px",
      height: "50px",
    };

    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              this.state?.LearningPointInfos?.map((learningInfo) => {
                return (
                  <Col lg={3} md={6} sm={12} key={learningInfo?.id}>
                    <div className="learningPontCard text-center">
                      <img
                        src={learningInfo?.img_link}
                        alt="learningInfoImg"
                        style={imageStyle}
                      />
                      <h4 className="learningPontTitle">
                        {learningInfo?.title}
                      </h4>
                      <p className="learningPontDes">
                        {learningInfo?.description}
                      </p>
                    </div>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LearningPoint;
