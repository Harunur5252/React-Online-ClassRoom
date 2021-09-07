import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card, Modal,Button} from 'react-bootstrap'
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import "video-react/dist/video-react.css";
import { Player, BigPlayButton,ControlBar,ReplayControl,ForwardControl } from 'video-react'
import Menu from '../components/Menu/Menu'
import videoImage from '../assets/images/image.jpg'

export default class ClassRoomHomePage extends Component {
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
                <title>ClassRoomHome</title>
                <Menu>
                    <Container className="mt-3">
                        <Row>
                            <Col lg={3} sm={12} md={3}>
                                    <a target="_blank" rel="noreferrer" className="button">
                                        <div className="findMoreTutorialCard text-center">
                                            <h2 className="findMoreTutorialTitle m-1 color">339</h2>
                                            <p style={{color:'blue'}}>Total Class Uploaded</p>
                                        </div>
                                    </a>
                            </Col>

                            <Col lg={3} sm={12} md={3}>
                                    <a target="_blank" rel="noreferrer" className="button">
                                        <div className="findMoreTutorialCard text-center">
                                            <h2 className="findMoreTutorialTitle m-1 color">8</h2>
                                            <p style={{color:'blue'}}>Your File Uploaded</p>
                                        </div>
                                    </a>
                            </Col>

                            <Col lg={3} sm={12} md={3}>
                                    <a target="_blank" rel="noreferrer" className="button">
                                        <div className="findMoreTutorialCard text-center">
                                            <h2 className="findMoreTutorialTitle m-1 color">2</h2>
                                            <p style={{color:'blue'}}>Message From Instructor</p>
                                        </div>
                                    </a>
                            </Col>

                            <Col lg={3} sm={12} md={3}>
                                    <a target="_blank" rel="noreferrer" className="button">
                                        <div className="findMoreTutorialCard text-center">
                                            <h2 className="findMoreTutorialTitle m-1 color">500</h2>
                                            <p style={{color:'blue'}}>Total Views From You</p>
                                        </div>
                                    </a>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="ml-0 mt-4">
                        <Row>
                            <Col lg={3} sm={12} md={3}>
                                <Chart
                                    width={'800px'}
                                    height={'400px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Pizza', 'Popularity'],
                                        ['Complete', 18],
                                        ['Not Complete', 26],
                                    ]}
                                    options={{
                                        title: 'Your Progress',
                                        sliceVisibilityThreshold: 0.2, // 20%
                                    }}
                                    rootProps={{ 'data-testid': '7' }}
                                />   
                            </Col>

                            <Col lg={6} sm={12} md={12}>
                                <Card style={{ width: '29rem' }} className="margin">
                                    <Card.Body>
                                        <Card.Title>What's New</Card.Title>
                                        <hr/>
                                        <Card.Text>
                                            <p>
                                               Total Income Last 7 Days <FontAwesomeIcon onClick={this.modalSHow} className="playIconSize margin-left-playIcon" icon={faPlayCircle} />
                                            </p>

                                            <p>
                                               Total Income Last 7 Days <FontAwesomeIcon onClick={this.modalSHow} className="playIconSize margin-left-playIcon" icon={faPlayCircle} />
                                            </p>

                                            <p>
                                               Total Income Last 7 Days <FontAwesomeIcon onClick={this.modalSHow} className="playIconSize margin-left-playIcon" icon={faPlayCircle} />
                                            </p>

                                            <p>
                                               Total Income Last 7 Days <FontAwesomeIcon onClick={this.modalSHow} className="playIconSize margin-left-playIcon" icon={faPlayCircle} />
                                            </p>

                                            <p>
                                               Total Income Last 7 Days <FontAwesomeIcon onClick={this.modalSHow} className="playIconSize margin-left-playIcon" icon={faPlayCircle} />
                                            </p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player
                                poster={videoImage}
                                startTime={0}
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">

                                <BigPlayButton position="center" />

                                <ControlBar autoHide={false}>
                                    <ReplayControl seconds={5} order={2.1} />
                                    <ForwardControl seconds={5} order={3.1} />
                                </ControlBar>
                            </Player>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="videoBtn" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </Container>
                </Menu>
            </Fragment>
        )
    }
}
