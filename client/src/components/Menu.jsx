import React from 'react'

const Menu = () => {

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