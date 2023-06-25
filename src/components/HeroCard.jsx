import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const HeroCard = ({ image, heroId }) => {
  return (

    <Link to={`/${heroId}`} className='mt-1'>
      <img src={image} alt="" width="150px" />
    </Link>
  )
}

export default HeroCard