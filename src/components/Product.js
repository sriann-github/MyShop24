import React from 'react'
import {Card} from 'react-bootstrap'
import myImage from '../images/Airpods.jpg'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ( { prd }) => {
  return (
    <Card className='my-5 p-3 rounded'>
      <Link to={`/product/${prd._id}`}>
        <Card.Img src={prd.image} variant ='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${prd._id}`} >
          <Card.Title as='div'>
            <strong>{prd.name}</strong>
          </Card.Title>
        </Link>        
        <Card.Text as='div'>
          <Rating value={prd.rating} text={`${prd.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>
          ${prd.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product