export function Details({title, setTitle}) {
  return (
    <div>
      <h1>{title}</h1>
      <div>Hello, world!</div>
      <button onClick={() => setTitle(prev => prev + "new")}>Click</button>
    </div>
  )
}