import './assets/App.css';
import logo from "./assets/img/dota_footer_logo.svg"
import str from "./assets/img/hero_strength.svg"
import agi from "./assets/img/hero_agility.svg"
import int from "./assets/img/hero_intelligence.svg"
import all from "./assets/img/hero_universal.svg"
import Attribute from './components/Attribute';
import SearchHero from './components/SearchHero';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import HeroStats from './components/HeroStats';

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
    <Router>
      <div className='flex flex-col justify-center my-4'>
        <img src={logo} alt="" className='self-center mb-4' width="35%" />

        <Routes>
          {heroes.map(hero => (

            <Route key={hero.id} path={`/${hero.id}`} element={<HeroStats key={hero.id} heroes={heroes} heroId={hero.id} image={hero.img} strGain={hero.str_gain} agiGain={hero.agi_gain} intGain={hero.int_gain} />} />
          ))}

          <Route path='/' exact element={(

            <>
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
                    <HeroCard key={hero.id} heroId={hero.id} image={`https://api.opendota.com${hero.img}`} />
                  ))}
                </div>}
            </>
          )} />
        </Routes>


      </div >
    </Router>
  );
}
export default App;
