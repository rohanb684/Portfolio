import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll';
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getMenuStyles = (isMenuOpen)=>{
    if(document.documentElement.clientWidth <=800)
    {
      return {right: !isMenuOpen && "-100%"}
    }
  }

  return (
    <>
    <div className="nav-wrapper">
    <div className="container navbar">
      <div className="nav-left">
        <h2>Portfolio<span>.</span></h2>
      </div>
      <div className="nav-right">
        <div className="nav-items" style={getMenuStyles(isMenuOpen)}>
        <div className="nav-item">
          <NavLink to={"/"} className="link">HomePage</NavLink>
        </div>

        <div className="nav-item">
          <NavLink className="link" to={"/about"}>About</NavLink>
        </div>

        <div className="nav-item">
          <NavLink className="link" to={"/projects"}>Projects</NavLink>
        </div>

        <div className="nav-item">
          <Link className="link" 
                to="footer"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}>
            Contact
          </Link>
        </div>
        </div>
        <div className='nav-mobile-icon' >
          <FiMenu className={`menu-icon ${isMenuOpen ? "hide" : ""}` } onClick={()=>{setIsMenuOpen((prev)=>!prev)}} />
          <AiOutlineCloseCircle className={`close-icon ${isMenuOpen ? "active" : ""}` } onClick={()=>{setIsMenuOpen((prev)=>!prev)}}/>
        </div>
      </div>
    </div>
    </div>
    {/* <div className={`nav-mobile-menu ${isMenuOpen ? "active" : ""}`}>
            <div className="nav-mobile-item"><NavLink className="link">Home</NavLink></div>
            <div className="nav-mobile-item"><NavLink className="link">About</NavLink></div>
            <div className="nav-mobile-item"><NavLink className="link">Projects</NavLink></div>
            <div className="nav-mobile-item"><NavLink className="link">Contact</NavLink></div>
        </div> */}
    </>
  );
};

export default Navbar;
