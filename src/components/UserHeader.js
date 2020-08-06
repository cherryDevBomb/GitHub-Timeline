import * as React from "react";
import 'react-vertical-timeline-component/style.min.css';
import "../style/header.css"
import {getUserInfo} from "../utils/apiUtils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "cherryDevBomb",
      userInfo: {}
    }
  }

  componentDidMount() {
    getUserInfo(this.state.user,)
      .then(data => {
        console.log(data);
        if (data) {
          this.setState({userInfo: data});
        }
      });
  }

  render() {
    let userInfo = this.state.userInfo;

    return (
      <React.Fragment>
        <Container fluid id="header" className="pt-4">
          <Row >
            <Col>{userInfo.name}</Col>
          </Row>
          <Row >
            <Col>{userInfo.login}</Col>
          </Row>
          <Row className="mb-3">
            <Col>{userInfo.bio}</Col>
          </Row>
        </Container>
          <Row>
            <Col xs="auto" className="avatar-icon">
              <Image src={userInfo.avatar_url} roundedCircle className="avatar"/>
            </Col>
          </Row>
      </React.Fragment>
    );
  }
}

export default UserHeader;