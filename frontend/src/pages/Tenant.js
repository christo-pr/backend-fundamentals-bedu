import React, { useEffect, useState } from "react"
import { Link } from "@reach/router"
import { Site, Page, Profile, Button, Loader } from "tabler-react"

import { request } from "../utils/request"

export const Tenant = (props) => {
  const { id } = props
  console.log("Tenant -> id", id)
  const [tenant, setTenant] = useState({})

  useEffect(() => {
    async function fetchTenant() {
      const response = await request(`/tenants/${id}`, { secure: true })

      setTenant(response)
    }

    fetchTenant()
  }, [id])

  return (
    <>
      <Site.Header />
      <Page.Content
        subTitle={
          <Button color="dark" icon="arrow-left">
            <Link to="/dashboard">Regresar</Link>
          </Button>
        }
      >
        {Object.keys(tenant).length ? (
          <Profile
            name={tenant.name}
            avatarURL="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
            bio={tenant.email}
          />
        ) : (
          <Loader />
        )}
      </Page.Content>
    </>
  )
}
