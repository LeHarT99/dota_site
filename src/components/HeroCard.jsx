import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ image, heroIndex, onClick }) => {
  return (

    <Link to={`/${heroIndex}`} className='mt-1' onClick={onClick}>
      <img src={image} alt="" width="150px" />
    </Link>
  )
}

export default HeroCard