import React, { Component } from "react";
import { connect } from "react-redux";
import { Routing } from "../actions";
class Home extends Component {
  componentDidMount() {
    this.props.Routing("Home");
  }
  render() {
    return <div>Home</div>;
  }
}
const mapStateToProps = state => {
  return { routes: state.route };
};
export default connect(
  mapStateToProps,
  { Routing }
)(Home);
