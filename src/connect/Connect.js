import React, { useEffect } from 'react'
import Header from './commen/Header'
import '../assets css/Home.scss'
import { ToastContainer, toast } from 'react-toastify';

function Connect() {
  useEffect(() => {
    toast.success("user id  :")
    toast.success("password :")
    toast.warn("Please connect to the server")
    toast.error("Please wait for the server to respond")
    console.log("hello MG")

  },[])
  return (
    <div className='Ho-body'>
      <div className='home-header'>
                <Header/>
                
        </div>
      <h1>Connect</h1>
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

export default Connect
