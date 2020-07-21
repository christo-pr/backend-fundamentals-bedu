import React from "react"

import { Site, Page, Profile, Button } from "tabler-react"

export const Tenant = (props) => {
  const { id } = props

  return (
    <>
      <Site.Header />
      <Page.Content
        subTitle={
          <Button color="dark" icon="arrow-left">
            Regresar
          </Button>
        }
      >
        <Profile
          name="test"
          avatarURL="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          bio="testadfasdfa"
        />
      </Page.Content>
    </>
  )
}
