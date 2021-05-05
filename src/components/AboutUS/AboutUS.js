import React from 'react';
import airplane from '../../images/plain.png'
import './About.css'
const AboutUS = () => {
    return (
        <div>
            <h1>ABOUT US</h1>
            <div className = 'row d-flex justify-content-center'>
                <div className = 'col-md-6'>
                        <img className="img-fluid" src = {airplane} alt=""  />
                </div>
                <div className = "col-md-4 text-style p-5">
                        <h2>WHO WE ARE !</h2>
                        <p>ADAVENUE is one of the first out of home moving vehicle 
                            advertising company in Dhaka, Bangladesh. We are one of 
                            a kind transit marketing business trying to reach out to each 
                            and every brand and help them market their product better.
                        </p>
                        <h2>We Believe !</h2>
                        <p>With ADAVENUE you will get a better and higher client 
                        response and retention rate then average. More than that 
                        of ­­radio, billboards or even the newspaper industry.
                        </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;