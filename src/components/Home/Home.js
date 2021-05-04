import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Advertise from '../Advertise/Advertise';
import Works from '../Works/Works';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Advertise/>
            <AboutUS/>
            <Works/>
        </div>
    );
};

export default Home;