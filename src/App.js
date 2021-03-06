import React, {Component} from "react";
import Timeline from "./components/Timeline";
import Switch from "react-bootstrap/Switch";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch className="p-0 m-0">
          <Route exact path={"/GitHub-Timeline"} component={Home}/>
          <Route exact path={"/GitHub-Timeline/:username"} component={Timeline}/>
        </Switch>
      </Router>
    )
  }
}

export default App;