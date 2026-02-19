import React from 'react'
import { Link } from 'react-router-dom'
import Header from './commen/Header'
import '../assets css/Home.scss'
import { ToastContainer, toast } from 'react-toastify';


function Login() {
    const notify = () => toast.success('Login');
  return (
    <div className='Ho-body'>Login
      <Link to='/home'> home</Link>
      <button onClick={notify}> red</button>

      <ToastContainer 
              position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  )
}

export default Login
