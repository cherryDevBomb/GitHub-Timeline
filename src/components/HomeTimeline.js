import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "../style/illustration.css";
import Button from "react-bootstrap/Button";

class HomeTimeline extends Component {

  getMockupElement(color) {
    return (
      <VerticalTimelineElement
        className="mockup-timeline-element"
        iconClassName="mockup-timeline-element-icon"
        dateClassName="mockup-no-date"
        contentArrowStyle={{border: 'none'}}
        style={{'--lang-color': `${color}`}}
      >
        <Container className="px-0 px-md-2 mb-n3">
          <Row>
            <Col>
              <h3 className="mockup-timeline-element-title px-2">{"name"}</h3>
            </Col>
            <Col>
              <Button disabled size="sm" variant="outline-dark" className="float-right mockup-btn">
                <div className="mockup-btn-text">Viewwww</div>
              </Button>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="mockup-timeline-element-text">
              {"paste repo description here"}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="auto" className="mockup-small pr-0">
              <span className="mockup-repo-language-color"/>
            </Col>
            <Col xs="auto" className="mockup-timeline-element-text mockup-small px-2 mx-1">lang</Col>
            <Col xs="auto" className="mockup-timeline-element-text mockup-small p-0 mx-1">100k</Col>
            <Col xs="auto" className="mockup-timeline-element-text mockup-small p-0 mx-1">Updated</Col>
          </Row>
        </Container>
      </VerticalTimelineElement>
    )
  }

  render() {
    return (
      <VerticalTimeline className="mockup-timeline">
        {this.getMockupElement("#4285f4")}
        {this.getMockupElement("#fbbc05")}
        {this.getMockupElement("#ea4335")}
        {/*{this.getMockupElement("#8fbdff")}*/}
        {/*{this.getMockupElement("#f1e05a")}*/}
        {/*{this.getMockupElement("#f3968e")}*/}
      </VerticalTimeline>
    )
  }
}

export default HomeTimeline;