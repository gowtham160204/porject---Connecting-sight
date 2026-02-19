import React, { useEffect, useState } from 'react'
import imag from '../assets/imgs/IMG_20250701_194418.png'
import '../assets css/Home.scss'
import Header from './commen/Header'
import { Link } from 'react-router-dom'
import Data from './Data'
import Dataalign from './Dataalign'

function Home() {

  return (
    <div className='Ho-body' id='home'>
        <div className='home-header'>
                <Header/>
        </div>
        

        <div className='home-section' id='home'>
          <div className='home-profile'>
            <h3 className='bold'>Profile</h3>
            <p>gowtham</p>
            <p>Web Developer | Java Full stack Developer | Spring Boot | Mysql | Core Java | Post man</p>
            <p><strong>Skills:</strong>
                Web Developer | Java | Spring Boot | MySQL | React | Core Java | Postman
            </p>
            <p><strong>Email:</strong> gowthampc360@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gowtham-m-5a1a50291">View Profile</a></p>
          </div>

          <div className='home-content'>
            <h3 className='bold'>Home content</h3>
            <p>the table that is used to enhance the data is used to connect the data</p>
            <p>i am gowtham i am gkowtham i am gowtham </p>
            <h2>I am gowtham full stack developer</h2>
            <div className='oudh'></div>
            <Data/>
            

          </div>
          <div className='home-news'>
            <h3 className='bold'>News updates</h3>
            <p>India's defence has been bolstered by addition mig-25k by getting it from US Military base</p>
            <div className=''>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
