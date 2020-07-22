import React, { useState, useEffect } from "react"
import { Site, Page, Grid, Button, Form } from "tabler-react"
import { Link } from "@reach/router"

import { request } from "../utils/request"

export const ListingCreate = (props) => {
  const { navigate } = props
  const [listing, setListing] = useState({})

  const updateListing = (e) => {
    setListing({ ...listing, [e.target.name]: e.target.value })
  }

  const createListing = async (e) => {
    e.preventDefault()

    const response = await request("/listings", {
      secure: true,
      type: "post",
      body: listing,
    })

    if (response.success) {
      setListing({})
      navigate("/dashboard")
    }
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
            <Form onSubmit={createListing}>
              <Form.Input
                onChange={updateListing}
                name="name"
                label="Nombre"
                placeholder="Nombre del inmueble"
              />
              <Form.Input
                onChange={updateListing}
                name="description"
                label="Descripcion"
                placeholder="Descripcion..."
              />
              <Form.Input
                onChange={updateListing}
                name="address"
                label="Ubicacion"
                placeholder="Ingresa la ubicacion"
              />
              <Form.Input
                onChange={updateListing}
                name="price"
                label="Renta mensual"
                placeholder="$4000"
              />
              <Form.Input
                onChange={updateListing}
                name="maxAllow"
                label="Ocupantes maximos"
                placeholder="Limite de inquilinos"
              />
              <Form.Input
                onChange={updateListing}
                name="payDate"
                label="Fecha de pago"
                placeholder="1ro de cada mes"
              />
              <Button type="submit">Guardar</Button>
            </Form>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
