import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../context/Context";
import DataLoading from "../DataLoading/DataLoading";

export default class About extends Component {
  static contextType = Context
  render() {
    const {aboutInfo,footerInfo} = this.context
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {footerInfo?.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={5} md={6} sm={12}>
                  <img
                    src={footerInfo?.FooterInfo?.img_link}
                    style={{ height: "200px", width: "200px" }}
                    alt="courseInstructor"
                  />
                </Col>
                <Col lg={5} md={6} sm={12} className="py-1">
                  <div>
                    <p className="about">
                      <b>Name : </b> {footerInfo?.FooterInfo?.name}
                    </p>
                    <p className="about">
                      <b>Occupation : </b> {footerInfo?.FooterInfo?.profession}
                    </p>
                    <p className="about">
                      <b>Contact Number : </b> {footerInfo?.FooterInfo?.phone}
                    </p>
                    <p className="about">
                      <b>Email : </b> {footerInfo?.FooterInfo?.email}
                    </p>
                    <p className="about">
                      <b>Address : </b> {footerInfo?.FooterInfo?.address}
                    </p>
                  </div>
                </Col>
              </>
            )}
          </Row>
          <Row>
            {aboutInfo?.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col sm={12} md={12} lg={12} className="mt-3">
                  <p className="text-justify">
                    <h1 className="serviceName">Who i AM</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {aboutInfo?.AboutInfo?.about_my}
                    </p>

                    <h1 className="serviceName">My Mission</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {aboutInfo?.AboutInfo?.mission}
                    </p>

                    <h1 className="serviceName">My Vision</h1>
                    <hr />
                    <p className="serviceDescription text-justify">
                      {aboutInfo?.AboutInfo?.vision}
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
