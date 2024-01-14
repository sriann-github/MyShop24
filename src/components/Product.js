import React from 'react'
import {Card} from 'react-bootstrap'
import myImage from '../images/Airpods.jpg'

const Product = ( { prd }) => {
  return (
    <Card className='my-5 p-3 rounded'>
      <Card.Img src={prd.image} variant ='top' />
      <Card.Body>
        <Card.Title as='div'>
          <strong>{prd.name}</strong>
        </Card.Title>        
        <Card.Text as='div'>
          Rating is displayed here
        </Card.Text>
        <Card.Text as='div'>
          ${prd.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product