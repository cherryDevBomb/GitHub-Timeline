import * as React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";

class GitHubRepo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     repos: []
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
        className="vertical-timeline-element--work"
        contentStyle={{background: '#eeeeee', color: '#000000'}}
        contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
        date={repo.created_at}
        iconStyle={{background: '#aaaaff', "font-size": "10px", "padding-top": "24px"}}
        icon={repo.language}
      >
        <h3 className="vertical-timeline-element-title">{repo.name}</h3>
        <p>
          {repo.description}
        </p>
      </VerticalTimelineElement>
    );
  }
}

export default GitHubRepo;