import * as React from "react";
import Form from "react-bootstrap/Form";
import 'react-vertical-timeline-component/style.min.css';
import "../style/searchbar.css"
import "../style/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {withRouter} from "react-router-dom";

class HomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      hovered: false,
      focused: false
    }

    this.inputRef = React.createRef();
    this.onClickOutsideInput = this.onClickOutsideInput.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickOutsideInput);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickOutsideInput);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onInputHover(e) {
    this.setState({hovered: true})
  }

  onHoverOutsideInput(e) {
    this.setState({hovered: false})
  }

  onInputClick(e) {
    this.setState({focused: true})
  }

  onClickOutsideInput(e) {
    this.setState({focused: false})
  }

  onSubmit(e) {
    e.preventDefault();
    const newPath = "/" + this.state.input;
    this.props.history.push(newPath);
    this.setState({
      input: ""
    })
  }

  render() {
    const isSearchActive = this.state.hovered || this.state.focused;
    const searchBarClassName = isSearchActive ? "homesearch-bar-focus" : "";
    const searchBtnClassName = isSearchActive ? "btn-homesearch-focus" : "";

    return (
      <React.Fragment>
        <Row noGutters className="{flex-row-reverse mx-0 pt-3">
          <div className={"search-bar mx-auto " + searchBarClassName} onMouseOver={this.onInputHover.bind(this)}
               onMouseLeave={this.onHoverOutsideInput.bind(this)}>
            <Col xs="auto" className="float-right p-0">
              <Button variant="homesearch" type="submit" className={searchBtnClassName}>
                <FontAwesomeIcon icon={faSearch}/>
              </Button>
            </Col>
            <Col key="searchBox" xs="auto" className="float-right p-0">
              <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Control
                  ref={this.inputRef}
                  name="input"
                  className="input"
                  type="text"
                  placeholder="Enter username..."
                  autoComplete="off"
                  value={this.state.input}
                  onChange={this.onChange.bind(this)}
                  onClick={this.onInputClick.bind(this)}
                />
              </Form>
            </Col>
          </div>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(HomeSearchBar);