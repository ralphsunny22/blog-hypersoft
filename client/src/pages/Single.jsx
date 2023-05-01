import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../img/avatar.jpg"
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://gwammu.com/assets/featured_images/27545.jpeg" alt="" />
        <div className="user">
          <img src={Avatar} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet accusantium blanditiis tempora et reiciendis magni modi, numquam ab corporis,
          fuga veniam, pariatur sapiente ducimus. Qui ipsum commodi explicabo voluptate non.
        </h1>
        <p>
        Dolor sit amet consectetur adipisicing elit. Eveniet accusantium blanditiis tempora et reiciendis magni modi, numquam ab corporis,
        fuga veniam, pariatur sapiente ducimus. Qui ipsum commodi explicabo voluptate non. Dolor sit amet consectetur adipisicing elit. Eveniet accusantium blanditiis tempora et reiciendis magni modi, numquam ab corporis,
        fuga veniam, pariatur sapiente ducimus. Qui ipsum commodi explicabo voluptate non.

        Aolor sit amet consectetur adipisicing elit. Eveniet accusantium blanditiis tempora et reiciendis magni modi, numquam ab corporis,
        fuga veniam, pariatur sapiente ducimus. Qui ipsum commodi explicabo voluptate non
        </p>

      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single