import React from 'react'
import Attribute from './Attribute'
import HeroCard from './HeroCard'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import str from "../assets/img/hero_strength.svg"
import agi from "../assets/img/hero_agility.svg"
import int from "../assets/img/hero_intelligence.svg"

import attack from "../assets/img/icons/icon_damage.png"
import armor from "../assets/img/icons/icon_armor.png"
import range from "../assets/img/icons/icon_attack_range.png"
//import attackSpd from "../assets/img/icons/icon_attack_time.png"
import magicRes from "../assets/img/icons/icon_magic_resist.png"
import vision from "../assets/img/icons/icon_vision.png"
import movSpd from "../assets/img/icons/icon_movement_speed.png"

const HeroStats = ({ heroes, heroIndex }) => {

  const hero = heroes[heroIndex];
  const previousHero = heroes[heroIndex - 1];
  const nextHero = heroes[heroIndex + 1];

  return (
    <>

      <img src={`https://api.opendota.com${hero.img}`} alt="" width="150px" />

      <h1 className='text-white text-6xl'>{hero.localized_name}</h1>

      <div className='flex text-white'>

        <div className=''>
          <span>{hero.base_str}</span>
          <Attribute src={str} />
          <span className='text-2xl text-white'>+ {hero.str_gain}
          </span>
        </div>

        <div>
          <span>{hero.base_agi}</span>
          <Attribute src={agi} />
          <span className='text-2xl text-white'>+ {hero.agi_gain}
          </span>
        </div>

        <div>
          <span>{hero.base_int}</span>
          <Attribute src={int} />
          <span className='text-2xl text-white'>+ {hero.int_gain}
          </span>
        </div>

        <div className='text-white'>
          {hero.roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>

        <div className='text-white'>
          <div>
            Attack

            <div>
              <img src={attack} alt="" />
              <span>{hero.base_attack_min} - {hero.base_attack_max}</span>
            </div>

            <div>
              <img src={range} alt="" />
              <span>{hero.attack_range}</span>
            </div>

          </div>
          <div>
            Defense

            <div>
              <img src={armor} alt="" />
              <span>{hero.base_armor}</span>
            </div>

            <div>
              <img src={magicRes} alt="" />
              <span>{hero.base_mr}%</span>
            </div>

          </div>
          <div>
            Mobility

            <div>
              <img src={movSpd} alt="" />
              <span>{hero.move_speed}</span>
            </div>

            <div>
              <img src={vision} alt="" />
              <span>Day vision:{hero.day_vision}</span>
              <br />
              <span>Night vision:{hero.night_vision}</span>
            </div>

          </div>

        </div>

        <div className='text-white text-4xl'>

          {!(previousHero === undefined) &&
            <div>
              <p>Previous</p>
              <HeroCard key={heroes.indexOf(hero)} heroIndex={heroIndex - 1} image={`https://api.opendota.com${previousHero.img}`} />
            </div>}

          <Link to={'/'}><p>All heroes</p></Link>

          {!(nextHero === undefined) &&
            <div>
              <p>Next</p>
              <HeroCard key={heroes.indexOf(hero)} heroIndex={heroIndex + 1} image={`https://api.opendota.com${nextHero.img}`} />
            </div>}

        </div>


      </div>
    </>
  )
}

export default HeroStats