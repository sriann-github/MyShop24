import React, {useEffect} from 'react'
import {useParams, useNavigate, useLocation, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Image, Form, Button, Card, ListGroup} from 'react-bootstrap'
import {addToCart, removeFromCart} from '../actions/cartActions'
import Message from '../components/Message'


const CartScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()
  const productId = params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  //you have to dispatch addToCart action here to be able to get the cart details from redux store
  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, params, qty, productId])

  // I need to read the items from cart and display all of them
  // For that I need to read the cart from redux state
  // useSelect is used to read from the store
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }

  return (
    <Row>
      <Col md={8}>
       <h1>Shopping Cart </h1>
       {cartItems.length === 0 ? (
        <Message>
          Your cart is empty <Link to='/'> Go Back </Link>
        </Message>
       ) : (       
        <ListGroup variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.productId}>
             <Row>
              <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded />
              </Col>
              <Col md={3}>
                <Link to={`/product/${item.productId}`}>{item.name}</Link>
              </Col>
              <Col md={2}>${item.price}</Col>
              <Col md={2}>
                <Form.Control
                  as='select'
                  value={item.qty}
                  onChange={(e) => 
                    dispatch(
                      addToCart(item.productId, Number(e.target.value))
                    )
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>
                      {x+1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={2}>
                <Button
                  type='button'
                  variant='dark'
                  onClick={() => removeFromCartHandler(item.productId)}
                  >
                    <i className='fas-fa-trash'></i>
                </Button>
              </Col>
             </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>          
       )}
      </Col>      
      <Col md={4}>
        <Card>
          <ListGroup varian='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
              </h2>
              $
              {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}>
                  Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>

  )
}

export default CartScreen