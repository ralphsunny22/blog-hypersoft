import React from 'react'
import Show from "../img/show.jpg"
import ShowSide from "../img/showsmall.jpg"
import PopularPost from "../img/popularposts.jpg"
import Author from "../img/author.jpg"
import { BsDot, BsFillCheckCircleFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='home'>

      <section className='first-row mb-5'>
        <div className="row">
          <div className="col-md-8">
            <div className="content">
              <img src={Show} alt="" />

              <div className="title">
                <h4>Roadtrip & backpacking Canada</h4>
              </div>
              <p>What young Nigerians need to know</p>

              <div className="post-author-info d-flex align-items-center">

                <img src={Author} alt="" />
                <div className="username">
                  <span>Michellie Jones <span className="active"><BsFillCheckCircleFill/> </span></span>
                </div>

                <span><BsDot/></span>

                <div className="date">
                  <span>Mar 6</span>
                </div>

                <span><BsDot/></span>

                <div className="categories">
                  <span>Travel, Culture, Lifestyle</span>
                </div>

                <span><BsDot/></span>

                <div className="time-read">
                  7 min read
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            
            <div className="menu d-flex justify-content-between align-items-start mb-3">
              <div className='image'>
                <img src={ShowSide} alt="" />
              </div>
            
            <div className="brief">
                <h5>5 reasons writers should hit the road</h5>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <div className="info d-flex align-items-center">

                  <span>Michelle Jack</span>
                  <span><BsDot/></span>
                  <span>Travel, Culture</span>
                  
                </div>
            </div>
            </div>

            <div className="menu d-flex justify-content-between align-items-start mb-3">
              <div className='image'>
                <img src={ShowSide} alt="" />
              </div>
            
            <div className="brief">
                <h5>5 reasons writers should hit the road</h5>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <div className="info d-flex align-items-center">

                  <span>Michelle Jack</span>
                  <span><BsDot/></span>
                  <span>Travel, Culture</span>
                  
                </div>
            </div>
            </div>

            <div className="menu d-flex justify-content-between align-items-start">
              <div className='image'>
                <img src={ShowSide} alt="" />
              </div>
            
            <div className="brief">
                <h5>5 reasons writers should hit the road</h5>
                <p>From Desert Monsoons to Some of the Best Food in the Country</p>
                <div className="info d-flex align-items-center">

                  <span>Michelle Jack</span>
                  <span><BsDot/></span>
                  <span>Travel, Culture</span>
                  
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='second-row bg-light'>
        <div className="row">
          <div className="col-md-8">
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
            
          </div>
          <div className="col-md-4">
            <div className="popular-posts bg-white border rounded p-3">
              <h6>Popular Posts</h6>
              <hr />
              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={PopularPost} alt="" />
                  <div className='indexNumber'>04</div>
                </div>
                <div className='info'>
                  <h6>The secret to getting students to listen to you</h6>
                  
                  <div>
                    <span>2.5k views|</span> <span>by Antawnia Jamison <BsFillCheckCircleFill/></span> <span> | posted on</span> <span>Mar 6, 2023</span>
                  </div>
                </div>
              </div>

              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={PopularPost} alt="" />
                  <div className='indexNumber'>04</div>
                </div>
                <div className='info'>
                  <h6>The secret to getting students to listen to you</h6>
                  
                  <div>
                    <span>2.5k views|</span> <span>by Antawnia Jamison <BsFillCheckCircleFill/></span> <span> | posted on</span> <span>Mar 6, 2023</span>
                  </div>
                </div>
              </div>

              <div className="content d-flex align-items-start mb-3">
                <div className="image">
                  <img src={PopularPost} alt="" />
                  <div className='indexNumber'>04</div>
                </div>
                <div className='info'>
                  <h6>The secret to getting students to listen to you</h6>
                  
                  <div>
                    <span>2.5k views|</span> <span>by Antawnia Jamison <BsFillCheckCircleFill/></span> <span> | posted on</span> <span>Mar 6, 2023</span>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home