import React, { useState } from 'react';

import Header from '../../components/Home/Header/Header.js';
import Welcome from '../../components/Home/Welcome/Welcome.js';

import './Home.css';

const Home = () => {

  return (
    <div className='home'>
      <Header />
      <Welcome />
    </div>
  )
}

export default Home;