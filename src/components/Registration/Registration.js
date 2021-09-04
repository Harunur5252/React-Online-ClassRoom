import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Registration extends Component {
 
    render() {
     
            const bakshLogoSize={
                height:"110px",
                width:"110px",
            }
            return (
                <Fragment>
                    <Container className="mt-5 text-justify">

                        <Row>

                            <Col lg={6} md={6} sm={12} className="p-4">
                                <h4 className="videoTitle">COURSE REGISTRATION</h4>
                                <div className="mt-3">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" className="videoDes" placeholder="Your Name" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" className="videoDes" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="number" className="videoDes" placeholder="Mobile No" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" className="videoDes" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="number" className="videoDes" placeholder="Bkash Mobile No" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="number" className="videoDes" placeholder="Bkash TrxID" />
                                        </Form.Group>

                                        <Link to="#" className="button"><Button  className="registrationBtn" block size="sm" type="submit">
                                            Submit
                                        </Button></Link>
                                    </Form>
                                </div>

                            </Col>

                            <Col lg={6} md={6} sm={12} className="p-4">
                                <img src="https://react.rabbil.com/images/BKASH-LOGO.png" style={bakshLogoSize}/>
                                <p className="videoDes text-justify">Send your course fee 01876397492 (Bkash Personal). After sending fee use Bkash Trxid and sender mobile number for registration</p>
                                <p className="videoDes text-justify">This is not buy and try product, after account activation course fee is not refundable.</p>
                                <p className="videoDes text-justify">For further help contact with course manager SUMAIYA KHANOM , helpline mobile number 01774688159</p>                      
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
}

export default Registration;