import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Button, Row } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import Menu from "../components/Menu/Menu";
import videoImage from "../assets/images/image.jpg";

export default class TutorialPage extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => {
    this.setState({ show: false });
  };
  modalSHow = () => {
    this.setState({ show: true });
  };

  render() {
    const products = [
      {
        id: 1,
        topic: "Getting started",
        title: "Introduction",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Getting started",
        title: "Tools & UI",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Getting started",
        title: "Boiler plate",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Getting started",
        title: "Component Framework",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Getting started",
        title: "Google Fonts",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Getting started",
        title: "Favicon & Main Div",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Top banner Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Service Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Nav Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Chart Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Chart Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Summary Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Project Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Course Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Introduction",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Introduction",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Video Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Video Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Component",
        title: "Video Component",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Review Section",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Review Section",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Review Section",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Footer",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Footer",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Footer",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Footer",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
      {
        id: 1,
        topic: "Section",
        title: "Footer",
        source: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
        play: (
          <FontAwesomeIcon
            onClick={this.modalSHow}
            className="playBtnIcon"
            icon={faPlayCircle}
          />
        ),
      },
    ];
    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "id",
        text: "NO",
        align: "center",
        footerAlign: "center",
        footer: "Footer 1",
      },
      {
        dataField: "topic",
        text: "Topic",
        align: "center",
        footerAlign: "center",
        footer: "Footer 2",
      },
      {
        dataField: "title",
        text: "Title",
        align: "center",
        footerAlign: "center",
        footer: "Footer 3",
      },
      {
        dataField: "source",
        text: "Source",
        align: "center",
        footerAlign: "center",
        footer: "Footer 4",
      },
      {
        dataField: "play",
        text: "Play",
        align: "center",
        footerAlign: "center",
        footer: "Footer 5",
      },
    ];

    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total p-2">
        Showing {from} to {to} of {size} Results
      </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      // alwaysShowAllBtns: true, // Always show next and previous button
      // withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      disablePageTitle: true,
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "15",
          value: 15,
        },
        {
          text: "20",
          value: 20,
        },
        {
          text: "25",
          value: 25,
        },
        {
          text: "30",
          value: 30,
        },
        {
          text: "All",
          value: products.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
      <Fragment>
        <title>tutorial</title>
        <Menu>
          <Container>
            <Row>
              <Col lg={5} sm={12} md={5}>
                <select className="form-control">
                  <option selected disabled>
                    Open this select menu
                  </option>
                  <option value="2">React Fundamental</option>
                  <option value="1">Added Next js</option>
                  <option value="3">Lumen Api Fundamental</option>
                  <option value="3">React Advanced</option>
                  <option value="3">React Seo</option>
                </select>
              </Col>

              <Col
                lg={12}
                sm={12}
                md={12}
                className="mt-5 table table-responsive"
              >
                <ToolkitProvider
                  keyField="id"
                  data={products}
                  columns={columns}
                  search
                >
                  {(props) => (
                    <div>
                      <Row>
                        <Col lg={4} sm={12} md={4} className="ml-auto">
                          <div>
                            <h3>Input something</h3>
                            <SearchBar {...props.searchProps} />
                            <hr />
                          </div>
                        </Col>
                      </Row>
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        pagination={paginationFactory(options)}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Col>
            </Row>
          </Container>
        </Menu>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player
              poster={videoImage}
              startTime={0}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
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
      </Fragment>
    );
  }
}
