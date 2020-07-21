import React from "react"
import { useRoutes } from "hookrouter"
import "tabler-react/dist/Tabler.css"

import { Error404Page } from "tabler-react"

import "./App.css"
import Routes from "./Router"

function App() {
  const routes = useRoutes(Routes)
  return routes || <Error404Page />
}

export default App
