import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './connect/Login'
import Register from './connect/Register'
import Home from './connect/Home'
import Header from './connect/commen/Header'
import Connect from './connect/Connect'
import Mynetwork from './connect/Mynetwork'
import Job from './connect/Job'
import Notifications from './connect/Notifications'
import Messages from './connect/Messages'
import Myself from './connect/Myself'
import Business from './connect/Business'
import Trypremium from './connect/Trypremium'
import AdminPageforconnect from './connect/AdminPageforconnect'


function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/connect' element={<Connect/>}></Route>
      <Route path='/mynetwork' element={<Mynetwork/>}></Route>
      <Route path='/Job' element={<Job/>}></Route>
      <Route path='/messages' element={<Messages/>}></Route>
      <Route path='/notifications' element={<Notifications/>}></Route>
      <Route path='/myself' element={<Myself/>}></Route>
      <Route path='/forbusiness' element={<Business/>}></Route>
      <Route path='/payment' element={<Trypremium/>}></Route>
      <Route path='/' element={<AdminPageforconnect/>}></Route>

      </Routes>
      </Router>
    </div>
  )
}

export default App
