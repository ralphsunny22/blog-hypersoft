import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "title 1",
      desc: "desc title 1",
      img: "https://gwammu.com/assets/featured_images/27545.jpeg"
    },
    {
      id: 2,
      title: "title 2",
      desc: "desc title 3",
      img: "https://gwammu.com/assets/featured_images/27545.jpeg"
    },
    {
      id: 3,
      title: "title 3",
      desc: "desc title 3",
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