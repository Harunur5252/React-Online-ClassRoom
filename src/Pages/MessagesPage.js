import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../components/Menu/Menu";
import { Context } from "../context/Context";
import ReactMarkdown from "react-markdown";
import DataLoading from "../components/DataLoading/DataLoading";

export default class MessagesPage extends Component {
  static contextType = Context;
  render() {
    const { messagesInfo,user } = this.context;
    console.log(user,messagesInfo)
    return (
      <Fragment>
        <title>Messages</title>
        <Menu>
          <Container className="mt-5">
            <Row>
              {messagesInfo?.loading ? (
                <DataLoading />
              ) : (
                <Col lg={10} md={6} sm={12}>
                  {messagesInfo?.messages?.map((msg) => {
                    return (
                      <ReactMarkdown className="text-justify">
                        {msg?.message}
                      </ReactMarkdown>
                    );
                  })}
                </Col>
              )}
            </Row>
          </Container>
        </Menu>
      </Fragment>
    );
  }
}
