import React from 'react'
import Products from '../Products'
import Product from '../components/Product'
import SampleCmp from '../components/SampleCmp'
import { Col, Row } from 'react-bootstrap'
//import { Card } from 'react-bootstrap'

const HomeScreen = () => {
  const msg = 'Hello';
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {
          Products.map(p => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product prd={p} />
            </Col>)
          )
        }
      </Row>
    </>
  )
}

export default HomeScreen