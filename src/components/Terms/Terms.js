import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../../context/Context";
import DataLoading from "../DataLoading/DataLoading";
class Terms extends Component {
  static contextType = Context;

  render() {
    const { termsInfo } = this.context;
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {termsInfo?.loading ? (
              <DataLoading />
            ) : (
              <Col sm={12} md={12} lg={12}>
                <h2 className="playBtnIcon">Terms & Conditions System</h2>
                <p className="serviceDescription text-justify">
                  {termsInfo?.TermInfo.description}
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Terms;
