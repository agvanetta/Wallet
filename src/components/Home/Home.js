import React from 'react'
import "./Home.css";
import HomeTop from './HomeTop';
import Prices from './Prices';
import Movements from './Movements';



function Home() {
  return (
    <div className='home'>
      <Prices/>
      <div className="home__block__one">
        <div><HomeTop/> <HomeTop/></div>
        <Movements/> </div>
     
    </div>
  )
}

export default Home