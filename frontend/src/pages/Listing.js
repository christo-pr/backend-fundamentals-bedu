import React from "react"
import { Site, Page, Grid, ContactCard, List, Button } from "tabler-react"

const Tenants = (props) => {
  const { tenants } = props

  return (
    <List.Group>
      <List.GroupItem action icon="user">
        User uno
      </List.GroupItem>
      <List.GroupItem action icon="user">
        User dos
      </List.GroupItem>
    </List.Group>
  )
}

export const Listing = (props) => {
  const { id } = props

  return (
    <>
      <Site.Header />
      <Page.Content
        title="Detalles"
        subTitle={
          <Button color="dark" icon="arrow-left">
            Regresar
          </Button>
        }
      >
        <Grid.Row cards deck>
          <Grid.Col md={12}>
            <br />
            <ContactCard
              cardTitle="Client card"
              mapPlaceholder="https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg"
              rounded
              alt="Generic placeholder image"
              address={{
                line1: "1290 Avenua of The Americas",
                line2: "New York, NY 101040105",
              }}
              details={[
                { title: "Price", content: "$1200 por mes" },
                { title: "Maximos permitidos", content: "2" },
                {
                  title: "Fecha de pago",
                  content: "10 de cada mes",
                },
                {
                  title: "Inquilinos",
                  content: <Tenants tenants={id} />,
                },
              ]}
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
   Consectetur dignissimos doloribus eum fugiat itaque
  laboriosam maiores nisi nostrum perspiciatis vero.`}
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <Site.Footer />
    </>
  )
}
