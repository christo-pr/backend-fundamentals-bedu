import React, { useState, useEffect } from "react"
import {
  Site,
  Page,
  Grid,
  ContactCard,
  List,
  Button,
  Loader,
} from "tabler-react"
import { Link } from "@reach/router"

import { request } from "../utils/request"

const Tenants = (props) => {
  const { tenants = [] } = props

  return (
    <List.Group>
      {tenants.map((t) => (
        <List.GroupItem action icon="user" key={t.id}>
          <Link to={`/tenant/${t.id}`}>{t.name}</Link>
        </List.GroupItem>
      ))}
    </List.Group>
  )
}

export const Listing = (props) => {
  const { id } = props
  const [listing, setListing] = useState({})

  useEffect(() => {
    async function fetchListingDetails() {
      const response = await request(`/listings/${id}`, { secure: true })

      if (response.messge) return

      setListing(response)
      console.log("fetchListingDetails -> response", response)
    }

    fetchListingDetails()
  }, [id])

  return (
    <>
      <Site.Header />
      <Page.Content
        title="Detalles"
        subTitle={
          <Link to="/dashboard">
            <Button color="dark" icon="arrow-left">
              Regresar
            </Button>
          </Link>
        }
      >
        <Grid.Row cards deck>
          <Grid.Col md={12}>
            <br />
            {!Object.keys(listing).length ? (
              <Loader />
            ) : (
              <ContactCard
                cardTitle={listing.name}
                mapPlaceholder="https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg"
                rounded
                alt="Generic placeholder image"
                address={{
                  line1: listing.address,
                }}
                details={[
                  { title: "Price", content: listing.price },
                  { title: "Maximos permitidos", content: listing.maxAllow },
                  {
                    title: "Fecha de pago",
                    content: listing.payDate,
                  },
                  {
                    title: "Inquilinos",
                    content: <Tenants tenants={listing.tenants} />,
                  },
                ]}
                description={listing.description}
              />
            )}
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
