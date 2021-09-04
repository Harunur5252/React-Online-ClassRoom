import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Jumbotron} from 'react-bootstrap'
import ReactLogo from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'

class Login extends Component {

    render() {
       
        return (
            <Fragment>
                 <Jumbotron>
                    <Container className="text-center marginTop">
                        <Row>
                            <Col lg={6} md={6} sm={12} className="">
                                <h1   className="loginTitle">React</h1>
                                <span className="loginDes">Learn With Rabbil Hasan</span><br/>
                                <span className="loginDes">Learn Something Good & Do Something Better</span><br/>
                                <Link to="/userLogin" className="button"><Button className="mt-2 loginBtn"  block>Login</Button></Link>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mt-1">
                               <img src={ReactLogo} className="App-logo"/>
                            </Col>
                        </Row>
                    </Container>
                 </Jumbotron>
            </Fragment>
        );
    }
}

export default Login;