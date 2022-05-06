import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Home/Footer/Footer.js';

import Header from '../../components/Home/Header/Header.js';
import Section from '../../components/Home/Section/Section.js';
import Welcome from '../../components/Home/Welcome/Welcome.js';

import './Home.css';

const Home = () => {
    const [projects, setProjects] = useState([]);
    return (
        <div>
            <div className='home'>
            <Header />
            <main>
                <Welcome />
                <Section />
            </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;