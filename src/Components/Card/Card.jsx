import React from 'react'
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import './Card.css'

const Card = ({title, description, image, link}) => {
  return (
    <div className='card'>
        <div className="image-container">
       <img src={`${image}`}/>
       </div>
            <div className="layer">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={`${link}`} target='/blank'><FaArrowUpRightFromSquare/></a>
            </div>
    </div>
  )
}

export default Card
