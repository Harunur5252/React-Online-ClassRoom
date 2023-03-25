import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import DataLoading from "../DataLoading/DataLoading";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  static contextType = Context;

  render() {
    const { user,paymentInfo } = this.context;
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
            {paymentInfo.loading ? (
              <DataLoading />
            ) : (
              <>
                <Col lg={6} sm={12} md={6}>
                  <img
                    style={bakashLogo}
                    alt="paymentImg"
                    src={paymentInfo?.paymentInfo?.payment_img_link}
                  />
                  {paymentInfo?.paymentInfo?.descriptions?.map((des) => {
                    return (
                      <p className="text-justify paymentDes" key={des?.id}>
                        {des?.description}
                      </p>
                    );
                  })}

                  <Row className="paymentMargin text-center">
                    {paymentInfo?.paymentInfo?.paymentOthersData?.map(
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
                    src={paymentInfo?.paymentInfo?.payment_cove_img_link}
                    alt="paymentCoverImg"
                  />
                  {!user ? (
                    <Link to="/registrationPage">
                      <Button className="loginBtn mt-2" size="sm" type="submit">
                        Join Now
                      </Button>
                    </Link>
                  ) : null}
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
