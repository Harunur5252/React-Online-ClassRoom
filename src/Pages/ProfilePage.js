import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu/Menu'

export default class ProfilePage extends Component {
    constructor(){
        super();
        this.state={
            show:false,
        }
    }

    modalClose = () =>{
        this.setState({show:false})
    }
    modalSHow = () => {
       this.setState({show:true})
    }

    render() {
        return (
            <Fragment>
                <title>Profile</title>
                <Menu>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={10} sm={12} md={10}>
                               <Card style={{ width: '19rem' }}>
                                    <Card.Body>
                                        <table className='table' width='100%'>
                                            <tbody>
                                                <tr>
                                                    <td><b>Name</b></td>
                                                    <td>Md.Harunur Roshid</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Email</b></td>
                                                    <td>hroshid695@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Phone</b></td>
                                                    <td>01795349786</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Status</b></td>
                                                    <td>Active</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button type="submit" onClick={this.modalSHow} className="modalloginBtn">Change Password</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Menu>
                <Modal size="md" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                    </Modal.Header>
                    <Form> 
                    <Modal.Body>                                                                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="number" className="videoDes" defaultValue="01795349786" placeholder="Mobile No" />
                        </Form.Group>  

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" className="videoDes" placeholder="Old Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" className="videoDes" placeholder="New Password" />
                        </Form.Group>     

                     </Modal.Body>
                    <Modal.Footer className="mt-3">
                    <Link to="#"><Button  className="modalloginBtn" onClick=""  type="submit">
                        Reset
                    </Button></Link>
                    <Button  className="modalloginBtn" onClick={this.modalClose}>
                       Close
                    </Button>
                    </Modal.Footer>
                   </Form>
                </Modal>

            </Fragment>
        )
    }
}
