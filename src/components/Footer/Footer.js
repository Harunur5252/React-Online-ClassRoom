import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Jumbotron} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faMapMarker,faPhone,faEnvelope,faGreaterThan} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class Footer extends Component {

    render() {

            return (
                <Fragment>
                    <Container fluid={true} className="text-center mt-5 footerBackColor">
                        <Row>
                            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                                <h2 className="footerTitle">Follow Me</h2>
                                <hr/>
                                <a href="https://www.facebook.com" target="_blank" className="paymentDes socialLink"><FontAwesomeIcon className="socialBtn" icon={faFacebook} /> Facebook</a><br/>
                                <a href="https://www.google.com"   target="_blank" className="paymentDes socialLink"><FontAwesomeIcon className="socialBtn" icon={faYoutube} /> Youtube</a>
                            </Col>

                            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                                <h2 className="footerTitle">Address</h2>
                                <hr/>
                                <p className="paymentDes"><FontAwesomeIcon className="socialBtn" icon={faMapMarker} />  Khilkhet, nikuja-2, Dhaka-1207</p>
                                <p className="paymentDes"><FontAwesomeIcon className="socialBtn" icon={faPhone} />  01774688159 (Help-Line)</p>
                                <p className="paymentDes"><FontAwesomeIcon className="socialBtn" icon={faEnvelope} /> hroshid695@gmail.com</p>
                            </Col>

                            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                                <h2 className="footerTitle">Information</h2>
                                <hr/>
                                <Link to="/about" className="paymentDes socialLink">About Harun</Link><br/>
                                <Link to="/contact" className="paymentDes socialLink">Contact Us</Link>
                            </Col>

                            <Col lg={3} md={3} sm={12} className="text-justify p-4 mt-4">
                                <h2 className="footerTitle">Legal</h2>
                                <hr/>
                                <Link to="/refund" className="paymentDes socialLink">Refund Policy</Link><br/>
                                <Link to="/terms" className="paymentDes socialLink">Terms & Conditions</Link><br/>
                                <Link to="/privacy" className="paymentDes socialLink">Privacy Policy</Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center copyrightSection ">
                        <p className="text-white mt-3">All Rights Reserved By Harun &copy; 2020-2021</p>
                    </Container>
                </Fragment>
            );
    }
}

export default Footer;