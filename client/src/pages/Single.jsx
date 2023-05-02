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
  const {currentUser} = useContext(AuthContext)
  const [post, setPost] = useState(null)

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
      //const res = await axios.delete(`http://localhost:5000/api/posts/${postId}`)
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${currentUser.token}` // Include the token in the "Authorization" header
      }
    });
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  console.log(post)
  // console.log(post)

  if (!post) {
    return <div>Loading...</div>; // Render a loading state when post is null
  }

  const { img, userImg, username, date, title, desc } = post;

  // const renderUserInfo = () => (
  //   <div className="user">
  //     {userImg && <img src={userImg} alt="" />}
  //     <div className="info">
  //       <span>{username}</span>
  //       <p>Posted {moment(date).fromNow()}</p>
  //     </div>
  //   </div>
  // );
  
  return (
    <>
      <div className='single'>
        <div className="content">
          <img src={img} alt="" />
          <div className="user">
            {userImg && <img src={userImg} alt="" />}

            <div className="info">
              <span>{username}</span>
              <p>Posted {post && moment(post.date).fromNow()}</p>
            </div>

            {currentUser && currentUser.username === post?.username &&
              <div className='edit'>
                <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
                <img src={Delete} alt="" onClick={handleDelete} />
              </div>
            }
          </div>

          <h1>{title}</h1>
          <div>{desc}</div>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default Single