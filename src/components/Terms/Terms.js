import React, { Component,Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
class Terms extends Component {
    render() {
            return (
            <Fragment>
                 <Container className="mt-5">
                    <Row>
                       <Col sm={12} md={12} lg={12}>
                       <h2 className="playBtnIcon">Terms & Conditions System</h2>
                       <p className="serviceDescription text-justify">BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>
                        <p className="serviceDescription text-justify">BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>
                           
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }
}

export default Terms;