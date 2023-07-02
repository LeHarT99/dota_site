import React from 'react'
import Attribute from './Attribute'
import HeroCard from './HeroCard'
import { Link } from 'react-router-dom';

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
import sun from "../assets/img/icons/icon_sun.ico"
import moon from "../assets/img/icons/icon_moon.ico"

const HeroStats = ({ heroes, heroIndex }) => {

  const hero = heroes[heroIndex];
  const previousHero = heroes[heroIndex - 1];
  const nextHero = heroes[heroIndex + 1];

  return (
    <>

      <div className='flex flex-col items-center p-8'>

        <div>
          <img src={`https://api.opendota.com${hero.img}`} alt="" width="200px" className='mx-auto rounded' />
          <h1 className='text-white text-5xl text-center my-2'>{hero.localized_name}</h1>
        </div>

        <div className='flex text-white bg-slate-400 bg-opacity-40 w-[90%] p-4 justify-around rounded flex-col md:flex-row space-y-4 md:space-y-0'>

          <div className='flex flex-col flex-grow items-center justify-around flex-wrap'>

            <div className='flex items-center'>
              <Attribute src={str} />
              <span className='mr-2 text-2xl'>{hero.base_str}</span>
              <span className='text-2xl text-white'>+{parseFloat(hero.str_gain).toFixed(1)}
              </span>
            </div>

            <div className='flex items-center'>
              <Attribute src={agi} />
              <span className='mr-2 text-2xl'>{hero.base_agi}</span>
              <span className='text-2xl text-white'>+{parseFloat(hero.agi_gain).toFixed(1)}
              </span>
            </div>

            <div className='flex items-center'>
              <Attribute src={int} />
              <span className='mr-2 text-2xl'>{hero.base_int}</span>
              <span className='text-2xl text-white'>+{parseFloat(hero.int_gain).toFixed(1)}
              </span>
            </div>
          </div>

          <div className='text-white flex flex-col flex-grow items-center'>
            <h4 className='text-2xl font-bold mb-2'>Roles</h4>
            <ul className='flex md:space-y-2 space-x-4 md:space-x-0 md:flex-col flex-wrap justify-center'>
              {hero.roles.map((role, index) => (
                <li key={index} className='font-semibold'>{role}</li>
              ))}
            </ul>
          </div>

          <div className='text-white flex flex-grow justify-around flex-wrap'>
            <div className='flex flex-col space-y-4'>
              <h4 className='text-2xl font-bold mb-2'>Attack</h4>

              <div className='flex space-x-2 items-center'>
                <img src={attack} alt="" />
                <span className='text-lg'>{hero.base_attack_min} - {hero.base_attack_max}</span>
              </div>

              <div className='flex space-x-2 items-center'>
                <img src={range} alt="" />
                <span className='text-lg'>{hero.attack_range}</span>
              </div>

            </div>

            <div className='flex flex-col space-y-4'>
              <h4 className='text-2xl font-bold mb-2'>Defense</h4>

              <div className='flex space-x-2 items-center'>
                <img src={armor} alt="" />
                <span className='text-lg'>{parseFloat(hero.base_armor).toFixed(1)}</span>
              </div>

              <div className='flex space-x-2 items-center'>
                <img src={magicRes} alt="" />
                <span className='text-lg'>{hero.base_mr} %</span>
              </div>

            </div>

            <div className='flex flex-col space-y-4'>
              <h4 className='text-2xl font-bold mb-2'>Mobility</h4>

              <div className='flex space-x-2 items-center'>
                <img src={movSpd} alt="" />
                <span className='text-lg'>{hero.move_speed}</span>
              </div>

              <div className='items-center space-y-2 space-x-2 flex'>

                <img src={vision} alt="" />

                <div className='text-lg'>
                  <span className='flex space-x-1'>
                    <img src={sun} alt="" className='w-[30px]' />
                    <p className='self-center'>{hero.day_vision}</p>
                  </span>
                  <span className='flex space-x-1'>
                    <img src={moon} alt="" className='w-[30px]' />
                    <p className='self-center'>{hero.night_vision}</p>
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className='text-white text-4xl flex w-4/5 justify-evenly flex-col space-y-5 mt-8 md:mt-20 md:flex-row md:space-y-0'>

          {!(previousHero === undefined) &&
            <div className='mx-auto'>
              <HeroCard key={heroes.indexOf(hero)} heroIndex={heroIndex - 1} image={`https://api.opendota.com${previousHero.img}`} />
              <p className='text-center mt-2 md:mt-4'>Previous</p>
            </div>}

          <Link to={'/'} className='text-5xl self-center md:self-start'>All heroes</Link>

          {!(nextHero === undefined) &&
            <div className='mx-auto'>
              <HeroCard key={heroes.indexOf(hero)} heroIndex={heroIndex + 1} image={`https://api.opendota.com${nextHero.img}`} />
              <p className='text-center mt-2 md:mt-4'>Next</p>
            </div>}

        </div>
      </div>
    </>
  )
}

export default HeroStats