import React, {Component} from "react";
import HomeSearchBar from "./HomeSearchBar";
import "../style/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeTimeline from "./HomeTimeline";

class Home extends Component {
  render() {
    return (
      <Container fluid className="home p-0">
        <Row noGutters className="vh-100">
          <Col xs="12" lg="5" className="text-center my-auto home-content">
            <div className="my-auto pt-5 pb-3 py-lg-0">
              <h1 className="home-text mb-3">Get your GitHub timeline</h1>
              <h5 className="mb-5 font-weight-light text-muted">A beautifully structured representation of all your GitHub repositories</h5>
              <HomeSearchBar/>
            </div>
          </Col>
          <Col xs="12" lg="7" className="home-illustration pl-3 mt-4 mt-lg-0">
            <HomeTimeline/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;