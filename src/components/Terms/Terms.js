import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataLoading from "../DataLoading/DataLoading";
class Terms extends Component {
  state = {
    loading: true,
    TermInfo: {},
  };
  async componentDidMount() {
    await this.fetchedTermInfo();
  }
  fetchedTermInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Terms-and-condition"
      );
      this.setState({
        TermInfo: {
          description: res.data?.data?.attributes?.description,
        },
        loading: false,
      });
    } catch (err) {
      console.log("TermInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              <Col sm={12} md={12} lg={12}>
                <h2 className="playBtnIcon">Terms & Conditions System</h2>
                <p className="serviceDescription text-justify">
                  {this.state.TermInfo.description}
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
