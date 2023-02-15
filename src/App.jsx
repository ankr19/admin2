import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default App
