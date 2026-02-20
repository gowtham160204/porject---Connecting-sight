import React from 'react'
import '../../assets css/Header.scss'
import { Link } from 'react-router-dom'
import imag from '../../assets/imgs/IMG_20250701_194418.png'

function Header() {
  return (
      

         <ul>
                    <Link to='/home'><img src={imag} className='logo-icon'></img></Link>
                    <Link to='/connect'><a>Connect</a></Link> 
                    <Link to='/Mynetwork'><a>My Networks</a></Link>
                    <Link to='/Job'><a>Job</a></Link>
                    <Link to='/messages'><a>Message</a></Link>
                    <Link to='/notifications'><a>Notification</a></Link>
                    <Link to='/myself'><a>Me</a></Link>
                    <Link to='/forbusiness'><a>For Business</a></Link>
                    <Link to='/payment'><a className='try'>Try Premium for Rs.0</a></Link>
                    <Link to='/' color='red'><a>logout</a></Link>
          </ul>
      
       
  )
}

export default Header
