import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'

const isAuth = false

export function App() {
  return (
    <div className={styles.layout}>
      <img src='/nature.jpeg' width={400} alt="" />
      <h1>First component</h1>
      <div>Hello, world!</div>
      <button>Click</button>
    </div>
  )
}