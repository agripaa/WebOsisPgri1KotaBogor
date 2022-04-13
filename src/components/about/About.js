import { AiOutlineCopy } from 'react-icons/ai'
import { featureList } from "./data"
import React, { useEffect } from 'react'
import Chika from '../../assets/chika.png'
import Feature from './Feature'
import AOS from 'aos'
import './About.css'
import './Feature.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 300
    })
  }, [])
  
  return (
    <section className='features' id='about'>
      <div className="container features">
        <div className='u-title' data-aos="fade-down" data-aos-duration="2500">
          <AiOutlineCopy color='orangered' size={40}/>
          <h2>About</h2>
          <p className='u-text-small u-text-dark'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto 
            </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={Chika} alt="chika"/>
          </div>
          <div className="features-right" data-aos="fade-left" data-aos-duration="4000">
            {
              featureList.map((feature) => (
                <Feature key={feature.id} icons={feature.icons} heading={feature.heading} text={feature.text}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About