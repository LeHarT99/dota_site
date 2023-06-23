import './assets/App.css';
import logo from "./assets/img/dota_footer_logo.svg"
import str from "./assets/img/hero_strength.svg"
import agi from "./assets/img/hero_agility.svg"
import int from "./assets/img/hero_intelligence.svg"
import all from "./assets/img/hero_universal.svg"
import Attribute from './components/Attribute';
import SearchHero from './components/SearchHero';

import { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';


function App() {

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroStats")
      .then(heroes => heroes.json())
      .then(heroes => {
        setHeroes(heroes);
        setLoading(false);
      }).catch(err => console.log(err))


  }, []);

  return (
    <div className='flex flex-col justify-center my-4'>
      <img src={logo} alt="" className='self-center mb-4' width="35%" />


        <div className='flex w-[90%] justify-between mx-auto items-center'>
          <div className='flex p-4 bg-gray-700 space-x-3'>
            <Attribute src={str} />
            <Attribute src={agi} />
            <Attribute src={int} />
            <Attribute src={all} />
          </div>

          <SearchHero />
        </div>

        {isLoading ? <h1 className='text-white text-6xl text-center'>Loading...</h1> :

          <div className='flex flex-wrap p-8 bg-slate-400 bg-opacity-25 justify-center space-x-1 space-y-1 w-[90%] mx-auto'>
            {heroes.map(hero => (
              <HeroCard key={hero.id} image={`https://api.opendota.com${hero.img}`}/>
              // <h4 key={hero.id} className='text-white'>{hero.localized_name}</h4>
            ))}
          </div>}

    </div>
  );
}
export default App;
