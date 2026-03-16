import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50">
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </div>
  )
}

export default App
