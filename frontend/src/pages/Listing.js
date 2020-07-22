import React, { useState, useEffect } from "react"
import {
  Site,
  Page,
  Grid,
  ContactCard,
  List,
  Button,
  Loader,
  Icon,
} from "tabler-react"
import { Link } from "@reach/router"

import { request } from "../utils/request"

const Tenants = (props) => {
  const { tenants = [], listingId } = props

  return (
    <List.Group>
      {tenants.map((t) => (
        <List.GroupItem action icon="user" key={t.id}>
          <Link to={`/tenant/${t.id}`}>{t.name}</Link>
        </List.GroupItem>
      ))}
      <br />
      <div align="center">
        <Link to={`/tenant/${listingId}/new`}>
          <Icon prefix="fa" name="plus" />
        </Link>
      </div>
    </List.Group>
  )
}

export const Listing = (props) => {
  const { id, navigate } = props
  const [listing, setListing] = useState({})

  useEffect(() => {
    async function fetchListingDetails() {
      const response = await request(`/listings/${id}`, { secure: true })

      if (response.messge) return

      setListing(response)
    }

    fetchListingDetails()
  }, [id])

  const deleteListing = async (id) => {
    const response = await request(`/listings/${id}`, {
      secure: true,
      type: "delete",
    })

    console.log("deleteListing -> response", response)
    navigate("/dashboard")
  }

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
                    content: (
                      <Tenants
                        tenants={listing.tenants}
                        listingId={listing.id}
                      />
                    ),
                  },
                ]}
                description={listing.description}
              />
            )}
            <Button
              color="danger"
              icon="trash"
              onClick={() => deleteListing(listing.id)}
            >
              Eliminar
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
