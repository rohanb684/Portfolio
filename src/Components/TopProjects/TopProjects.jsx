import React, {useState} from 'react'
import './TopProjects.css'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'
import data from '../../Json/topProjects.json'

const TopProjects = () => {


  return (
    <div className='top-projects'>
      <div className="top-projects--header">
        <p>Top 3 Projects</p>
      </div>
      <div className="cards">
        {data.map((item, index)=>{
           return <Card key={item.id} title={item.title}  description={item.description} link={item.link}  />
        })}
      </div>
      <div className="button">
      <button className='btn'><NavLink className="link" to={"/projects"}>View All</NavLink></button>
      </div>
    </div>
  )
}

export default TopProjects
