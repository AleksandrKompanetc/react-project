import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.css'

export function EmailEditor() {
  return (
    <>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Hey!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis, non explicabo, dolore alias sit inventore aperiam
          numquam consequuntur voluptatum soluta omnis! Corporis.
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button className='button'><Eraser size={17} /></button>
            <button className='button'><Bold size={17} /></button>
            <button className='button'><Italic size={17} /></button>
            <button className='button'><Underline size={17} /></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </>
  )
}


// import { useState, useEffect } from 'react'
// import { AuthContext } from './AuthContext'
// import styles from './App.module.scss'
// import { Header } from "./Header"
// import { useAuth } from './hooks/useAuth'
// import { Linter } from 'eslint'
// import { ITodo } from './types'

// export function App() {
//   const {isLoggedIn, setIsLoggedIn} = useAuth()
//   const [todos, setTodos] = useState<ITodo[]>([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//       const data = await response.json()
//       setTodos(data)
//     }
//     fetchData()
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json)
//     .then(json => {
//       setTodos(json)
//     })
//   }, [])

//   return (
//     <div className={styles.layout}>
//       <ul>
//         {todos?.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   <div className={styles.layout}>

//     <Header />

//     {isLoggedIn ? (
//       <button onClick={() => setIsLoggedIn(false)}>Exit from system</button>
//     ) : (
//       <button onClick={() => setIsLoggedIn(true)}>Enter</button>
//     )}
//   </div>
//   )
// }

// import { useEffect, useState, useRef, useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import styles from './App.module.scss'
// import { Details } from './Details'

// export function App() {
//   const [details, setDetails] = useState({
//     isLoading: true,
//     title: 'useEffect',
//     description: 'Hello, world',
//     buttonText: 'Click'
//   })

//   const [count, setCount] = useState(0)
//   const [multiplier, setMultiplier] = useState(10)

//   const result = useMemo(() => {
//     return count * multiplier 
//   }, [])

//   const handleLoading = useCallback(() => {
//     setDetails(prev => ({ ...prev, isLoading: !prev.isLoading }))
//   }, [])

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDetails(prev => ({...prev, isLoading: false}))
//     }, 2000)
//     return () => {
//       clearTimeout(timeout)
//     }
//   }, [])

//   useEffect(() => {
//     setDetails(prev => ({...prev, description: 'title has changed'}) )
//   }, [details.title])

//   const imageRef = useRef(null)

//   const onClick = () => {
//     if (!imageRef.current) return
//     imageRef.current.style.borderRadius = '20px'
//     imageRef.current.style.boxShadow = '0 3px 6px rgba(0, 0, 0, .1)'
//   }

//   return (
//     <div className={styles.layout}>
//       <img src='/nature.jpeg' width={400} alt="" />

//       <div>Resultat: {Result}</div>

//       <button onClick={() => setCount(count + 1)}>Add counter</button>
//       <button onClick={() => setMultiplier(multiplier + 10)}>Add multyply</button>

//       {details.isLoading && <p>Loading...</p> }

//       <Details
//         details={details}
//         handleLoading={handleLoading}
//       />
//     </div>
//   )
// }