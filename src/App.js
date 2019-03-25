import React, { Component } from "react";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <TopBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Albums" exact component={Albums} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact" exact component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
