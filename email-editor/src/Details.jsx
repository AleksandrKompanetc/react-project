export function Details({details, handleLoading}) {
  return (
    <div>
      <h1>{details.title}</h1>
      <div>{details.description}</div>
      <button onClick={handleLoading}>{details.buttonText}</button>
    </div>
  )
}