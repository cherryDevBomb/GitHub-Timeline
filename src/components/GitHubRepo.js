import * as React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {getShortDate} from "../utils/dateUtils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";

class GitHubRepo extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   let repo = this.props.repo;
  //   this.state = {
  //     name: repo.name,
  //
  //   }
  // }

  componentDidMount() {
    // fetch("https://api.github.com/users/cherryDevBomb/repos")
    //   .then(response => response.json())
    //   .then(data => this.setState({repos: data}));
  }

  render() {
    let repo = this.props.repo;


    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        // date={getShortDate(repo.created_at)}
        icon={getShortDate(repo.created_at)}
      >
        <Container className="px-0 px-md-2 mb-n3">
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>
            </Col>
            <Col>
              {/*<Button size="sm" variant="outline-dark" className="float-right">*/}
              <Button size="sm" variant="light" className="float-right">
                <i className="fab fa-github mr-1"></i>
                View in GitHub
              </Button>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="vertical-timeline-element-text">
              {repo.description}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="auto" className="vertical-timeline-element-text small">
              <span className="repo-language-color mr-1"/>
              {repo.language}
            </Col>
            <Col xs="auto" className="vertical-timeline-element-text small">
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              {/*TODO format to show 1k on thousands (approximate to one decimal after comma)*/}
              {repo.stargazers_count}
            </Col>
            <Col xs="auto" className="vertical-timeline-element-text small">
              Updated {getShortDate(repo.updated_at)}
            </Col>
          </Row>
        </Container>
        {/*<p className="vertical-timeline-element-text">*/}
        {/*  {repo.description}*/}
        {/*</p>*/}
      </VerticalTimelineElement>
    );
  }
}

export default GitHubRepo;