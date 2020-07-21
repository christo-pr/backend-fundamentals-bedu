import React from "react"
import { LoginPage, RegisterPage } from "tabler-react"

import { Dashboard, Listing } from "./pages"

export default {
  "/": () => <LoginPage />,
  "/register": () => <RegisterPage />,
  "/dashboard": () => <Dashboard />,
  "/listing/:id": ({ id }) => <Listing id={id} />,
}
