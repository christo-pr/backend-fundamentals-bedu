import React from "react"

import { Site, Page, Grid, Card, Icon, List } from "tabler-react"

export const Dashboard = (props) => {
  return (
    <>
      <Site.Header />
      <Page.Content title="Dashboard">
        <Grid.Row cards deck>
          <Grid.Col md={6}>
            <Card>
              <Card.Status color="blue" side />
              <Card.Header>
                <Card.Title>
                  <Icon prefix="fa" name="building" />
                  Nombre de la casa
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <List.Group>
                  <List.GroupItem active icon="map">
                    Lugar
                  </List.GroupItem>
                  <List.GroupItem icon="align-justify">
                    Description
                  </List.GroupItem>
                  <List.GroupItem icon="users">
                    Tenants:
                    <List.Group>
                      <br />
                      <List.GroupItem action icon="user">
                        User uno
                      </List.GroupItem>
                      <List.GroupItem action icon="user">
                        User dos
                      </List.GroupItem>
                    </List.Group>
                  </List.GroupItem>
                </List.Group>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
