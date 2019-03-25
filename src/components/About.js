import React, { Component } from "react";
import { connect } from "react-redux";
import { Routing } from "../actions";
class About extends Component {
  componentDidMount() {
    this.props.Routing("About");
  }
  render() {
    return <div>About</div>;
  }
}
const mapStateToProps = state => {
  return { routes: state.route };
};
export default connect(
  mapStateToProps,
  { Routing }
)(About);
