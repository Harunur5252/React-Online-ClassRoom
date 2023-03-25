import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Jumbotron,
  Modal,
  Spinner,
} from "react-bootstrap";
import ReactLogo from "../../assets/images/logo.svg";
import { Link, Redirect,withRouter  } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

class UserLoginPanel extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showTwo: false,
      loaded: false,
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  static contextType = Context;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.state.email) {
      this.setState({
        emailError: "",
      });
    }

    if (this.state.password) {
      this.setState({
        passwordError: "",
      });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.email === "") {
      this.setState({
        emailError: "email is required",
      });
    }

    if (this.state.password === "") {
      this.setState({
        passwordError: "password is required",
      });
    }

    if (this.state.email && this.state.password) {
      try {
        this.setState({
          loaded: true,
        });
        const { userLogin } = this.context;
        const res = await userLogin(this.state.email, this.state.password);
        this.setState({
          loaded: false,
          email: "",
          password: "",
        });
        toast.success("successfully login completed!");
        // this.props.history.push('/')
      } catch (err) {
        toast.error(err.response?.data?.error?.message);
        this.setState({
          loaded: false,
          email: "",
          password: "",
        });
      }
    }
  };

  modalClose = () => {
    this.setState({ show: false });
  };
  modalSHow = () => {
    this.setState({ show: true });
  };

  modalCloseTwo = () => {
    this.setState({ showTwo: false });
  };
  modalSHowTwo = () => {
    this.setState({ showTwo: true });
  };

  render() {
    return (
      <Fragment>
        <Jumbotron className="mt-4">
          <Container className="text-justify">
            <Row>
              <Col lg={6} md={6} sm={12} className="p-4">
                <div className="loginPanelCard">
                  <h4 className="videoTitle">USER LOGIN</h4>
                  <div className="mt-3">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          className="videoDes"
                          placeholder="Email Address"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.emailError}
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
                      {this.state.loaded ? (
                        <Button
                          className="registrationBtn modalLoginTitle"
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
                          className="registrationBtn modalLoginTitle"
                          block
                          size="sm"
                          type="submit"
                        >
                          Login
                        </Button>
                      )}

                      <Form.Group
                        controlId="formBasicCheckbox"
                        className="mt-3"
                      >
                        <Link
                          to="#"
                          onClick={this.modalSHow}
                          className="passwoedReset"
                        >
                          {" "}
                          Password Reset
                        </Link>{" "}
                        ||
                        <Link
                          to="#"
                          onClick={this.modalSHowTwo}
                          className="passwoedReset"
                        >
                          {" "}
                          Quick Recover
                        </Link>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} className="mt-5 text-center">
                <img src={ReactLogo} className="App-logo" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Modal size="md" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  required=""
                  className="videoDes"
                  placeholder="Mobile No"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  required=""
                  className="videoDes"
                  placeholder="Old Password"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  required=""
                  className="videoDes"
                  placeholder="New Password"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="mt-3">
              <Link to="#">
                <Button className="modalloginBtn" onClick="" type="submit">
                  Reset
                </Button>
              </Link>
              <Button className="modalloginBtn" onClick={this.modalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        <Modal size="md" show={this.state.showTwo} onHide={this.modalCloseTwo}>
          <Modal.Header closeButton>
            <Modal.Title>Account Details Recover</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  className="videoDes"
                  placeholder="Mobile No"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="mt-3">
              <Link to="#">
                <Button className="modalloginBtn" onClick="" type="submit">
                  Get Details
                </Button>
              </Link>
              <Button className="modalloginBtn" onClick={this.modalCloseTwo}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(UserLoginPanel);
