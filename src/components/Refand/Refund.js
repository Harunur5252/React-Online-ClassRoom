import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
class Refund extends Component {

    render() {
            return (
            <Fragment>
                 <Container className="mt-5">
                    <Row>
                       <Col sm={12} md={12} lg={12}>
                           <p className="text-justify">
                               <h2 className="playBtnIcon">Refund Policy System</h2>
                           <ul>
                               <li className="serviceDescription text-justify">First 30 Days Money Back!</li>
                               <li className="serviceDescription text-justify">THIS IS NOT A BUY-AND-TRY PRODUCT</li>
                               <li className="serviceDescription text-justify">Refund is applicable for software and plugins, if the products aren't functioning, producing errors or you haven't received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That's a firm promise and commitment.</li>
                               <li className="serviceDescription text-justify">After 30 Days : There is no refund offered after the first 30 days.</li>
                               <li className="serviceDescription text-justify">To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>
                               <li className="serviceDescription text-justify">Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>
                               <li className="serviceDescription text-justify" >First 30 Days Money Back!</li>
                               <li className="serviceDescription text-justify">THIS IS NOT A BUY-AND-TRY PRODUCT</li>
                               <li className="serviceDescription text-justify">After 30 Days : There is no refund offered after the first 30 days.</li>
                               <li className="serviceDescription text-justify">To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>
                               <li className="serviceDescription text-justify">First 30 Days Money Back!Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>
                           </ul>
                            </p>
                           
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }
        
    }


export default Refund;