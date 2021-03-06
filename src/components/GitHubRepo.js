import * as React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {getFormattedDate, getFormattedShortDate} from "../utils/dateUtils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";
import {getLanguageColor} from "../utils/colorUtils";
import {getFormattedStarsCount} from "../utils/numberUtils";

class GitHubRepo extends React.Component {

  viewInGitHub() {
    window.open(this.props.repo.html_url);
  }

  render() {
    let repo = this.props.repo;

    const langColor = getLanguageColor(repo.language);

    let dateParts = getFormattedShortDate(repo.created_at).split(" ");
    let iconDate = (
      <div className="vertical-timeline-element-date">
        <Row className="my-auto">
          <Col xs={12} className="mx-auto text-center">{dateParts[0]}</Col>
          <Col xs={12} className="mx-auto text-center">{dateParts[1]}</Col>
        </Row>
      </div>
    );

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        style={{'--lang-color': `${langColor}`}}
        icon={iconDate}
      >
        <Container className="px-0 px-md-2 mb-n3">
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>
            </Col>
            <Col>
              <Button size="sm" variant="outline-dark" className="float-right" onClick={this.viewInGitHub.bind(this)}>
              {/*<Button size="sm" variant="light" className="float-right" onClick={this.viewInGitHub.bind(this)}>*/}
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
            {repo.language &&
            <Col xs="auto" className="vertical-timeline-element-text small">
              <span className="repo-language-color mr-1"/>
              {repo.language}
            </Col>
            }
            <Col xs="auto" className="vertical-timeline-element-text small">
              <FontAwesomeIcon icon={faStar} className="mr-1"/>
              {getFormattedStarsCount(repo.stargazers_count)}
            </Col>
            <Col xs="auto" className="vertical-timeline-element-text small">
              Updated {getFormattedDate(repo.updated_at)}
            </Col>
          </Row>
        </Container>
      </VerticalTimelineElement>
    );
  }
}

export default GitHubRepo;