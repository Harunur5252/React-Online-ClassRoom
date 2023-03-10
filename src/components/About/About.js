import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataLoading from "../DataLoading/DataLoading";

export default class About extends Component {
  state = {
    loading: true,
    loadingAbout:true,
    FooterInfo: {},
    AboutInfo: {},
  };
  async componentDidMount() {
    await this.fetchedFooterInfo();
    await this.fetchedAboutInfo();
  }
  fetchedFooterInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Footer?populate=*"
      );
      this.setState({
        FooterInfo: {
          address: res.data?.data?.attributes?.address,
          phone: res.data?.data?.attributes?.phone,
          email: res.data?.data?.attributes?.email,
          youtube_link: res.data?.data?.attributes?.youtube_link,
          facebook_link: res.data?.data?.attributes?.facebook_link,
          name: res.data?.data?.attributes?.name,
          profession: res.data?.data?.attributes?.profession,
          img_link: res.data?.data?.attributes?.img_link?.data?.attributes?.url,
        },
        loading: false,
      });
    } catch (err) {
      console.log("FooterInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedAboutInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/About");
      this.setState({
        AboutInfo: {
          mission: res.data?.data?.attributes?.mission,
          vision: res.data?.data?.attributes?.vision,
          about_my: res.data?.data?.attributes?.about_my,
        },
        loadingAbout: false,
      });
    } catch (err) {
      console.log("AboutInfo error", err.response?.data?.error?.message);
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
              <>
                <Col lg={5} md={6} sm={12}>
                  <img
                    src={this.state.FooterInfo?.img_link}
                    style={{ height: "200px", width: "200px" }}
                    alt="courseInstructor"
                  />
                </Col>
                <Col lg={5} md={6} sm={12} className="py-5">
                  <div>
                    <p className="about">
                      <b>Name : </b> {this.state.FooterInfo?.name}
                    </p>
                    <p className="about">
                      <b>Occupation : </b> {this.state.FooterInfo?.profession}
                    </p>
                    <p className="about">
                      <b>Contact Number : </b> {this.state.FooterInfo?.phone}
                    </p>
                    <p className="about">
                      <b>Email : </b> {this.state.FooterInfo?.email}
                    </p>
                    <p className="about">
                      <b>Address : </b> {this.state.FooterInfo?.address}
                    </p>
                  </div>
                </Col>
              </>
            )}
          </Row>
          <Row>
            {this.state.loadingAbout ? (
              <DataLoading />
            ) : (
              <>
                <Col sm={12} md={12} lg={12} className="mt-3">
                  <p className="text-justify">
                    <h1 className="serviceName">Who i AM</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {this.state.AboutInfo?.about_my}
                    </p>

                    <h1 className="serviceName">My Mission</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {this.state.AboutInfo?.mission}
                    </p>

                    <h1 className="serviceName">My Vision</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {this.state.AboutInfo?.vision}
                    </p>
                  </p>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
