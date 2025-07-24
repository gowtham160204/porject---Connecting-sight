import React from 'react'
import imag from '../assets/imgs/IMG_20250701_194418.png'
import '../assets css/Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home-body' id='home'>
        <div className='home-header'>
                <ul>
                    <a href="#home"><Link to='/'><img src={imag} className='logo-icon'></img></Link></a>
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
        <div className='home-section' id='home'>
          <div className='home-profile'>
            <h3>Profile</h3>
            <p>gowtham</p>
            <p>Web Developer | Java Full stack Developer | Spring Boot | Mysql | Core Java | Post man</p>
          </div>
          <div className='home-content'>
            <h3>Home content</h3>
            <p>the table that is used to enhance the data is used to connect the data</p>
             {/* <p>the data is used to  a b c d e f g h i j k l m n o p q r s t u v w x z a b c  a  b c d f e g h i j k l mh n o p q  r s t iu vw sx yz </p>
             <p>abcdefghijklm mn opsqrstucvwxyz</p>
             <p>abcdefghijkl,mnopsqrstucscxvwzy</p>
             <p>abcdefghijklmnopqrstuvwxyz</p>
             <p>abcdefghijklmnopqrstuvwxyz</p>
             <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnop</p> */}
            <p>i am gowtham i am gkowtham i am gowtham </p>
            <h2>I am gowtham full stack developer</h2>
            

          </div>
          <div className='home-news'>
            <h3>News updates</h3>
            <p>India's defence has been bolstered by addition mig-25k by getting it from US Military base</p>
          </div>
        </div>
    </div>
  )
}

export default Home
