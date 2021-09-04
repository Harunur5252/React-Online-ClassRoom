import React, { Component, Fragment } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import ReactImage from '../../assets/images/react-hexagon.png'
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import {NavLink} from "react-router-dom"
class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            pageTitle:props.title
        }
    }
    
    render() {
        
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                
                <Navbar  bg="light" variant="light" expand="lg" sticky="top">
                    <NavLink to="/"><Navbar.Brand  className="navBarTitle"><img src={ReactImage} className="imageStyle"/> Harun</Navbar.Brand></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink  exact activeStyle={{color:'#00a8ee'}} to="/" className="navBarPageTitle">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink  exact activeStyle={{color:'#00a8ee'}} to="/coursePlane" className="navBarPageTitle">Course Plan</NavLink></Nav.Link>
                            <Nav.Link><NavLink  exact activeStyle={{color:'#00a8ee'}} to="/classPage" className="navBarPageTitle">Free Class</NavLink></Nav.Link>
                            <Nav.Link><NavLink  exact activeStyle={{color:'#00a8ee'}} to="/registrationPage" className="navBarPageTitle">Registration</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
               </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;