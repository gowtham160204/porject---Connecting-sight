import React from 'react'
import { Link } from 'react-router-dom'
import Header from './commen/Header'
import '../assets css/Home.scss'

function Login() {
  return (
    <div className='Ho-body'>Login
      <Link to='/home'> home</Link>
    </div>
  )
}

export default Login
