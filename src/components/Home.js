import React, { Component } from "react";
import {
  Divider,
  Segment,
  Header,
  Grid,
  Image,
  Button,
  Message
} from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16} textAlign="justified">
                <Message>
                  <Header
                    as="h1"
                    style={{ fontSize: "2em" }}
                    textAlign="center"
                  >
                    Welcome to Delta Sound Website!
                  </Header>
                </Message>

                <p style={{ fontSize: "1.33em" }}>
                  Delta Sound,bases in Aizawl,Mizoram, is the leading sound
                  system rental in the North-East of India and also provides
                  lighting system and video coverage. It will provide you all
                  the state-of-the-art equiptment which will all be operated by
                  a well trained personel and engineer. When you choose Delta
                  Sound you can be well assured that you are choosing the
                  company that has experience in all fields of sound system and
                  you need not worry about anything all throughout your show.
                  Choosing Delta Sound for your concert,wedding,party, or any
                  other events or gathering means you've got the best in place.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Check out our equiptment list and feel free to contact us
                  anytime and experience the quality that is delivered right to
                  your event. For any questions contact us at
                  0389-2327695/9436142891.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Delta Sound specializes in audio,video and light equiptment
                  rentals for: Concert,Dj Events, Tours, Conventions,Church
                  Functions, Wedding, Parties, Corporate Events, Press
                  Conference...
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Delta Sound also specializes in Sound Installation for
                  Churches, Auditorium, Halls, Conference system, etc... and
                  have experience for even the most complicated acoustics
                  conditions.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Delta Sound is also the best sound system provider and rental
                  system in all of the North-East of India.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "0em 0em", textTransform: "uppercase" }}
          >
            What we can do for you
          </Divider>
          <br />
          <Grid container stackable textAlign="justified" columns={4}>
            <Grid.Column>
              <Image centered circular size="tiny" src="/images/calendar.png" />
              <Header as="h1">Events</Header>
              <p>
                We can provide all the necessary equiptments for the show and
                make it a success.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="tiny" src="/images/clothes.png" />
              <Header as="h1">Weddings</Header>
              <p>
                Wedding is the most important day of everyone's life so to make
                it a success it is important that you choose the right Sound.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="tiny" src="/images/lecture.png" />
              <Header as="h1">Conferences</Header>
              <p>
                We will provide microphones, audio, press splitters, and even
                record the event if you need.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image
                centered
                circular
                size="tiny"
                src="/images/install-wizard.png"
              />
              <Header as="h1"> Installation</Header>
              <p>
                We have done successful numbers of churches, halls,
                auditoriums,conference systems etc. installations and we can say
                that we are the best in what we do in the whole of North-East of
                India.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
          </Grid>

          <Grid container stackable textAlign="justified" columns={4}>
            <Grid.Column>
              <Image centered circular size="tiny" src="/images/reunion.png" />
              <Header as="h1">Board Meetings</Header>
              <p>
                We can set up to record your board meeting and deliver the
                results on CD for your records.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image
                centered
                circular
                size="tiny"
                src="/images/technical-support.png"
              />
              <Header as="h1">Technical Back-Up</Header>
              <p>
                You need assurance that even when you face problems you would
                get a technical backup with a trained personel who would solve
                every problem you face.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="tiny" src="/images/speaker.png" />
              <Header as="h1">Sound Tuning</Header>
              <p>
                Delta Sound is there for you to do a perfect tuning and sound
                treatment and let it define CLARITY for you.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image
                centered
                circular
                size="tiny"
                src="/images/projector.png"
              />
              <Header as="h1"> Movie Projection</Header>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Home;
