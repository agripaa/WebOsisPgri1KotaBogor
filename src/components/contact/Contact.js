import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import Button from '../UI/button/Button'
import './Contact.css'


const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  // const [salah, setSalah] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_jounny', 'template_2bn45km', formRef.current, 'UYCKvhfSpH8j3ZHnE')
    .then((result) => {
          console.log("result =>", result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
 <section className="c" id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper container">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              +62 123 456 78
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="email" />
              osispgri@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="location" />
              JALAN BINA MARGA I NO. 17 BOGOR
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>ada pertanyaan / saran?</b> Langsung isis saja form dibawah ini ya brader
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nama Anda..." name="user_name"  />
            <br/>
            <input type="text" placeholder="Subject..." name="user_subject"  />
            <br/>
            <input type="text" placeholder="Email Anda..." name="user_email" />
            <textarea  rows="5" placeholder="Ketik Pesan Anda..." name="message"  />
            <button className="btn btn-orange">Submit</button>
            {done && "Submited!"}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact