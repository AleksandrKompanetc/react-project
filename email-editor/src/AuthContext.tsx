import { createContext } from "react";


export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: null
})

export const AuthProvider = ({children}) => {
  {children}
}