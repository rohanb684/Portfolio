import React, { useState, useEffect } from 'react'
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import './Card.css'

const Card = ({title, description, link}) => {



  return (
    <div className="card">
        <div className="image-container">
       <p className='image-title'>{title}</p>
       </div>
            <div className="layer">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target='_blank'  rel='noopener noreferrer'><FaArrowUpRightFromSquare/></a>
            </div>
    </div>
  )
}

export default Card
