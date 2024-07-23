import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Navbar.jsx'
import View from './View.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <View />
    
    </>
  )
}

export default App
