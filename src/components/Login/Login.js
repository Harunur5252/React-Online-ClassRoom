import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import ReactLogo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import DataLoading from "../DataLoading/DataLoading";

class Login extends Component {
  state = {
    homeLoginInfo: {},
    loading: true,
  };
  async componentDidMount() {
    await this.fetchedHomeLoginInfo();
  }
  fetchedHomeLoginInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Home-page-login-info"
      );
      this.setState({
        homeLoginInfo: {
          id: res?.data?.data?.id,
          title: res?.data?.data?.attributes?.title,
          sub_title: res?.data?.data?.attributes?.sub_title,
          img_link: res?.data?.data?.attributes?.img_link,
        },
        loading : false
      });
    } catch (err) {
      console.log("homePageInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    return (
      <Fragment>
        <Jumbotron>
          <Container className="text-center marginTop">
            <Row>
              {this.state.loading ? (
                <DataLoading />
              ) : (
                <Col lg={6} md={6} sm={12}>
                  <h1 className="loginTitle">
                    {this.state.homeLoginInfo.title}
                  </h1>
                  <span className="loginDes">
                    {this.state.homeLoginInfo.sub_title}
                  </span>
                  <br />
                  <Link to="/userLogin" className="button">
                    <Button className="mt-2 loginBtn" block>
                      Login
                    </Button>
                  </Link>
                </Col>
              )}

              {this.state.loading ? (
                <DataLoading />
              ) : (
                <Col lg={6} md={6} sm={12} className="mt-1">
                  <img
                    src={this.state.homeLoginInfo.img_link}
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
