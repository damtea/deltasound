import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Segment inverted vertical textAlign="center">
          <Container text className="active">
            <Header inverted as="h1">
              About
            </Header>
            <p />
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Carousel;
