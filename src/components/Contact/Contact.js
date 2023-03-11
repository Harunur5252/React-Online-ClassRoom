import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import contactImg from "../../assets/images/R.jpg";
import axios from "axios";
import { toast } from "react-toastify";

export default class Contact extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
    loaded: false,
    fullNameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (this.state.fullName) {
      this.setState({
        fullNameError: "",
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
    if (this.state.message) {
      this.setState({
        messageError: "",
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.fullName === "") {
      this.setState({
        fullNameError: "fullName is required",
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
    if (this.state.message === "") {
      this.setState({
        messageError: "message is required",
      });
    }
    if (
      this.state.fullName &&
      this.state.email &&
      this.state.phone &&
      this.state.message
    ) {
      try {
        this.setState({
          loaded: true,
        });
        const res = await axios.post("http://localhost:1337/api/contacts", {
          data: {
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
          },
        });
        this.setState({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          loaded: false,
        });
        toast.success("submitted successfully!");
      } catch (err) {
        this.setState({
          loaded: false,
        });
        toast.error(err.response?.data?.error?.message);
      }
    }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceMainTitle">Quick Connect Us</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label className="serviceDescription">Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.fullNameError}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <span style={{ color: "red" }}>{this.state.emailError}</span>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    id="number"
                    placeholder="Enter number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.phoneError}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="msg"
                    rows={3}
                    placeholder="Write Your Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.messageError}
                  </span>
                </Form.Group>
                {this.state.loaded ? (
                  <Button className="btn btn-primary btn-md btn-block" disabled>
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
                    className="btn btn-primary btn-md btn-block"
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12} className="mt-5 p-3">
              <img
                src={contactImg}
                style={{ height: "200px", width: "500px", marginLeft: "20px" }}
              />
              <Row>
                <Col lg={6} md={6} sm={12} className="m-2 px-4">
                  <h3 className="discussTitle">Discuss Now</h3>
                  <p className="videoDes">
                    #79/6 Bhimgonj Aria, 3rd Floor Front Side, Sherpur
                  </p>
                  <p className="videoDes">
                    <FontAwesomeIcon icon={faEnvelope} /> hroshid695@gmail.com
                  </p>
                  <p className="videoDes">
                    <FontAwesomeIcon icon={faPhone} /> 01307216770
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
