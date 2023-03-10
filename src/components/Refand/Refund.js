import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import DataLoading from "../DataLoading/DataLoading";

class Refund extends Component {
  state = {
    loading: true,
    RefundPolicyInfo: {},
  };
  async componentDidMount() {
    await this.fetchedRefundInfo();
  }
  fetchedRefundInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Refun-policy");
      this.setState({
        RefundPolicyInfo: {
          policy: res.data?.data?.attributes?.policy,
        },
        loading: false,
      });
    } catch (err) {
      console.log("RefundPolicyInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
              <p className="text-justify">
                <h2 className="playBtnIcon">Refund Policy System</h2>
                {this.state.loading ? (
                  <DataLoading />
                ) : (
                  <ReactMarkdown className="serviceDescription text-justify">
                    {this.state.RefundPolicyInfo?.policy}
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
