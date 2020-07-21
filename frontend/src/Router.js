import React from "react"
import { LoginPage, RegisterPage } from "tabler-react"

import { Dashboard, Listing, Tenant } from "./pages"

export default {
  "/": () => <LoginPage />,
  "/register": () => <RegisterPage />,
  "/dashboard": () => <Dashboard />,
  "/listing/:id": ({ id }) => <Listing id={id} />,
  "/tenant/:id": ({ id }) => <Tenant id={id} />,
}
