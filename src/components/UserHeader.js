import * as React from "react";
import 'react-vertical-timeline-component/style.min.css';
import "../style/header.css"
import {getUserInfo} from "../utils/apiUtils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SearchBar from "./SearchBar";

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      userInfo: {}
    }
  }

  componentDidMount() {
    getUserInfo(this.state.user,)
      .then(data => {
        if (data) {
          this.setState({userInfo: data});
        }
      });
  }

  viewInGitHub() {
    window.open(this.state.userInfo.html_url);
  }

  render() {
    let userInfo = this.state.userInfo;

    return (
      <React.Fragment>
        <SearchBar/>
        <Container fluid id="header" className="pt-3 pt-lg-4">
          <Row>
            <Col className="header-name">{userInfo.name}</Col>
          </Row>
          <Row>
            <Col xs="auto" className="header-username mx-auto p-0"
                 onClick={this.viewInGitHub.bind(this)}>{userInfo.login}</Col>
          </Row>
          <Row className="mb-3 mb-lg-5 mt-4">
            <Col className="header-bio">{userInfo.bio}</Col>
          </Row>
        </Container>
        <Row className="mx-0">
          <Col xs="auto" className="avatar-icon">
            <Image src={userInfo.avatar_url} roundedCircle className="avatar"/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default UserHeader;