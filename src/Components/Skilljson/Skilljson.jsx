import React from 'react'
import skills from '../../Json/skills.json';
import './Skilljson.css'
const Skilljson = () => {
  return (
    <div className='skills-json'>
        {
            skills.map(({id, skill, src})=>{
                return(
                    <div className='skills-item'  key={id}>
                            <p>{skill}</p>
                            <img className={skill === "Axios" || skill === "jQuery" ? "bc-grey" :""} src={src} alt={skill} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Skilljson
