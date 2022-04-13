import React, { useEffect, useState } from 'react'
import Yui from '../../assets/yui.png'
import Button from '../UI/button/Button'
import TimePicker from 'react-time-picker'
import { BsMouse } from 'react-icons/bs'
import '../UI/button/Button.css'
import './Home.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init()
  },[])
  return (
    <section id="home">
      <div className="container header">
        <div className="header-left" data-aos="zoom-in-up"  data-aos-duration='4000'>
          <h1>
            <span  data-aos="fade-up-right" data-aos-duration='1500'>{}</span>
            <span  data-aos="fade-up-left" data-aos-duration='3500'>HURAAAA HURAAA</span>
            <span  data-aos="fade-up-right" data-aos-duration='1500'>CIHUYYYYYY</span>
          </h1>
          <p className="u-text-small u-text-light" data-aos="zoom-in-up" data-aos-duration='4000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
        <div className="header-cta" data-aos='fade-up' data-aos-duration='2500'>
          <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"}/>
          <Button text={"  Location  "} btnClass={"btn-orange"} href={"https://goo.gl/maps/iEqTQwYU44AV7Jn77"}/>
        </div>
      </div>
        <div className="header-right" data-aos="fade-up-left" data-aos-duration="2000">
          <img src={Yui} alt="Phone"/>
        </div>
      </div>
      <div className="floating-icons">
        <a href="#about">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  )
}

export default Home