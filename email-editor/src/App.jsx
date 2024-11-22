import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() {
  const [title, setTitle] = useState('Null')
  const [description, setDescription] = useState('')
  const [buttonText, setButtonText] = useState('')
  
  return (
    <div className={styles.layout}>
      <img src='/nature.jpeg' width={400} alt="" />
      
      <Details title={title} setTitle={setTitle} />
    </div>
  )
}