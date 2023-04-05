import { createContext, useState } from "react"

export const UserContext = createContext()

export function ContextWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}
