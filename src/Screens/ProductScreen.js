import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom';
import {Row, Col, Image, Card, Button, ListGroup, ListGroupItem, Form} from 'react-bootstrap';
import Rating from '../components/Rating'
import Loader from '../components/Loader';
import Message from '../components/Message';
import {findProduct} from '../actions/productActions'

const ProductScreen = () => {

const [qty, setQnty] = useState(1)
const params = useParams()
const dispatch = useDispatch()
  //If you need to get the product details from a local file then you could do this
    //const event = events.find(e => e.id === params.id)

  // Indicating JS runtime that I need a state variable created with name 
  // product, upon which a local storage is created which is accessible within the component
  // When implementing redux we need to use useSelector and useDispatcher hooks.
  //const [product, setProduct] = useState({})  

  //UseEffect for calling into API using the axios library
  useEffect(() => {
    /*const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
     }     
     fetchProduct()*/  
     dispatch(findProduct(params.id))
   },[dispatch, params]
  )

  const productDetails = useSelector((state) => state.productDetails)
  const {loading, product, error} = productDetails
  console.log(product)

  const navigate = useNavigate()
// Need to use useNavigate hook for navigation(route) between pages
// We are using local storage here and not redux store
  const addToCartHandler = () => {
     navigate(`/cart/${params.id}?qty=${qty}`)
  }
 
  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
          {
             loading? (<Loader />):
             error? (<Message variant='danger'> {error} </Message>) : 
            ( 
              <Row>
                <Col md={6}>
                  <Image src={product.Image} alt={product.name} fluid />
                </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
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
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 &&(
                    <ListGroup.Item>
                      <Row>
                        <Col> Qty </Col>
                        <Col>
                          <Form.Control
                           as='select' 
                           value={qty}
                           onChange={e => setQnty(e.target.value)}
                          >
                            {
                              [...Array(product.countInStock).keys()].map(x => 
                                (<option key={x+1} value={x+1}> {x+1} </option>))
                            }
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                        className='btn-block' type='button' 
                        onClick={addToCartHandler}
                        disabled={product.countInStock === 0} > Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            )
      } 
    </>   
  )
}
export default ProductScreen;