import React from "react"

import { Dashboard, Listing, Tenant, Login, Register } from "./pages"

export default {
  "/": () => <Login />,
  "/register": () => <Register />,
  "/dashboard": () => <Dashboard />,
  "/listing/:id": ({ id }) => <Listing id={id} />,
  "/tenant/:id": ({ id }) => <Tenant id={id} />,
}
