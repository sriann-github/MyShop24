import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Col, Button} from 'react-bootstrap'
import {savePaymentMethod} from '../actions/cartActions'
import {useNavigate} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'


const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) =>
  {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }
  //If shipping details are not available the send user back to 
  // Shipping page
  //Get shipping details from redux store (b'cos we've already read the shipping details while initializing store)

const cart = useSelector((state) => state.cart)
const {shippingAddress} = cart

if(!shippingAddress)
{
  navigate('/shipping')
}
  
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'> Select Payment Method       </Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit card'
                id='Paypal'
                value='Paypal'
                name='paymentMethod'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </Form.Check>
            </Col>
            <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              value='Stripe'
              name='paymentMethod'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              >
            </Form.Check>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen