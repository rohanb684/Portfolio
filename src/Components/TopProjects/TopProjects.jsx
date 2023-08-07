import React from 'react'
import './TopProjects.css'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'
import data from '../../Json/topProjects.json'

const TopProjects = () => {

  return (
    <div className='top-projects'>
      <div className="top-projects--header">
        <p>Top Projects</p>
      </div>
      <div className="cards">
        {data.map((item)=>{
           return <Card key={item.id} title={item.title} image={item.image} description={item.description} link={item.link} />
        })}
      </div>
      <div className="button">
      <button className='btn'><NavLink className="link" to={"/projects"}>View All</NavLink></button>
      </div>
    </div>
  )
}

export default TopProjects
