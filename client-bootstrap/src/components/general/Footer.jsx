import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer bg-dark text-white pt-3 mt-5'>

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="content">
              <h5>Discover HyperSoft</h5>
              <div>
                <p>Welcome to HyperSoft Media, an author oriented Idea. A place where words matter. Discover without further ado our countless community stories.</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="content">
              <h5>Build great relations</h5>
              <div>
                <p>Explore all the content form Gorgo community network. Forums, Groups, Members, Posts, Social Wall and many more. You can never get tired of it!</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="content">
              <h5>Become a member</h5>
              <div>
                <p>Get unlimited access to the best articles on Gorgo and support our  lovely authors. Upgrade Now</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer