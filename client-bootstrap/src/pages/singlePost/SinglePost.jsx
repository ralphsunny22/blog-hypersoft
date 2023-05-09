import React, { useEffect, useRef, useState } from 'react'
import "./singlePost.scss"
import { Container, Row, Col } from 'react-bootstrap';
import Show from "../../img/show.jpg"
import ShowSide from "../../img/showsmall.jpg"
import Author from "../../img/author.jpg"
import PopularPost from "../../img/popularposts.jpg"
import { BsDot, BsFillCheckCircleFill } from 'react-icons/bs';




const SinglePost = () => {
  

  return (

    
    
    <div className='singlePost'>

    <Container>
      <Row>
        <Col xs={12} md={12}>
          
         
            <div className="content">
                <div className="info mb-3">
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, amet.</h4>
                    <p>What young Nigerians need to know</p>

                    <div className="author-brief d-flex align-items-center">
                    <img src={Author} alt="" />
                    <span>Michellie Jones <BsFillCheckCircleFill className='active' /> <BsDot/> Mar 6 <BsDot/></span>
                    <span>Travel, Culture, Lifestyle</span> <BsDot/>
                    <span>7 min read</span>
                    </div>
                    
                </div>
                <div className="image mb-3">
                  <img src={Show} alt="" className='rounded' />
                </div>

                <div>
                    <p>
                        Is post each that just leaf no. He connection interested so we an sympathize advantages. To said is it shed want do. Occasional middletons everything so to.
                        Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he.
                        Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined.
                    </p>
                </div>

                <div className="comment-section mx-auto">
                    <div className="inner card border shadow p-3 bg-white rounded">
                        <h4>Leave your reply</h4>
                        <i>Your email will not be published. Required fields are marked <sup className='text-danger'>*</sup></i>
                        <form action="">
                            <Row>
                                <Col xs={12} md={12}>
                                    <div className="comment form-group">
                                        <label htmlFor="reply">Comment</label>
                                        <textarea name="reply" id="" cols="30" rows="5" className='form-control'></textarea>
                                    </div>
                                </Col>
                            
                                <Col xs={12} md={6} className='mt-3'>
                                    <div className="name form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className='form-control' />
                                    </div>
                                </Col>

                                <Col xs={12} md={6} className='mt-3'>
                                    <div className="name form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className='form-control' />
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
                    
                
            </div>
          

          
        </Col>

      </Row>
    </Container>

      

    </div>
  )
}

export default SinglePost