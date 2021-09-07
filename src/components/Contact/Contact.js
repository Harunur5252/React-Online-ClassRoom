import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import contactImg from '../../assets/images/R.jpg'

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                         <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceMainTitle">Quick Connect Us</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" id="name" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email"  id="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Mobile Number</Form.Label>
                                    <Form.Control type="number"  id="number" placeholder="Enter number" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" id="msg"  rows={3} placeholder="Write Your Message" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                   Send
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='mt-5 p-3'>
                            <img src={contactImg} style={{height:'200px',width:'500px',marginLeft:'20px'}}/>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="m-2 px-4">
                                    <h3 className="discussTitle">Discuss Now</h3>
                                    <p className="videoDes">#79/6 Bhimgonj Aria, 3rd Floor Front Side, Sherpur</p>
                                    <p className="videoDes"><FontAwesomeIcon   icon={faEnvelope} />  hroshid695@gmail.com</p>
                                    <p className="videoDes"><FontAwesomeIcon    icon={faPhone} />  01307216770</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
