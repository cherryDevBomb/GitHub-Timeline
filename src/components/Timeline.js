import * as React from "react";
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../style/timeline.css"
import GitHubRepo from "./GitHubRepo";
import {getRepos} from "../utils/apiUtils";
import UserHeader from "./UserHeader";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      user: this.props.match.params.username
    }
  }

  componentDidMount() {
    this.getAllRepos(this.state.user, 1);
  }

  getAllRepos(user, page) {
    getRepos(this.state.user, page)
      .then(data => {
        if (data && data.length > 0) {
          this.setState({repos: [...this.state.repos, ...data]});
          page++;
          this.getAllRepos(this.state.user, page)
        }
      });
  }

  render() {
    let reposCards = this.state.repos.map(repo => <GitHubRepo repo={repo} key={repo.name}></GitHubRepo>);

    return (
      <React.Fragment>
        <UserHeader user={this.state.user}/>
        <VerticalTimeline>
          {reposCards}
        </VerticalTimeline>
      </React.Fragment>
    );
  }
}

export default Timeline;