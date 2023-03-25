import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

class Registration extends Component {
  state = {
    loaded: false,
    username: "",
    email: "",
    phone: "",
    password: "",
    payment_mobile_number: "",
    trxid: "",
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    payment_mobile_numberError: "",
    trxidError: "",
  };
  static contextType = Context;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (this.state.username) {
      this.setState({
        usernameError: "",
      });
    }
    if (this.state.email) {
      this.setState({
        emailError: "",
      });
    }
    if (this.state.phone) {
      this.setState({
        phoneError: "",
      });
    }
    if (this.state.password) {
      this.setState({
        passwordError: "",
      });
    }
    if (this.state.payment_mobile_number) {
      this.setState({
        payment_mobile_numberError: "",
      });
    }
    if (this.state.trxid) {
      this.setState({
        trxidError: "",
      });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      this.setState({
        usernameError: "username is required",
      });
    }
    if (this.state.email === "") {
      this.setState({
        emailError: "valid email is required",
      });
    }
    if (this.state.phone === "") {
      this.setState({
        phoneError: "mobile number is required",
      });
    }
    if (this.state.password === "") {
      this.setState({
        passwordError: "password is required",
      });
    }
    if (this.state.payment_mobile_number === "") {
      this.setState({
        payment_mobile_numberError: "payment mobile number is required",
      });
    }
    if (this.state.trxid === "") {
      this.setState({
        trxidError: "payment trxid id is required",
      });
    }
    if (
      this.state.username &&
      this.state.email &&
      this.state.phone &&
      this.state.password &&
      this.state.payment_mobile_number &&
      this.state.trxid
    ) {
      const { userRegistration } = this.context;

      try {
        this.setState({
          loaded: true,
        });
        await userRegistration(
          this.state.username,
          this.state.email,
          this.state.phone,
          this.state.password,
          this.state.payment_mobile_number,
          this.state.trxid
        );
        this.setState({
          loaded: false,
          username: "",
          email: "",
          phone: "",
          password: "",
          payment_mobile_number: "",
          trxid: "",
        });
        toast.success("successfully registration completed!");
        // this.props.history.push('/')
      } catch (err) {
        toast.error(err.response?.data?.error?.message);
        this.setState({
          loaded: false,
          username: "",
          email: "",
          phone: "",
          password: "",
          payment_mobile_number: "",
          trxid: "",
        });
      }
    }
  };

  render() {
    const bakshLogoSize = {
      height: "110px",
      width: "110px",
    };
    return (
      <Fragment>
        <Container className="mt-5 text-justify">
          <Row>
            <Col lg={6} md={6} sm={12} className="p-4">
              <h4 className="videoTitle">COURSE REGISTRATION</h4>
              <div className="mt-3">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      className="videoDes"
                      placeholder="Your Name"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.usernameError}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="videoDes"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.emailError}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="number"
                      className="videoDes"
                      placeholder="Mobile No"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.phoneError}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      className="videoDes"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.passwordError}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="number"
                      className="videoDes"
                      placeholder="Bkash Mobile No"
                      name="payment_mobile_number"
                      value={this.state.payment_mobile_number}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.payment_mobile_numberError}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      className="videoDes"
                      placeholder="Bkash TrxID"
                      name="trxid"
                      value={this.state.trxid}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.trxidError}
                    </span>
                  </Form.Group>
                  {this.state.loaded ? (
                    <Button
                      className="registrationBtn"
                      disabled
                      block
                      size="sm"
                    >
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        variant="warning"
                      />
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        variant="warning"
                      />
                      Loading...
                    </Button>
                  ) : (
                    <Button
                      className="registrationBtn"
                      block
                      size="sm"
                      type="submit"
                    >
                      Submit
                    </Button>
                  )}
                </Form>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className="p-4">
              <img
                src="https://react.rabbil.com/images/BKASH-LOGO.png"
                style={bakshLogoSize}
              />
              <p className="videoDes text-justify">
                Send your course fee 01876397492 (Bkash Personal). After sending
                fee use Bkash Trxid and sender mobile number for registration
              </p>
              <p className="videoDes text-justify">
                This is not buy and try product, after account activation course
                fee is not refundable.
              </p>
              <p className="videoDes text-justify">
                For further help contact with course manager SUMAIYA KHANOM ,
                helpline mobile number 01774688159
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Registration);
