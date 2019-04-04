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
                  src="/images/Mr.Big Re-union Dimapur/1.jpg"
                  as={Link}
                  to="/Albums/1"
                />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>Mr. Big Reunion</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>14 October 2009</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Dimapur</Table.Cell>
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
                  src="/images/Mr.Big Re-union Shillong/Mr.Big Rocks Shillong Powered by DELTA SOUND.jpg"
                  as={Link}
                  to="/Albums/2"
                />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>Mr. Big Reunion</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell> 2019</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Shillong</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image
                  centered
                  size="small"
                  src="/images/Bryan Adams Kathmandu/Piles and piles of boxes.jpg"
                  as={Link}
                  to="/Albums/3"
                />
                <Table definition>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell width={5}> Name</Table.Cell>
                      <Table.Cell>Bryan Adams</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Date</Table.Cell>
                      <Table.Cell>20 April 2011</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Place</Table.Cell>
                      <Table.Cell>Kathmandu</Table.Cell>
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
