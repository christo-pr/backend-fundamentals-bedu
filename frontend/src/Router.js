import React from "react"
import { Router } from "@reach/router"
import { Error404Page } from "tabler-react"

import { Dashboard, Listing, Tenant, Login, Register } from "./pages"

export const Routes = () => {
  return (
    <Router>
      <Login path="/" />
      <Register path="/register" />
      <Dashboard path="dashboard" />
      <Listing path="dashboard" />
      <Tenant path="dashboard" />
      <Error404Page default />
    </Router>
  )
}
