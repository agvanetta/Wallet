import React from 'react'
import "./Home.css";
import "./Stats.css";
import HomeTop from './HomeTop';
import Prices from './Prices';
import Movements from './Movements';
import Stats from './Stats';
import Bannermid from './Bannermid';


function Home() {
  return (
    <div className='home'>
      <Prices/>
      <div className="home__block__one">
        <div className='home__left'>
          <HomeTop/> <Stats/>
        </div>
        <Movements/>
      </div>
      <Bannermid/>
    </div>
  )
}

export default Home