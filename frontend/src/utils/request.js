import { storage } from "./storage"

const BASE_URL = process.env.REACT_APP_API_URL

/**
 * This function will use fetch to make ajax request.
 * It appends the `path` to the BASE_URL and returns the json response
 * @param {String} path
 * @param {*} options
 */
export const request = (path, options = {}) => {
  const reqOptions = {}
  const headers = new Headers()

  if (
    options.type === "post" ||
    options.type === "put" ||
    options.type === "delete"
  ) {
    reqOptions.method = options.type.toUpperCase()
    headers.append("Content-Type", "application/json")
    reqOptions.body = JSON.stringify(options.body)
  }

  if (options.secure) {
    headers.append("Authorization", `Bearer ${storage.getToken()}`)
  }

  // Set the headers
  reqOptions.headers = headers

  return fetch(BASE_URL + path, reqOptions)
    .then((res) => res.json())
    .catch((e) => e)
}
