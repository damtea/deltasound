import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Slider from "react-slick";

class Carousel extends Component {
  renderCarousel = () => {
    const carousels = [
      {
        title: "Delta Sound",
        sub: "Aizawl Mizoram",
        img: "/MastHead.jpg"
      },
      {
        title: "Best Sound System in Mizoram",
        sub: "We want to provide you the best",
        img: "./MastHead.jpg"
      }
    ];
    const renderedCarousels = carousels.map(carousel => {
      return (
        <Segment
          className="coritem"
          style={{
            backgroundImage: `url(${carousel.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          textAlign="center"
        >
          <Container text className="active">
            <Header as="h1">{carousel.title}</Header>
            <p className="para">{carousel.sub}</p>
          </Container>
        </Segment>
      );
    });
    return renderedCarousels;
  };
  render() {
    const slickSettings = {
      autoplay: true,
      dots: true,
      speed: 500
    };
    return (
      <Slider {...slickSettings} className="slide">
        {this.renderCarousel()}
      </Slider>
    );
  }
}

export default Carousel;
