import React, { useState, useEffect } from "react"
import { Site, Page, Grid, Button, Form } from "tabler-react"
import { Link } from "@reach/router"

import { request } from "../utils/request"

export const TenantCreate = (props) => {
  const { navigate, listingId } = props
  const [tenant, setTenant] = useState({})

  const updateTenant = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value })
  }

  const createTenant = async (e) => {
    e.preventDefault()

    const response = await request("/tenants", {
      secure: true,
      type: "post",
      body: { ...tenant, listingId: listingId },
    })

    if (response.success) {
      setTenant({})
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
            <Form onSubmit={createTenant}>
              <Form.Input
                onChange={updateTenant}
                name="name"
                label="Nombre"
                placeholder="Nombre del inquilino"
              />
              <Form.Input
                onChange={updateTenant}
                name="email"
                label="Correo Electronico"
                placeholder="corre@example.com"
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
