import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Test = () => {
  return (
    <div className='test'>
    <Container>
      <Row>
        <Col xs={12} md={6}>
            <div>
                col 1
            </div>
        </Col>
        <Col xs={12} md={6}>
            <div>
                col 2
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Test