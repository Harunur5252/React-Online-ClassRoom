import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class LearningPoint extends Component {

    render() {
       
            const imageStyle={
                width:"50px",
                height:"50px"
            }

            return (
                <Fragment>
                    <Container  className="text-center mt-5">
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <div className="learningPontCard text-center">
                                    <img src="https://react.rabbil.com/images/basic.svg" alt="nothing found" style={imageStyle}/>
                                    <h4 className="learningPontTitle">REACT BASIC</h4>
                                    <p className="learningPontDes">Free Videos Cover All Of Basics About React</p>
                                </div>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                                <div className="learningPontCard text-center">
                                    <img src="https://react.rabbil.com/images/webpage.svg" alt="nothing found" style={imageStyle}/>
                                    <h4 className="learningPontTitle">A-Z REACT FRONT</h4>
                                    <p className="learningPontDes">Paid Videos Cover React Front End Development</p>
                                </div>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                                <div className="learningPontCard text-center">
                                    <img src="https://react.rabbil.com/images/cube.svg" alt="nothing found" style={imageStyle}/>
                                    <h4 className="learningPontTitle">REST API</h4>
                                    <p className="learningPontDes">Laravel Lumen Rest API Used For This Project</p>
                                </div>
                            </Col>

                            <Col lg={3} md={6} sm={12}>
                                <div className="learningPontCard text-center">
                                    <img src="https://react.rabbil.com/images/nucleus.svg" alt="nothing found" style={imageStyle}/>
                                    <h4 className="learningPontTitle">AXIOS HTTP</h4>
                                    <p className="learningPontDes">Axios Http Client Use To Get Post Data To API End Point</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
}

export default LearningPoint;