import React, { Component } from "react";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment vertical>
          <Grid container stackable textAlign="center">
            <Grid.Column>
              <Image centered size="tiny" src="/logo.png" />
              <Header as="h1" textAlign="center">
                About Us
              </Header>
            </Grid.Column>
          </Grid>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16} textAlign="justified">
                <Segment placeholder>
                  <p style={{ fontSize: "1.33em" }}>
                    Delta Sound offers flexibility and convenience paired with a
                    comprehensive inventory featuring the latest
                    state-of-the-art equipment available in the market. We offer
                    competitive rates to assure our clients they are getting the
                    most for their money.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    We look forward to making your event a success!
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    Delta Sound is a full service audio, video and lighting
                    provider for a wide array of events. Delta Sound was founded
                    in 1997 by Mr.C.Lalpartlana(Mr.C.L.Para), who is the
                    proprietor and manager of the company. The company started
                    out with only a 2(two) 15" speaker, a 16ch mixer and a few
                    microphone and accessories.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    The proprietor,Mr.C.Lalpartlana(Mr.C.L.Para), is a trained
                    and certified engineer in the field of electronics and sound
                    system.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    But now with a huge development in skills, inventories and
                    experience, Delta Sound is equipped with gears and
                    inventories which the world famous and International Bands
                    are demanding all over the globe. With the addition of Nexo
                    GeoD10 in the main house Delta Sound is ready to cover any
                    Show and events anywhere.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    With experience ranging from a small hall to large
                    hall/auditorium with bad acoustics to large fields, Delta
                    Sound is GEARED-UP to make your show a success. We provide
                    quality, professionalism, and experience , and pride
                    ourselves in our commitment to customer service — focusing
                    on making the individual needs of our clients a reality.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    You'll find we have a qualified and friendly staff of sound
                    and lighting engineers who will set-up, maintain and operate
                    all types of equipment. Our Sound engineers are experienced
                    in a wide variety of environments and will work with any
                    kind of artist, from the developing artists to the world
                    class artists / players.
                  </p>
                  <p style={{ fontSize: "1.33em" }}>
                    Delta Sound serves a network of clients including
                    independent artists, multi-platinum major label recording
                    artists, promoters, television and music video production
                    companies, wedding and party planners, corporate shows and
                    other event or entertainment-related entities and travelled
                    across the country including Aizawl, Silchar, Shillong,
                    Itanagar, Dimapur,Imphal, Mumbai, Kathmandu,etc.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default About;
