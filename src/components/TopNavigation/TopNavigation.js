import React, { Component, Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      pageTitle: props.title,
    };
  }

  static contextType = Context;

  render() {
    const { handleLogout, user, token } = this.context;
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>

        <Navbar bg="light" variant="light" expand="lg" sticky="top">
          <Navbar.Brand className="navBarTitle">
            <NavLink to="/">
              <img
                src="https://t3.ftcdn.net/jpg/00/95/63/46/500_F_95634697_FNZyHu3bNM50diamQDPhiaPdjk05vgD1.jpg"
                height={60}
                width={70}
                alt="courseImg"
              />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/"
                  className="navBarPageTitle"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/coursePlane"
                  className="navBarPageTitle"
                >
                  CoursePlan
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/classPage"
                  className="navBarPageTitle"
                >
                  FreeClass
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/about"
                  className="navBarPageTitle"
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#00a8ee" }}
                  to="/contact"
                  className="navBarPageTitle"
                >
                  Contact
                </NavLink>
              </Nav.Link>
              {!user && !token ? (
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#00a8ee" }}
                    to="/registrationPage"
                    className="navBarPageTitle"
                  >
                    Registration
                  </NavLink>
                </Nav.Link>
              ):null}

              {user && token ? (
                <Nav.Link>
                  <Button variant="primary" onClick={handleLogout}>
                    Logout
                  </Button>
                </Nav.Link>
              ):null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
