import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ image, heroIndex, onClick }) => {
  return (

    <Link to={`/${heroIndex}`} className='mt-1' onClick={onClick}>
      <img src={image} alt="" width="150px" className='hover:scale-150 hover:rounded ease-in-out hover:shadow-myShadow duration-200'/>
    </Link>
  )
}

export default HeroCard