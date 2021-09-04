import React, { Component, Fragment } from 'react'
import {Container,Row,Col} from 'react-bootstrap'


class FindMoreSection extends Component {

    render() {

            const findMoreImgeSize={
                textDecoration:"none",
                height:"60px",
                width:"60px",
            }

            return (
                <Fragment>
                    <Container className="text-center mt-5">
                        <h4 className="videoTitle">Find More</h4>
                        <p  className="videoDes">Get Other Tutorial Series By Harun</p>
                        <Row>
                            <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/laravellogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">Laravel</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/asp.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">ASP.NET</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/androidlogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">Android</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/dartlogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">Dart</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/reactlogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">React Native</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/javalogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">Java</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://react.rabbil.com/images/reactlogo.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">React</h2>
                                    </div>
                                </a>
                           </Col>

                           <Col lg={3} sm={12} md={3}>
                                <a href="#" target="_blank" rel="noreferrer" className="button">
                                    <div className="findMoreTutorialCard text-center">
                                        <img src="https://www.laramind.com/blog/wp-content/uploads/2017/02/scandaliitaliani-12.png" style={findMoreImgeSize}/>
                                        <h2 className="findMoreTutorialTitle m-1">Lumen</h2>
                                    </div>
                                </a>
                           </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }


export default FindMoreSection;