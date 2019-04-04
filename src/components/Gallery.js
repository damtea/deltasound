import React from "react";
import { Card, Image, Segment, Divider, Header, Icon } from "semantic-ui-react";
class Gallery extends React.Component {
  renderImage = () => {
    const images = [
      {
        id: 1,
        name: "Line array",
        src: "/images/Mr.Big Re-union Dimapur/1.jpg",
        year: "2009",
        desc: "Line array from Delta Sound"
      },
      {
        id: 2,
        name: "Stage Setup",
        src: "/images/Mr.Big Re-union Dimapur/2.jpg",
        year: "2009",
        desc: "From the right side"
      },
      {
        id: 3,
        name: "Field",
        src: "/images/Mr.Big Re-union Dimapur/3.jpg",
        year: "2009",
        desc: "Field View"
      },
      {
        id: 4,
        name: "Stage View",
        src: "/images/Mr.Big Re-union Dimapur/4.jpg",
        year: "2009",
        desc: "From the back"
      },
      {
        id: 5,
        name: "Mr Para",
        src: "/images/Mr.Big Re-union Dimapur/6.jpg",
        year: "2009",
        desc: "Stage view"
      },
      {
        id: 6,
        name: "Stage Setup",
        src: "/images/Mr.Big Re-union Dimapur/7.jpg",
        year: "2009",
        desc: "From the left side"
      },
      {
        id: 7,
        name: "Back Stage",
        src: "/images/Mr.Big Re-union Dimapur/8.jpg",
        year: "2009",
        desc: "From the left side"
      }
    ];

    return images.map(image => {
      return (
        <Card key={image.id} raised>
          <Image style={{ padding: 10 }} src={image.src} size="large" />
          <Card.Content>
            <Card.Header>{image.name}</Card.Header>
            <Card.Meta>{image.year}</Card.Meta>
            <Card.Description>{image.desc}</Card.Description>
          </Card.Content>
        </Card>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <Segment placeholder>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="images" />
              Gallery
            </Header>
          </Divider>
          <Card.Group stackable itemsPerRow={6}>
            {this.renderImage()}
          </Card.Group>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Gallery;
