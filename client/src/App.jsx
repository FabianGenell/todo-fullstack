<<<<<<< HEAD
import React from 'react'
import './App.css'
import TaskListContainer from './components/pages/todo-list/TaskList'
//https://dribbble.com/shots/15185058-Collection-Tasks
//https://dribbble.com/shots/16819021-Task-management-app-My-tasks

export default function App() {

  return (
    <div className="App">
      <TaskListContainer />
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 727bc29d3776c043fa8d30e873ff7c050f795fa0
    </div>
  )
}

<<<<<<< HEAD
=======
export default App
>>>>>>> 727bc29d3776c043fa8d30e873ff7c050f795fa0
