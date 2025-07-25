import React from 'react'
import imag from '../assets/imgs/IMG_20250701_194418.png'
import '../assets css/Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home-body' id='home'>
        <div className='home-header'>
                <ul>
                    <Link to='/'><img src={imag} className='logo-icon'></img></Link>
                    <Link to='/connect'>Connect</Link>
                    <Link to='/Mynetwork'>Mynetworks</Link>
                    <Link to='/Job'>Job</Link>
                    <Link to='/messages'>message</Link>
                    <Link to='/notifications'>notification</Link>
                    <Link to='/myself'>Me</Link>
                    <Link to='/forbusiness'>For Business</Link>
                    <Link to='/paymentpage'>Try Premium for Rs.0</Link>
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
            <div className='oudh'></div>

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
