import React, { Component, Fragment } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import Menu from "../components/Menu/Menu";
import { Context } from "../context/Context";

export default class ProfilePage extends Component {
  static contextType = Context;
  authUserToken = null;
  userLogout = null;
  constructor() {
    super();
    this.state = {
      show: false,
      loaded: false,
      immediateInvoke: false,
      currentPassword: "",
      password: "",
      passwordConfirmation: "",
      currentPasswordError: "",
      passwordError: "",
      passwordConfirmationError: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (this.state.currentPassword) {
      this.setState({
        currentPasswordError: "",
      });
    }
    if (this.state.password) {
      this.setState({
        passwordError: "",
      });
    }
    if (this.state.passwordConfirmation) {
      this.setState({
        passwordConfirmationError: "",
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.currentPassword === "") {
      this.setState({
        currentPasswordError: "current  password filed is required",
      });
    }
    if (this.state.password === "") {
      this.setState({
        passwordError: "new password filed is required",
      });
    }
    if (this.state.passwordConfirmation === "") {
      this.setState({
        passwordConfirmationError: "confirm password filed is required",
      });
    }
    if (this.state.password !== this.state.passwordConfirmation && this.state.passwordConfirmation) {
      this.setState({
        passwordConfirmationError: "password does't matched with new password",
      });
    }

    if (
      this.state.currentPassword &&
      this.state.password &&
      this.state.passwordConfirmation &&
      this.state.password === this.state.passwordConfirmation
    ) {
      try {
        this.setState({
          loaded: true,
        });
        await axios.post(
          "http://localhost:1337/api/auth/change-password",
          {
            currentPassword: this.state.currentPassword,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation,
          },
          {
            headers: {
              Authorization: `Bearer ${this.authUserToken}`,
            },
          }
        );
        toast.success("password changed successfully");
        this.setState({
          loaded: false,
          immediateInvoke: true,
          currentPassword: "",
          password: "",
          passwordConfirmation: "",
        });
        this.userLogout();
      } catch (err) {
        toast.error(err.response?.data?.error?.message);
        this.setState({
          loaded: false,
          currentPassword: "",
          password: "",
          passwordConfirmation: "",
        });
      }
    }
  };

  resetInputFiled = () => {
    this.setState({
      currentPassword: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  modalClose = () => {
    this.setState({ show: false });
  };
  modalSHow = () => {
    this.setState({ show: true });
  };

  render() {
    const { user, token, handleLogout } = this?.context;
    this.authUserToken = token;
    this.userLogout = handleLogout;
    return (
      <Fragment>
        <title>Profile</title>
        <Menu>
          <Container className="mt-5">
            <Row>
              <Col lg={10} sm={12} md={10}>
                <Card style={{ width: "19rem" }}>
                  <Card.Body>
                    <table className="table" width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <b>Name</b>
                          </td>
                          <td>{user?.username}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Email</b>
                          </td>
                          <td>{user?.email}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Phone</b>
                          </td>
                          <td>{user?.phone}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Status</b>
                          </td>
                          {user && token ? (
                            <td>
                              <span class="badge badge-success">Active</span>
                            </td>
                          ) : (
                            <td>
                              <span class="badge badge-danger">Inactive</span>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <Button
                      type="submit"
                      onClick={this.modalSHow}
                      className="modalloginBtn"
                    >
                      Change Password
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Menu>
        <Modal size="md" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  className="videoDes"
                  name="currentPassword"
                  onChange={this.handleChange}
                  value={this.state.currentPassword}
                  placeholder="current password"
                />
                <span style={{ color: "red" }}>
                  {this.state.currentPasswordError}
                </span>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  className="videoDes"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="new password"
                />
                <span style={{ color: "red" }}>{this.state.passwordError}</span>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  className="videoDes"
                  name="passwordConfirmation"
                  onChange={this.handleChange}
                  value={this.state.passwordConfirmation}
                  placeholder="password confirmation"
                />
                <span style={{ color: "red" }}>
                  {this.state.passwordConfirmationError}
                </span>
              </Form.Group>
              {this.state.loaded ? (
                <Button className="btn btn-primary" disabled>
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
                <Button className="modalloginBtn" type="submit">
                  Change Password
                </Button>
              )}
            </Modal.Body>
            <Modal.Footer className="mt-3">
              <Button className="modalloginBtn" onClick={this.resetInputFiled}>
                Reset
              </Button>
              <Button className="modalloginBtn" onClick={this.modalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}
