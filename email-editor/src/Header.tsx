import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useAuth } from "./hooks/useAuth"

export function Header() {
  const {isLoggedIn} = useAuth()
  return <h1>{isLoggedIn ? 'Hello, Aleksandr' : 'Please, Enter'}</h1>
}