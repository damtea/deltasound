import React, { Component } from "react";
import {
  Table,
  Header,
  Divider,
  Icon,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";
class Albums extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment vertical>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="images" />
              Albums
            </Header>
          </Divider>
          <Grid stackable container columns={3}>
            <Grid.Column>
              <Segment textAlign="center">
                <Image
                  centered
                  size="small"
                  src="/s.jpg"
                  as={Link}
                  to="About"
                />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>GNR</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>16 January 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Aizawl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign="center">
                <Image
                  centered
                  size="small"
                  src="/logo.png"
                  as={Link}
                  to="About"
                />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>GNR</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>16 January 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Aizawl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image centered size="small" src="/logo.png" />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>GNR</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>16 January 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Aizawl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image centered size="small" src="/logo.png" />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>GNR</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>16 January 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Aizawl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image centered size="small" src="/logo.png" />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>GNR</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>16 January 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Aizawl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Albums;
