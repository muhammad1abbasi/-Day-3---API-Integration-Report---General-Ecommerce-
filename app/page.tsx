import React from 'react'
import Headerone from './components/Hero';
import Featured from './components/featured';
import Leatest from './components/leatest';
import Shopex from './components/shopex';


const Homepage = () => {
  return (
    <div>
      
      <Headerone/>
      <Featured/>
      <Leatest/>
      <Shopex/>
    </div>
  )
}

export default Homepage;
