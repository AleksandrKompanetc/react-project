import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export function Header() {
  const {isLoggedIn} = useContext(AuthContext)
  return <h1>{isLoggedIn ? 'Hello, Aleksandr' : 'Please, Enter'}</h1>
}