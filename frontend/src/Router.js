import React from "react"
import { Router } from "@reach/router"
import { Error404Page } from "tabler-react"

import {
  Dashboard,
  Listing,
  Tenant,
  Login,
  Register,
  Logout,
  ListingCreate,
} from "./pages"

export const Routes = () => {
  return (
    <Router>
      <Login path="/" />
      <Logout path="/logout" />
      <Register path="register" />
      <Dashboard path="dashboard" />
      <Listing path="listing/:id" />
      <ListingCreate path="listing/new" />
      <Tenant path="tenant/:id" />
      <Error404Page default />
    </Router>
  )
}
