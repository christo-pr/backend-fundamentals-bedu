import React from "react"
import { LoginPage, RegisterPage } from "tabler-react"

import { Dashboard } from "./pages"

export default {
  "/": () => <LoginPage />,
  "/register": () => <RegisterPage />,
  "/dashboard": () => <Dashboard />,
}
