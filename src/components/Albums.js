import React, { Component } from "react";
import { connect } from "react-redux";
import { Routing } from "../actions";
class Albums extends Component {
  componentDidMount() {
    this.props.Routing("Albums");
  }
  render() {
    return <div>{this.props.routes}</div>;
  }
}
const mapStateToProps = state => {
  return { routes: state.route };
};
export default connect(
  mapStateToProps,
  { Routing }
)(Albums);
