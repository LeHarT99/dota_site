import './assets/App.css';
import logo from "./assets/img/dota_footer_logo.svg"
import str from "./assets/img/hero_strength.svg"
import agi from "./assets/img/hero_agility.svg"
import int from "./assets/img/hero_intelligence.svg"
import all from "./assets/img/hero_universal.svg"
import Attribute from './components/Attribute';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import HeroStats from './components/HeroStats';

function App() {

  const [heroes, setHeroes] = useState([]);
  const [heroesCopy, setHeroesCopy] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchHero, setSearchHero] = useState('');
  const [heroAttr, setHeroAttr] = useState('');

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroStats")
      .then(heroes => heroes.json())
      .then(heroes => {
        setHeroes(heroes);
        setHeroesCopy(heroes);
        setLoading(false);
      }).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const filterHeroes = (search) => {
      const filtered = heroes.filter((hero) =>
        hero.localized_name.toLowerCase().includes(search.toLowerCase())
      );
      if (searchHero === '') {
        setHeroes(heroesCopy);
      }
      else {
        setHeroes(filtered);
      }
    };
    filterHeroes(searchHero);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchHero]);


  useEffect(() => {

    const filterByAttr = (attr) => {

      const filtered = heroes.filter((hero) =>
        hero.primary_attr.includes(attr)
      );
      setHeroes(filtered);
    }

    filterByAttr(heroAttr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroAttr]);

  return (
    <Router>
      <div className='flex flex-col justify-center my-4'>
        <img src={logo} alt="" className='self-center mb-4' width="35%" />

        <Routes>
          {heroes.map(hero => (
            <Route key={hero.id} path={`/${hero.id}`} element={<HeroStats key={hero.id} heroes={heroes} heroId={hero.id} />} />
          ))}

          <Route path='/' exact element={(

            <>
              <div className='flex w-[90%] justify-between mx-auto items-center'>
                <div className='flex p-3 bg-gray-700 space-x-3'>
                  <Attribute src={str} onClick={(e) => { setHeroAttr("str"); setHeroes(heroesCopy) }} />
                  <Attribute src={agi} onClick={(e) => { setHeroAttr("agi"); setHeroes(heroesCopy) }} />
                  <Attribute src={int} onClick={(e) => { setHeroAttr("int"); setHeroes(heroesCopy) }} />
                  <Attribute src={all} onClick={(e) => { setHeroAttr("all"); setHeroes(heroesCopy) }} />
                  <div className='text-white self-center text-3xl cursor-pointer' onClick={(e) => { setHeroAttr(""); setHeroes(heroesCopy); }}>
                    X
                  </div>
                </div>

                <input type="text" placeholder='Search hero by name' className='bg-gray-700 text-white p-2 rounded' onChange={(e) => setSearchHero(e.target.value)} />

              </div>

              {isLoading ? <h1 className='text-white text-6xl text-center mt-4'>Loading...</h1> :

                heroes.length === 0 ? <h1 className='text-6xl text-white text-center mt-4'>No heroes found...</h1> :

                  <div className='flex flex-wrap p-8 bg-slate-400 bg-opacity-25 justify-center space-x-1 w-[90%] mx-auto'>
                    {heroes.map(hero => (
                      <HeroCard key={hero.id} heroId={hero.id} image={`https://api.opendota.com${hero.img}`} />
                      // <h4 key={hero.id} className='text-white'>{hero.localized_name}</h4>
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