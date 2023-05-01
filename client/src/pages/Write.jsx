import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  console.log(value)

  return (
    <div className='write-page'>
      <div className="content">
        <input type="text" name="" id="" placeholder='title' />
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
          <input style={{display:"none"}} type="file" name="" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className='category'><input type="radio" name="cat" value="cat1" id="cat1" />
          <label htmlFor="cat1">Category 1</label></div>
          
          <div className='category'><input type="radio" name="cat" value="cat2" id="cat2" />
          <label htmlFor="cat2">Category 2</label></div>

          <div className='category'><input type="radio" name="cat" value="cat3" id="cat3" />
          <label htmlFor="cat3">Category 3</label></div>

          <div className='category'><input type="radio" name="cat" value="cat4" id="cat4" />
          <label htmlFor="cat4">Category 4</label></div>
        </div>
      </div>
    </div>
  )
}

export default Write