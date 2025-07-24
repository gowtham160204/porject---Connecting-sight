import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './connect/Login'
import Register from './connect/Register'
import Home from './connect/Home'
import Header from './connect/commen/Header'

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/l' element={<Login/>}></Route>
      <Route path='/r' element={<Register/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/h' element={<Header/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
