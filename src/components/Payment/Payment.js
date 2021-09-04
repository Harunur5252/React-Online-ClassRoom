import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Payment extends Component {

    constructor(){
        super();
        this.state={
            show:false,
        }
    }

    render() {
      
            const bakashLogo = {
                height:"110px",
                width:"110px"
            }
            const paymentBannerPic={
                height:"300px",
            }
            return (
                <Fragment>
                    <Container  className="mt-5">
                        <Row>
                            <Col lg={6} sm={12} md={6}>
                                <img style={bakashLogo} alt="nothing found" src="https://react.rabbil.com/images/BKASH-LOGO.png"/>
                                <p className="text-justify paymentDes">Send your course fee 01876397492 (Bkash Personal). After sending fee use Bkash Trxid and sender mobile number for registration</p>
                                <p className="text-justify paymentDes">This is not buy and try product, after account activation course fee is not refundable.</p>
                                <p className="text-justify paymentDes">For further help contact with course manager SUMAIYA KHANOM , helpline mobile number 01774688159</p>
                               
                                <Row className="paymentMargin text-center">

                                    <Col lg={4} sm={12} md={6} >
                                        <div className="paymentCard text-center">
                                            <h4 className="paymentCount">200</h4>
                                            <p  className="paymentDes">Class Uploaded</p>
                                        </div>
                                    </Col>

                                    <Col lg={4} sm={12} md={6}>
                                        <div className="paymentCard text-center">
                                            <h4 className="paymentCount">1000</h4>
                                            <p  className="paymentDes">Total Student</p>
                                        </div>
                                    </Col>

                                    <Col lg={4} sm={12} md={6}>
                                        <div className="paymentCard text-center">
                                            <h4 className="paymentCount">3000</h4>
                                            <p  className="paymentDes">Course Fee</p>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>

                            <Col lg={6} sm={12} md={6}>
                                <img style={paymentBannerPic} src="https://react.rabbil.com/images/banner.svg" />
                                <Link to="/registrationPage" ><Button className="loginBtn mt-2" size="sm" type="submit">Join Now</Button></Link>
                            </Col>

                        </Row>
                    </Container>
                </Fragment>
            );
        }
}

export default Payment;