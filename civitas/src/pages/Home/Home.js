import React, { useState } from 'react';

import Header from '../../components/Home/Header/Header.js';
import Section from '../../components/Home/Section/Section.js';
import Welcome from '../../components/Home/Welcome/Welcome.js';

import './Home.css';

const Home = () => {

  return (
    <div className='home'>
      <Header />
      <main>
        <Welcome />
        <Section />
      </main>
    </div>
  )
}

export default Home;