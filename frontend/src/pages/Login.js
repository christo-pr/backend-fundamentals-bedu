import React, { useState } from "react"
import { LoginPage } from "tabler-react"
import { navigate } from "@reach/router"

import { request } from "../utils/request"
import { storage } from "../utils/storage"

export const Login = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" })

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await request("/auth/login", {
      type: "post",
      body: authData,
    })

    if (!response.message) {
      storage.setToken(response.token)
      storage.setUser(response.user)

      navigate("dashboard")
    } else {
      alert(response.message)
    }
  }

  const handleInputChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  return (
    <LoginPage
      values={authData}
      onSubmit={handleLogin}
      onChange={handleInputChange}
    />
  )
}
