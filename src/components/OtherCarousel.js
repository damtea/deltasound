import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Segment
          inverted
          vertical
          textAlign="center"
          style={{ height: "90px" }}
        />
      </React.Fragment>
    );
  }
}

export default Carousel;
