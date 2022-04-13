import { FaTiktok, FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa'
import React, { useEffect } from 'react'
import AOS from 'aos'
import './SocialMedia.css'


const SocialMedia = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  })

return (
    <section id="social-media" className='subscribe'>
      <h2 data-aos='fade-down'data-aos-duration='3000' >Social Media</h2>
      <p className="u-text-small title" data-aos='zoom-in' data-aos-duration='3000'>Jangan Lupa Di Follow gesss dan subrekkk Karena Kita Akan Update trs di Social Media kitaa</p>
      <div className="social-icons">
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='1000'>
          <a className="youtube" href="https://www.youtube.com/channel/UCXBG1oiX-c11QdkL1v-_KUA/featured"><FaYoutube /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='1500'>
          <a className="tiktok" href="https://www.instagram.com/real.jounny/"><FaTiktok /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='2000'>
          <a className="spotify" href="https://open.spotify.com/episode/1jeXHVfLGzawDAlDBl9TWK?si=DBwbdQiVQc-dBfl4c9zJKg&utm_source=copy-link"><FaSpotify /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='2500'>
          <a className="instagram" href="https://www.instagram.com/osissmapione_/"><FaInstagram /></a>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia