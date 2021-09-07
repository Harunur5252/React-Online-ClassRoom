import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class JoinClassRoom extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={6} sm={12} md={6} className="videoCard">
                           <h1 className="join-class-title">REACT</h1>
                           <p className="videoDes" style={{fontSize:'19px'}}>Always Follow Sequence When You Study</p>
                           <Link to="/classroom"><Button className="join-class-btn">GO CLASS ROOM </Button></Link>
                        </Col>

                        <Col lg={6} sm={12} md={6}>
                            <img src="https://react.rabbil.com/images/classroom.png"/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
