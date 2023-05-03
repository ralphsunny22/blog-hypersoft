import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Write = () => {
  const {currentUser} = useContext(AuthContext)
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');
  
  //console.log(currentUser.token)
  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await axios.post("http://localhost:5000/api/upload", formData)
      // console.log(res.data)
      return res.data
    } catch (error) {
      
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${currentUser.token}`
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()
    try {
      state 
        ? await axios.put(`http://localhost:5000/api/posts/${state.id}`, {
            title,
            desc:value,
            cat,
            img:file ? imgUrl : ""
          }, config)
        : await axios.post("http://localhost:5000/api/posts", {
            title,
            desc:value,
            cat,
            img:file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
          }, config)  
    } catch (error) {
      
    }
  }

  return (
    <div className='write-page'>
      <div className="content">
        <input type="text" name="" id="" value={title} placeholder='title' onChange={e=>setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className='category'><input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e=>setCat(e.target.value)} />
          <label htmlFor="art">ART</label></div>
          
          <div className='category'><input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)} />
          <label htmlFor="food">FOOD</label></div>

          <div className='category'><input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)} />
          <label htmlFor="technology">TECHNOLOGY</label></div>

          <div className='category'><input type="radio" checked={cat === "health"} name="cat" value="health" id="health" onChange={e=>setCat(e.target.value)} />
          <label htmlFor="health">HEALTH</label></div>

          <div className='category'><input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)} />
          <label htmlFor="science">SCIENCE</label></div>
        </div>
      </div>
    </div>
  )
}

export default Write