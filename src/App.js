import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopBars from "./components/TopBars";
import Gallery from "./components/Gallery";
import "./App.css";
const ResponsiveContainer = ({ children }) => (
  <div>
    <TopBars>{children}</TopBars>
  </div>
);
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ResponsiveContainer>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Albums" exact component={Albums} />
                <Route path="/Albums/:id" exact component={Gallery} />
                <Route path="/About" exact component={About} />
                <Route path="/Contact" exact component={Contact} />
              </Switch>
              <Footer />
            </ResponsiveContainer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
