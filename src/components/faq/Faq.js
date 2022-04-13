import { MdOutlineLibraryBooks } from 'react-icons/md'
import React, { useEffect } from 'react'
import Question from './Question'
import { question } from './data'
import AOS from 'aos'

const Faq = () => {
  useEffect(() => {
    AOS.init({
      once: false
    })
  })

  return (
    <section id='faq'>
      <div className="container faq">
        <div className='u-title' data-aos="zoom-in-down">
        <MdOutlineLibraryBooks color="orangered" size={30}/>
          <h2 data-aos='fade-down'>FaQ</h2>
          <p className='u-text-small u-text-dark' data-aos='fade-up'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto 
          </p>
        </div>
        <div className='questions' data-aos="zoom-in-right">
          {
            question.map((question) => (
              <Question title={question.title} answer={question.answer}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Faq