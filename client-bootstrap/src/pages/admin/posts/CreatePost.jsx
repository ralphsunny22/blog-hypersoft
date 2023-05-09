import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./createPost.scss"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BsPlusCircle } from 'react-icons/bs';
import CategoryModal from '../../../components/modal/CategoryModal';
// import axios from 'axios'

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='createPost'>
        <div className="content">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="mx-auto">
                            <div className="inner card border shadow p-3 bg-white rounded">
                                <h4>Create Post</h4>
                                <form action="">
                                    <Row>
                                        <Col xs={12} md={12}>
                                            <div className="comment form-group">
                                                <label htmlFor="title">Post Title</label>
                                                <input type="text" name="title" id="title" className='form-control' />
                                            </div>
                                        </Col>
                                    
                                        <Col xs={12} md={12} className='mt-3'>
                                            <div className="name form-group">
                                                <label htmlFor="name">Description</label>
                                                <div className="editorContainer">
                                                    <ReactQuill className='editor' theme="snow" />
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={12} className='mt-4'>
                                            <div className="form-group text-center">
                                                <button className='btn btn-primary w-50'>Post Comment</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='menu'>
                            <div className="item card border shadow bg-white rounded">
                                <h4>Publish</h4>
                                
                                <div className='d-flex' style={{gap:"5px"}}>
                                    <div><b>Status:</b> </div>
                                    <div className='category'>
                                        <input type="radio" name="status" value="draft" id="draft" />
                                        <label htmlFor="draft">Draft</label>
                                    </div>
                                    <div className='category'>
                                        <input type="radio" name="status" value="completed" id="completed" />
                                        <label htmlFor="completed">Completed</label>
                                    </div>
                                </div>

                                <div className='d-flex' style={{gap:"5px"}}>
                                    <div><b>Visibility:</b> </div>
                                    <div className='category'>
                                        <input type="radio" name="visibility" value="public" id="public" />
                                        <label htmlFor="public">Public</label>
                                    </div>
                                    <div className='category'>
                                        <input type="radio" name="visibility" value="private" id="private" />
                                        <label htmlFor="private">Private</label>
                                    </div>
                                </div>

                                <input style={{display:"none"}} type="file" name="" id="file" />
                                <label className='file' htmlFor="file">Upload Image</label>
                                <div className="buttons mt-3">
                                    <button className='w-50'>Publish</button>
                                </div>
                            </div>
                            <div className="item card border shadow bg-white rounded">

                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>Category</h4>
                                    
                                    <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
                                        <BsPlusCircle className='bg-primary rounded-circle text-white'/>
                                    </div>
                                </div>
                                
                                <div className='category'><input type="checkbox" name="cat" value="art" id="art" />
                                <label htmlFor="art">ART</label></div>
                                
                                <div className='category'><input type="checkbox" name="cat" value="food" id="food" />
                                <label htmlFor="food">FOOD</label></div>

                                <div className='category'><input type="checkbox" name="cat" value="technology" id="technology" />
                                <label htmlFor="technology">TECHNOLOGY</label></div>

                                <div className='category'><input type="checkbox" name="cat" value="health" id="health" />
                                <label htmlFor="health">HEALTH</label></div>

                                <div className='category'><input type="checkbox" name="cat" value="science" id="science" />
                                <label htmlFor="science">SCIENCE</label></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {isOpen && <CategoryModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default CreatePost