import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataLoading from "../DataLoading/DataLoading";

class FindMoreSection extends Component {
  state = {
    loading: true,
    otherTechnologyInfos: [],
  };
  async componentDidMount() {
    await this.fetchedOtherTechnologyInfo();
  }
  fetchedOtherTechnologyInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Other-technology?populate=*"
      );
      this.setState({
        otherTechnologyInfos: res.data?.data?.attributes?.technologies,
        loading: false,
      });
    } catch (err) {
      console.log(
        "otherTechnologyInfos error",
        err.response?.data?.error?.message
      );
    }
  };

  render() {
    const findMoreImgeSize = {
      textDecoration: "none",
      height: "60px",
      width: "60px",
    };

    return (
      <Fragment>
        <Container className="text-center mt-5">
          <h4 className="videoTitle">Find More</h4>
          <p className="videoDes">Get Other Tutorial Series By Harun</p>
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              this.state.otherTechnologyInfos?.map((otherTechnology) => {
                return (
                  <Col lg={3} sm={12} md={3} key={otherTechnology?.id}>
                    <a
                      href={otherTechnology?.official_link}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <div className="findMoreTutorialCard text-center">
                        <img
                          src={otherTechnology?.img_link}
                          style={findMoreImgeSize}
                          alt="technologyImg"
                        />
                        <h2 className="findMoreTutorialTitle m-1">
                          {otherTechnology?.name}
                        </h2>
                      </div>
                    </a>
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

export default FindMoreSection;
