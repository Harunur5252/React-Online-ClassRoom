import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataLoading from "../DataLoading/DataLoading";
import ReactMarkdown from "react-markdown";
import { Context } from "../../context/Context";

class Privacy extends Component {
  static contextType = Context;

  render() {
    const { privacyPolicyInfo } = this.context;
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {privacyPolicyInfo?.loading ? (
              <DataLoading />
            ) : (
              <Col sm={12} md={12} lg={12}>
                <h2 className="playBtnIcon">Privacy Policy System</h2>
                <ReactMarkdown className="serviceDescription text-justify">
                  {privacyPolicyInfo?.PrivacyPolicyInfo?.description}
                </ReactMarkdown>
              </Col>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;
