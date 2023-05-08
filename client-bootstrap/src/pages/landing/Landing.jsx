import React from 'react'
import "./landing.scss"
import { Container, Row, Col } from 'react-bootstrap';
import Show from "../../img/show.jpg"
import ShowSide from "../../img/showsmall.jpg"
import Author from "../../img/author.jpg"
import PopularPost from "../../img/popularposts.jpg"
import { BsDot, BsFillCheckCircleFill } from 'react-icons/bs';

const Landing = () => {
  return (
    
    <div className='landing'>

    <Container>
      <Row>
        <Col xs={12} md={8}>
          <div className="content">
              <div className="image mb-3">
                <img src={Show} alt="" className='rounded' />
              </div>
              <div className="info">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, amet.</h4>
                <p>What young Nigerians need to know</p>

                <div className="author-brief d-flex align-items-center">
                  <img src={Author} alt="" />
                  <span>Michellie Jones <BsFillCheckCircleFill className='active' /> <BsDot/> Mar 6 <BsDot/></span>
                  <span>Travel, Culture, Lifestyle</span> <BsDot/>
                  <span>7 min read</span>
                </div>
                
              </div>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="outer-menu">
            <div className="menu d-flex align-items-start mb-3">
              <div className="image">
                <img src={ShowSide} alt="" />
              </div>
              <div className="info">
                <h1>5 reasons writers should hit the road</h1>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <p>Michelle Jack <BsDot/> Travel, Culture</p>
              </div>
            </div>

            <div className="menu d-flex align-items-start mb-3">
              <div className="image">
                <img src={ShowSide} alt="" />
              </div>
              <div className="info">
                <h1>5 reasons writers should hit the road</h1>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <p>Michelle Jack <BsDot/> Travel, Culture</p>
              </div>
            </div>

            <div className="menu d-flex align-items-start mb-3">
              <div className="image">
                <img src={ShowSide} alt="" />
              </div>
              <div className="info">
                <h1>5 reasons writers should hit the road</h1>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <p>Michelle Jack <BsDot/> Travel, Culture</p>
              </div>
            </div>

            <div className="menu d-flex align-items-start mb-3">
              <div className="image">
                <img src={ShowSide} alt="" />
              </div>
              <div className="info">
                <h1>5 reasons writers should hit the road</h1>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <p>Michelle Jack <BsDot/> Travel, Culture</p>
              </div>
            </div>
          </div>
          
        </Col>
      </Row>
    </Container>

      <div className="second-row bg-light mt-5 pt-3">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={ShowSide} alt="" />
                </div>
                <div className='info'>
                  <h5>The secret to getting students to listen to you</h5>
                  <p>What did all of your best teachers have in common? They established classroom alpha-dog status earlier in the year.</p>
                  <div>
                    <span>Antawnia Jamison <BsFillCheckCircleFill/></span> <span><BsDot/></span> <span>Mar 6</span>
                  </div>
                </div>
              </div>

              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={ShowSide} alt="" />
                </div>
                <div className='info'>
                  <h5>The secret to getting students to listen to you</h5>
                  <p>What did all of your best teachers have in common? They established classroom alpha-dog status earlier in the year.</p>
                  <div>
                    <span>Antawnia Jamison <BsFillCheckCircleFill/></span> <span><BsDot/></span> <span>Mar 6</span>
                  </div>
                </div>
              </div>

              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={ShowSide} alt="" />
                </div>
                <div className='info'>
                  <h5>The secret to getting students to listen to you</h5>
                  <p>What did all of your best teachers have in common? They established classroom alpha-dog status earlier in the year.</p>
                  <div>
                    <span>Antawnia Jamison <BsFillCheckCircleFill/></span> <span><BsDot/></span> <span>Mar 6</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="popular-posts bg-white border rounded p-3 mb-3">
                <h6>Popular Posts</h6>
                <hr />
                <div className="content d-flex align-items-start mb-3">
                  <div className="image">
                    <img src={PopularPost} alt="" />
                    <div className='indexNumber'>04</div>
                  </div>
                  <div className='info'>
                    <h4>The secret to getting students to listen to you</h4>
                    
                    <p>
                      2.5k views | by Antawnia Jamison <BsFillCheckCircleFill/> | posted on Mar 6, 2023
                    </p>
                  </div>
                </div>

                <div className="content d-flex align-items-start mb-3">
                  <div className="image">
                    <img src={PopularPost} alt="" />
                    <div className='indexNumber'>04</div>
                  </div>
                  <div className='info'>
                    <h4>The secret to getting students to listen to you</h4>
                    
                    <p>
                      2.5k views | by Antawnia Jamison <BsFillCheckCircleFill/> | posted on Mar 6, 2023
                    </p>
                  </div>
                </div>

                <div className="content d-flex align-items-start mb-3">
                  <div className="image">
                    <img src={PopularPost} alt="" />
                    <div className='indexNumber'>04</div>
                  </div>
                  <div className='info'>
                    <h4>The secret to getting students to listen to you</h4>
                    
                    <p>
                      2.5k views | by Antawnia Jamison <BsFillCheckCircleFill/> | posted on Mar 6, 2023
                    </p>
                  </div>
                </div>

                <div className="content d-flex align-items-start mb-3">
                  <div className="image">
                    <img src={PopularPost} alt="" />
                    <div className='indexNumber'>04</div>
                  </div>
                  <div className='info'>
                    <h4>The secret to getting students to listen to you</h4>
                    
                    <p>
                      2.5k views | by Antawnia Jamison <BsFillCheckCircleFill/> | posted on Mar 6, 2023
                    </p>
                  </div>
                </div>
                
              </div>

              <div className="upgrade border rounded p-3">
                <div className="content text-center p-3">
                  <h4>Become a pro</h4>
                  <p>…and enjoy all the great benefits</p>
                  <a href="" className='btn btn-primary w-100'>Upgrade now</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Landing