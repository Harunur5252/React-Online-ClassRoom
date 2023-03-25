import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Context } from "../../context/Context";
import DataLoading from "../DataLoading/DataLoading";

class Refund extends Component {
  static contextType = Context;

  render() {
    const { refundPolicyInfo } = this.context;
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
              <p className="text-justify">
                <h2 className="playBtnIcon">Refund Policy System</h2>
                {refundPolicyInfo?.loading ? (
                  <DataLoading />
                ) : (
                  <ReactMarkdown className="serviceDescription text-justify">
                    {refundPolicyInfo?.RefundPolicyInfo?.policy}
                  </ReactMarkdown>
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;
