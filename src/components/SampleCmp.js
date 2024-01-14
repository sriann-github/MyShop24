import React from 'react'
import myImage from '../images/Airpods.jpg'
 

const SampleCmp = ({ m }) => {
  return (
    <>
      <div> {m} </div>
      <img src={myImage}></img>
    </>
  )
}

export default SampleCmp