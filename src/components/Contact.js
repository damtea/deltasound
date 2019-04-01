import React, { Component } from "react";
import {
  Segment,
  Header,
  Grid,
  Image,
  Divider,
  Icon,
  Table,
  Button,
  Form,
  TextArea
} from "semantic-ui-react";
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment>
          <Grid container stackable textAlign="center">
            <Grid.Column>
              <Image centered size="tiny" src="/logo.png" />
              <Header as="h1" textAlign="center">
                Contact Us
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Grid columns={2} stackable>
            <Divider vertical />
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Grid stackable containe columns={3}>
                  <Grid.Column />
                  <Grid.Column style={{ width: "400px" }}>
                    <Segment>
                      <Header icon textAlign="center">
                        <Icon name="mail" />
                        Ask Questions
                      </Header>
                      <Form>
                        <Form.Field>
                          <label>Name*</label>
                          <input placeholder="Enter your name" />
                        </Form.Field>
                        <Form.Field>
                          <label>Email*</label>
                          <input placeholder="Enter your email" />
                        </Form.Field>
                        <Form.Field
                          id="form-textarea-control-opinion"
                          control={TextArea}
                          label="Opinion"
                          placeholder="Opinion"
                          inline
                          rows={4}
                        />
                        <Form.Field />
                        <Button type="submit" secondary>
                          Send Mail
                        </Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <Header icon textAlign="center">
                  <Icon name="users" />
                  Contact Persons
                </Header>
                <Table
                  basic="very"
                  style={{ fontSize: "1.3em" }}
                  textAlign="left"
                >
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}>
                        <b>Proprietor</b>
                      </Table.Cell>
                      <Table.Cell>
                        C. Lalpartlana (C.L.Para) - 9436142891
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <b>Sound Rental</b>
                      </Table.Cell>
                      <Table.Cell>Benjamin - 9436352077</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <b>Sales Marketing</b>
                      </Table.Cell>
                      <Table.Cell>Joseph-9436151238</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Header icon textAlign="center">
                  <Icon name="address card" />
                  Address Information
                </Header>
                <p style={{ fontSize: "1.3em" }}>
                  Delta Electronics Service A-10,
                  <br />
                  Kaisara Road, Near Tennis Court, <br />
                  Tuikual South Aizawl, MIzoram 796001
                  <br /> Ph- 0389 2327695/2328230
                  <br />
                  e-mail- deltasound@rediffmail.com
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Contact;
