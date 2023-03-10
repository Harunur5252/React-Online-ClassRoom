import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Button, Row } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Menu from "../components/Menu/Menu";

export default class FilesPage extends Component {
  render() {
    const products = [
      {
        fileName: "Lumen Migration Commands",
        download: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
            download
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
      },
      {
        fileName: "Laravel Rest API Presentation Slide",
        download: (
          <a
            href="https://github.com/Harunur5252/React-Online-ClassRoom"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        ),
      },
    ];
    const { SearchBar } = Search;

    const columns = [
      {
        dataField: "fileName",
        text: "FileName",
      },
      {
        dataField: "download",
        text: "Download",
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
          text: "All",
          value: products.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
      <Fragment>
        <title>Files</title>
        <Menu>
          <Container className="mt-2">
            <Row>
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
      </Fragment>
    );
  }
}
