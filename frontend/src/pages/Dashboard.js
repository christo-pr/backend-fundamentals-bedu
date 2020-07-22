import React, { useEffect, useState } from "react"
import { Site, Page, Grid, Card, Icon, List, Nav } from "tabler-react"
import { Link } from "@reach/router"

import { request } from "../utils/request"

export const Dashboard = (props) => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    async function fetchListings() {
      const response = await request("/listings", {
        secure: true,
      })

      if (response.message) return

      setListings(response)
    }

    fetchListings()
  }, [])

  return (
    <>
      <Site.Nav items={[<Nav.Link to="logout">Logout</Nav.Link>]} />
      <Page.Content
        title="Dashboard"
        subTitle={<Link to="/listing/new">Nuevo Listing</Link>}
      >
        <Grid.Row cards deck>
          {!!listings &&
            listings.map((l) => (
              <Grid.Col md={6} key={l.id}>
                <Card>
                  <Card.Status color="blue" side />
                  <Card.Header>
                    <Card.Title className="clickable">
                      <Link to={`/listing/${l.id}`}>
                        <Icon prefix="fa" name="building" />
                        &nbsp;{l.name}
                      </Link>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <List.Group>
                      <List.GroupItem active icon="map">
                        {l.address}
                      </List.GroupItem>
                      <List.GroupItem icon="align-justify">
                        {l.description}
                      </List.GroupItem>
                      <List.GroupItem icon="users">
                        Tenants:
                        <List.Group>
                          <br />
                          {l.tenants.map((t) => (
                            <List.GroupItem action icon="user" key={t.id}>
                              &nbsp;{t.name}
                            </List.GroupItem>
                          ))}
                        </List.Group>
                      </List.GroupItem>
                    </List.Group>
                  </Card.Body>
                </Card>
              </Grid.Col>
            ))}
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
