import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Avatar from "../img/avatar.jpg"
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import Menu from '../components/Menu'
import moment from "moment"
import { AuthContext } from '../context/authContext'
import { convert } from 'html-to-text'

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
  
  if (!post) {
    return <div>Loading...</div>; // Render a loading state when post is null
  }

  const { img, userImg, username, date, title, desc, cat } = post;

  // const renderUserInfo = () => (
  //   <div className="user">
  //     {userImg && <img src={userImg} alt="" />}
  //     <div className="info">
  //       <span>{username}</span>
  //       <p>Posted {moment(date).fromNow()}</p>
  //     </div>
  //   </div>
  // );
  //escape html tags from richText

  // const options = {
  //   wordwrap: 130,
  // };
  // const getText = (html) => {
  //   //const doc = new DOMParser().parseFromString(html, "text/html")
  //   //return doc.body.textContent
  //   return convert(html, options)
  // }

  // const getText1 = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   const nodes = Array.from(doc.body.childNodes);
    
  //   const traverse = (nodes) => {
  //     let text = "";
      
  //     nodes.forEach((node) => {
  //       if (node.nodeType === Node.TEXT_NODE) {
  //         text += node.textContent;
  //       } else {
  //         const tagName = node.tagName.toLowerCase();
          
  //         if (node.childNodes.length > 0) {
  //           const childText = traverse(Array.from(node.childNodes));
  //           text += `<${tagName}>${childText}</${tagName}>`;
  //         } else {
  //           text += `<${tagName}></${tagName}>`;
  //         }
  //       }
  //     });
      
  //     return text;
  //   };
    
  //   return traverse(nodes);
  // };

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   const nodes = Array.from(doc.body.childNodes);
  
  //   const traverse = (nodes) => {
  //     let text = "";
  
  //     nodes.forEach((node) => {
  //       if (node.nodeType === Node.TEXT_NODE) {
  //         text += node.textContent;
  //       } else if (node.nodeType === Node.ELEMENT_NODE) {
  //         const tagName = node.tagName.toLowerCase();
  
  //         if (tagName === "strong" || tagName === "em") {
  //           text += `<${tagName}>${traverse(Array.from(node.childNodes))}</${tagName}>`;
  //         } else {
  //           text += traverse(Array.from(node.childNodes));
  //         }
  //       }
  //     });
  
  //     return text;
  //   };
  
  //   return traverse(nodes);
  // };
  
  
  
  return (
    <>
      <div className='single'>
        <div className="content">
          <img src={`../uploads/${img}`} alt="" />
          
          <div className="user">
            {userImg && <img src={userImg} alt="" />}

            <div className="info">
              <span>{username}</span>
              <p>Posted {post && moment(date).fromNow()}</p>
            </div>

            {currentUser && currentUser.username === username && (
              <div className='edit'>
                <Link to={`/write?edit=2`} state={post}>
                  <img src={Edit} alt="" />
                </Link>
                <img src={Delete} alt="" onClick={handleDelete} />
              </div>
            )}
          </div>

          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: desc}} />
        </div>
        <div className="menu">
          <Menu cat={cat} />
        </div>
      </div>
    </>
  )
}

export default Single