import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur.",
      desc: "desc title 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur",
      img: "https://gwammu.com/assets/featured_images/27545.jpeg"
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur.",
      desc: "desc title 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur",
      img: "https://gwammu.com/assets/featured_images/27545.jpeg"
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur.",
      desc: "desc title 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, voluptates, consectetur",
      img: "https://gwammu.com/assets/featured_images/27545.jpeg"
    },
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home