import * as React from "react";
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../style/timeline.css"
import GitHubRepo from "./GitHubRepo";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/viorelyo/repos")
      .then(response => response.json())
      .then(data => this.setState({repos: data}));
  }

  render() {
    let reposCards = this.state.repos.map(repo => <GitHubRepo repo={repo}></GitHubRepo>);

    return (
      <VerticalTimeline>
        {reposCards}
      </VerticalTimeline>
    );
  }
}

export default Timeline;