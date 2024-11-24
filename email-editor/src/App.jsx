import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title: 'useEffect',
    description: 'Hello, world',
    buttonText: 'Click'
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails(prev => ({...prev, isLoading: false}))
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    setDetails(prev => ({...prev, description: 'title has changed'}) )
  }, [details.title])

  const imageRef = useRef(null)

  const onClick = () => {
    if (!imageRef.current) return
    imageRef.current.style.borderRadius = '20px'
    imageRef.current.style.boxShadow = '0 3px 6px rgba(0, 0, 0, .1)'
  }

  return (
    <div className={styles.layout}>
      <img ref={imageRef} src='/nature.jpeg' width={400} alt="" />

      <button onClick={onClick}>ChangeImage</button>

      {details.isLoading ? (<p>Loading...</p>) : (
        <Details details={details} setDetails={setDetails} />
      )}
    </div>
  )
}