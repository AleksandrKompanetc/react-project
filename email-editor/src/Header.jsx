export function Header({isLoggedIn}) {
  return <h1>{isLoggedIn ? 'Hello, Aleksandr' : 'Please, Enter'}</h1>
}