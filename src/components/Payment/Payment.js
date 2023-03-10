import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataLoading from "../DataLoading/DataLoading";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      loading: true,
      paymentInfo: {},
    };
  }

  async componentDidMount() {
    await this.fetchedPaymentInfo();
  }
  fetchedPaymentInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Payment-other?populate=*"
      );
      this.setState({
        paymentInfo: {
          payment_img_link: res.data?.data?.attributes?.payment_img_link,
          payment_cove_img_link:
            res.data?.data?.attributes?.payment_cove_img_link,
          descriptions: res.data?.data?.attributes?.descriptions,
          paymentOthersData: res.data?.data?.attributes?.paymentOthersData,
        },
        loading: false,
      });
    } catch (err) {
      console.log("paymentInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    const bakashLogo = {
      height: "110px",
      width: "110px",
    };
    const paymentBannerPic = {
      height: "300px",
    };
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {this.state.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={6} sm={12} md={6}>
                  <img
                    style={bakashLogo}
                    alt="paymentImg"
                    src={this.state?.paymentInfo?.payment_img_link}
                  />
                  {this.state?.paymentInfo?.descriptions?.map((des) => {
                    return (
                      <p className="text-justify paymentDes" key={des?.id}>
                        {des?.description}
                      </p>
                    );
                  })}

                  <Row className="paymentMargin text-center">
                    {this.state?.paymentInfo?.paymentOthersData?.map(
                      (paymentOtherDatum) => {
                        return (
                          <Col lg={4} sm={12} md={6}>
                            <div
                              className="paymentCard text-center"
                              key={paymentOtherDatum?.id}
                            >
                              <h4 className="paymentCount">
                                {paymentOtherDatum?.count}
                              </h4>
                              <p className="paymentDes">
                                {paymentOtherDatum?.text}
                              </p>
                            </div>
                          </Col>
                        );
                      }
                    )}
                  </Row>
                </Col>

                <Col lg={6} sm={12} md={6}>
                  <img
                    style={paymentBannerPic}
                    src={this.state?.paymentInfo?.payment_cove_img_link}
                    alt="paymentCoverImg"
                  />
                  <Link to="/registrationPage">
                    <Button className="loginBtn mt-2" size="sm" type="submit">
                      Join Now
                    </Button>
                  </Link>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Payment;
