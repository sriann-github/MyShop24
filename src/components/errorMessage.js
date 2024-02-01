import React from 'react'
import {Alert} from 'react-bootstrap'

const errorMessage = ({variant, children}) => {
  return (
    <Alert variant= {variant}> {children} </Alert>
  )
}

errorMessage.defaultProps = {
  variant: 'info'
}

export default errorMessage