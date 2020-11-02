// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

let CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  let value = [count, setCount] 
  return <CountContext.Provider value={value} {...props} />
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = React.useContext(CountContext)
  
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
