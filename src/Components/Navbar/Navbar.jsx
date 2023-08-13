import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const isAboutPage = location.pathname === '/about' || location.pathname === '/projects';

  const addBorderBottom = isAboutPage ? "border-bottom" : "";

  return (
    <>
    <div className="nav-wrapper">
    <div className={`container navbar ${addBorderBottom} `}>
      <div className="nav-left">
        <h2>Portfolio<span>.</span></h2>
      </div>
      <div className="nav-right">
        <div className="nav-items" style={getMenuStyles(isMenuOpen)}>
        <div className="nav-item">
          <NavLink to={"/"} className="link" onClick={()=>{setIsMenuOpen((prev)=>!prev)}}>HomePage</NavLink>
        </div>

        <div className="nav-item">
          <NavLink className="link" to={"/about"} onClick={()=>{setIsMenuOpen((prev)=>!prev)}}>About</NavLink>
        </div>

        <div className="nav-item">
          <NavLink className="link" to={"/projects"} onClick={()=>{setIsMenuOpen((prev)=>!prev)}}>Projects</NavLink>
        </div>

        <div className="nav-item">
          <Link className="link" 
                to="footer"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} onClick={()=>{setIsMenuOpen((prev)=>!prev)}}>
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
    </>
  );
};

export default Navbar;
