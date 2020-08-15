import React, {Component} from "react";
import HomeSearchBar from "./HomeSearchBar";
import "../style/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserNotFound extends Component {
  render() {
    return (
      <Container fluid className="home p-0">
        <Row noGutters className="vh-100">
          <Col xs="12" className="text-center my-auto home-content">
              <h1 className="home-text mb-3">User Not Found</h1>
              <h5 className="mb-5 font-weight-light text-muted">There is no Github account for this username. Try again!</h5>
              <HomeSearchBar/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserNotFound;