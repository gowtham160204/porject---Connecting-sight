import React from 'react'
import '../../assets css/Header.scss'
import { Link } from 'react-router-dom'
import imag from '../../assets/imgs/IMG_20250701_194418.png'

function Header() {
  return (
      

         <ul>
                    <img src={imag} className='logo-icon'/>
                    <Link to='/connect'>Connect</Link> 
                    <Link to='/Mynetwork'>My Networks</Link>
                    <Link to='/Job'>Job</Link>
                    <Link to='/messages'>Message</Link>
                    <Link to='/notifications'>Notification</Link>
                    <Link to='/myself'>Me</Link>
                    <Link to='/forbusiness'>For Business</Link>
                    <Link to='/payment'className='Try'>Try Premium for Rs.0</Link>
                    <Link to='/' color='red'>logout</Link>
          </ul>
      
       
  )
}

export default Header
