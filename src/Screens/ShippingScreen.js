import React, {useState} from 'react'
import {Form, Button, Stack} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartActions'

const ShippingScreen = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.ciity)
  const [state, setState] = useState(shippingAddress.state)
  const [country, setCountry] = useState(shippingAddress.country)

  const [zipcode, setZipcode] = useState(shippingAddress.zipcode)

  const submitHandler = (e) => {
    //e.preventdefault()
    dispatch(saveShippingAddress({address, city, zipcode, country}))
    Navigate('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1> Shipping </h1>
        <Form onSubmit={submitHandler}>
         <Stack>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}>
            </Form.Control>
            <Form.Control
              type='text'
              placeholder='Enter City'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}>
            </Form.Control>
            <Form.Control
              type='text'
              placeholder='Enter State'
              value={state}
              required
              onChange={(e) => setState(e.target.value)}>
            </Form.Control>
            <Form.Control
              type='text'
              placeholder='Enter Zip Code'
              value={zipcode}
              required
              onChange={(e) => setZipcode(e.target.value)}>
            </Form.Control>
            <Form.Control
              type='text'
              placeholder='Enter Country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Stack>
       </Form>      
    </FormContainer>
  )
}

export default ShippingScreen