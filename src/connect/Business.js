import React, { useEffect } from 'react'
import '../assets css/Home.scss'
import Header from './commen/Header'
// import AdminPageforconnect from './AdminPageforconnect'

function Business() {
  useEffect(() => {
    
    alert("Admin page for bhuvana ");
  }, []);
  
  return (
    <div className='Ho-body'>
      <div className='home-header'>
                <Header/>
        </div>
      <h1>business page</h1>
      
      
    </div>
  )
}

export default Business
