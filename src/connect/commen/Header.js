import React from 'react'
import '../../assets css/Header.scss'


function Header(props) {
  return (
      <div className='Home-body' id='home'>
        <div className='home-header'>
                <ul>
                    {/* <a href="#home"><Link to='/'><img src={imag} className='logo-icon'></img></Link></a> */}
                    <a href="">connect</a>
                    <a href="">My network</a>
                    <a href="">Jobs</a>
                    <a href="">messaging</a>
                    <a href="">Notification</a>
                    <a href="">Me</a>
                    <a href="">For Business</a>
                    <a href="" className='try'>Try Premium for Rs.0</a>
                </ul>
        </div>
       </div>
  )
}

export default Header
