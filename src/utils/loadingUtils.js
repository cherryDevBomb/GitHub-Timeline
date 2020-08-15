import * as React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const getLoadingPage = () => {
  return (
    <Container fluid className="home">
      <Row noGutters className="vh-100 my-auto">
        <Col xs="auto m-auto">
          <Spinner animation="grow" variant="light"/>
        </Col>
      </Row>
    </Container>
  )
}