import React, { useEffect, useState } from 'react'
import axios from "axios"


const Menu = ({cat}) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
    
  }, [cat])

  console.log(posts)
    

  return (
    <div className='menu'>
        <h1>You might also like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu