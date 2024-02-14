import {React, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import {useLocation, useNavigate, Link} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import {login, logout} from '../actions//userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Form, Button, Row, Col, Stack} from 'react-bootstrap'

const LoginScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector((state) => state.userLogin)
  const {loading, error, userInfo} = userLogin
  
  useEffect(() => {
    if(userInfo){
      navigate(redirect)

    } 
  },[navigate, userInfo, redirect])

  const submitHandler=(e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1> Sign In </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
       <Stack gap={2} className="col-md-5 mx-auto" >
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeHolder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>password</Form.Label>
            <Form.Control
              type='password'
              placeHolder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
          </Form.Group>      
          <Button type='submit' variant='outline-primary'>
            Sign In
          </Button>
        </Stack>
      </Form>

      <Row>
        <Col>
        New Customer?{' '}
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          Register
        </Link>
        </Col>
      </Row>
    </FormContainer>

  )
}

export default LoginScreen
