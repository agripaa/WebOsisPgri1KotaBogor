import React, {useState, useEffect} from 'react'
import { SiAnaconda } from "react-icons/si"
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"
import Logo from '../../assets/Logo OSIS.png'
import Button from "../UI/button/Button"
import AOS from 'aos'
import "../UI/button/Button.css"
import "./Navbar.css"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    })
  }, [])
  return (
    <nav className="container navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" width="40" height="50" />
            <p className="logo-text">
              OSIS PGRI<span>1</span>
            </p>
        </div>
        <menu>
          <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#social-media">Social Media</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <li className="nav-btn"><a href="#" className='btn btn-dark'>Get Started</a></li> */}
            <li className="nav-btn">
              <Button text={"Questions"} btnClass={"btn-dark"} href={"#faq"}/>
            </li>
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {
            showMenu ? (<RiCloseLine color='#fff' size={30}/>) : (<AiOutlineBars color='#fff' size={27}/>)
          }
        </div>
    </nav>
  )
}

export default Navbar