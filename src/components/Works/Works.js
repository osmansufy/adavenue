import React from 'react';
import bgImage from '../../images/Group 218@2x.png'
const Works = () => {
    return (
        <div className = 'container'>
            <h1>How It Works</h1>
            <p>
            ADAVENUE will define your target advertising goal, target audience, timeline and location.Provide customized campaign offers for maximum effectiveness with wrapping type, wrapping quality, vehicle category and numbers.
            </p>
                <img className='img-fluid' src={bgImage} alt="" width="500px"/>
        </div>
    );
};

export default Works;