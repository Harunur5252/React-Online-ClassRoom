import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../context/Context";
import DataLoading from "../DataLoading/DataLoading";

class LearningPoint extends Component {
  static contextType = Context
  render() {
    const imageStyle = {
      width: "50px",
      height: "50px",
    };
    const {learningPointInfo} = this.context
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            {learningPointInfo.loading ? (
              <DataLoading />
            ) : (
              learningPointInfo?.LearningPointInfos?.map((learningInfo) => {
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
