import { useEffect } from "react"
import { storage } from "../utils/storage"

export const Logout = (props) => {
  const { navigate } = props
  useEffect(() => {
    storage.reset()
    navigate("/")
  }, [])

  return null
}
