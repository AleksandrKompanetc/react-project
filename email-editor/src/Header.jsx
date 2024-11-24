export function Header() {
  return <h1>{isLoggedIn ? 'Hello, Aleksandr' : 'Please, Enter'}</h1>
}