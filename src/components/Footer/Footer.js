import React, { Component, Fragment } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import DataLoading from '../DataLoading/DataLoading'

class Footer extends Component {
  state = {
    loading: true,
    FooterInfo: {},
  };
  async componentDidMount() {
    await this.fetchedFooterInfo();
  }
  fetchedFooterInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Footer");
      this.setState({
        FooterInfo: {
          address: res.data?.data?.attributes?.address,
          phone: res.data?.data?.attributes?.phone,
          email: res.data?.data?.attributes?.email,
          youtube_link: res.data?.data?.attributes?.youtube_link,
          facebook_link: res.data?.data?.attributes?.facebook_link,
        },
        loading: false,
      });
    } catch (err) {
      console.log("FooterInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center mt-5 footerBackColor">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                  <h2 className="footerTitle">Follow Me</h2>
                  <hr />
                  <a
                    href={this.state.FooterInfo?.facebook_link}
                    target="_blank"
                    rel="noreferrer"
                    className="paymentDes socialLink"
                  >
                    <FontAwesomeIcon className="socialBtn" icon={faFacebook} />{" "}
                    Facebook
                  </a>
                  <br />
                  <a
                    href={this.state.FooterInfo?.youtube_link}
                    target="_blank"
                    rel="noreferrer"
                    className="paymentDes socialLink"
                  >
                    <FontAwesomeIcon className="socialBtn" icon={faYoutube} />{" "}
                    Youtube
                  </a>
                </Col>

                <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                  <h2 className="footerTitle">Address</h2>
                  <hr />
                  <p className="paymentDes">
                    <FontAwesomeIcon className="socialBtn" icon={faMapMarker} />{" "}
                    {this.state.FooterInfo?.address}
                  </p>
                  <p className="paymentDes">
                    <FontAwesomeIcon className="socialBtn" icon={faPhone} />{" "}
                    {this.state.FooterInfo?.phone}
                  </p>
                  <p className="paymentDes">
                    <FontAwesomeIcon className="socialBtn" icon={faEnvelope} />{" "}
                    {this.state.FooterInfo?.email}
                  </p>
                </Col>
              </>
            )}

            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
              <h2 className="footerTitle">Information</h2>
              <hr />
              <Link to="/about" className="paymentDes socialLink">
                About Harun
              </Link>
              <br />
              <Link to="/contact" className="paymentDes socialLink">
                Contact Us
              </Link>
            </Col>

            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
              <h2 className="footerTitle">Legal</h2>
              <hr />
              <Link to="/refund" className="paymentDes socialLink">
                Refund Policy
              </Link>
              <br />
              <Link to="/terms" className="paymentDes socialLink">
                Terms & Conditions
              </Link>
              <br />
              <Link to="/privacy" className="paymentDes socialLink">
                Privacy Policy
              </Link>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center copyrightSection ">
          <p className="text-white mt-3">
            All Rights Reserved By Harun &copy; {new Date().getUTCFullYear()}
          </p>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
