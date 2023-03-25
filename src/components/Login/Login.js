import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import DataLoading from "../DataLoading/DataLoading";
import { Context } from "../../context/Context";

class Login extends Component {

  static contextType = Context;

  render() {
    const { loginInfo,user } = this.context;
    return (
      <Fragment>
        <Jumbotron>
          <Container className="text-center marginTop">
            <Row>
              {loginInfo.loading ? (
                <DataLoading />
              ) : (
                <Col lg={6} md={6} sm={12}>
                  <h1 className="loginTitle">
                    {loginInfo.homeLoginInfo.title}
                  </h1>
                  <span className="loginDes">
                    {loginInfo.homeLoginInfo.sub_title}
                  </span>
                  <br />
                  {user ? null : (
                    <Link to="/userLogin" className="button">
                      <Button className="mt-2 loginBtn" block>
                        Login
                      </Button>
                    </Link>
                  )}
                </Col>
              )}

              {loginInfo.loading ? (
                <DataLoading />
              ) : (
                <Col lg={6} md={6} sm={12} className="mt-2">
                  <img
                    src={loginInfo.homeLoginInfo.img_link}
                    className="App-logo"
                    alt="reactLogo"
                  />
                </Col>
              )}
            </Row>
          </Container>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Login;
