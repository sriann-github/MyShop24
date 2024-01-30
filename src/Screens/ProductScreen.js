
import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import {Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios'
import Rating from '../components/Rating'

const ProductScreen = () => {

  const params = useParams();
  //If you need to get the product details from a local file then you could do this
    //const event = events.find(e => e.id === params.id)

  // Indicating JS runtime that I need a state variable created with name 
  // product, upon which a local storage is created which is accessible within 
  // the component
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`)
      setProduct(data)      
     }     
     fetchProduct()      
   }
  ) 

  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>

    <Row>
      <Col md={6}>
        <Image src={product.Image} alt={product.name} fluid />
      </Col>

      <Col md={3}>
       <ListGroup>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: ${product.description}
          </ListGroup.Item>
       </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col> Price:
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='btn-block' type='button' disabled={product.countInStock === 0} > Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

    </Row>
    </>    
  )
}
export default ProductScreen;