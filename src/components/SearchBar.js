import * as React from "react";
import Form from "react-bootstrap/Form";
import 'react-vertical-timeline-component/style.min.css';
import "../style/searchbar.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {withRouter} from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      input: ""
    }
  }

  toggle() {
    this.setState({"expanded": !this.state.expanded})
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const newPath = "/GitHub-Timeline/" + this.state.input;
    this.props.history.push(newPath);
    this.setState({
      expanded: false,
      input: ""
    })
  }

  render() {
    const inputClassName = this.state.expanded ? "input-true" : "input-false";
    const searchBarClassName = this.state.expanded ? "search-bar-focus" : "search-bar-no-hover";
    const buttonClassName = this.state.expanded ? " btn-search-focus" : "";

    return (
      <React.Fragment>
        <Row noGutters id="search-bar-row" className="flex-row-reverse mx-0 pt-3">
          <div className={"search-bar mr-3 " + searchBarClassName}>
            <Col xs="auto" className="float-right p-0">
              <Button variant="search" className={buttonClassName} onClick={this.toggle.bind(this)}>
                <FontAwesomeIcon icon={faSearch}/>
              </Button>
            </Col>
            <Col key="searchBox" xs="auto" className="float-right p-0">
              <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Control
                  name="input"
                  className={inputClassName}
                  type="text"
                  placeholder="Enter another username..."
                  autoComplete="off"
                  value={this.state.input}
                  onChange={this.onChange.bind(this)}
                />
              </Form>
            </Col>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBar);