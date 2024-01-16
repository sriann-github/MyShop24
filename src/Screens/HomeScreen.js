import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from '../components/Product'
//import SampleCmp from '../components/SampleCmp'
import { Col, Row } from 'react-bootstrap'
//import { Card } from 'react-bootstrap'

const HomeScreen = () => {

  const [products, setProducts] = useState([])

  useEffect( () => {
    const fetchProducts = async () =>{
      const {data} = await axios.get('/api/products')
      //curly bracket in the above statement is the deconstructing statement, it extracts the data property from the response
      setProducts(data)
    }

    fetchProducts()

  })
  
  const msg = 'Hello';
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {
          products.map( p => (
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

