import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Avatar from "../img/avatar.jpg"
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import Menu from '../components/Menu'
import moment from "moment"
import { AuthContext } from '../context/authContext'

const Single = () => {
  const {currentUser, logout} = useContext(AuthContext)
  const [post, setPost] = useState({})

  const location = useLocation()
  const postId = location.pathname.split('/')[2]

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
    
  }, [postId])

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/posts/${postId}`)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          { post.userImg &&
            <img src={post.userImg} alt="" />
          }
          
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {
            currentUser.username === post.username ?
            <div className='edit'>
            <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
            <img src={Delete} alt="" onClick={handleDelete} />
          </div> : <></> 
          }
          
        </div>
        <h1>{post.title}</h1>
        <div>
          {post.desc}
        </div>

      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single