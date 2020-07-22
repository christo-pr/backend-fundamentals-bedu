const TOKEN_KEY = "jwt-token"
const USER_KEY = "hm_user"

/**
 * This object will act like a Singleton for the
 * localStorage API.
 */
export const storage = {
  // Token
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY) || ""
  },
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token)
  },
  getUser: () => {
    return localStorage.getItem(USER_KEY) || ""
  },
  setUser: (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
  reset: () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  },
}
