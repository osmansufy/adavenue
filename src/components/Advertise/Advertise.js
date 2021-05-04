import React from 'react';
import image1 from '../../images/85.png'
import image2 from '../../images/53.png'
import image3 from '../../images/30.png'
import image4 from '../../images/58.png'
import './Advertise.css'
const Advertise = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className ='row w-75 pt-5 m-5'>
                    <h1>Why Advertise On Moving Vehicles ?</h1>
                    <p>Moving Vehicles are Widely used by People.In a survey ­­it is found that in the last month.</p>
                <div className="col-md-3">
                    <img src={image1} alt=""  width="300px" height="400px"/>
                    <p>Driven Or Ridden In A <br/> CAR, TRUCK OR <br/> OTHER PRIVATE <br/>VEHICLE</p>
                </div>

                <div className="col-md-3">
                    <img src={image2} alt=""  width="300px" height="400px"/>
                    <p>Ridden As A <br/>Passenger On Any <br/>PUBLIC TRANSPORT <br/>Including Rail, Bus,<br/> Taxi, Or On-Demand<br/> Car Service</p>
                </div>

                <div className="col-md-3">
                    <img src={image3} alt=""  width="300px" height="400px"/>
                    <p>Ridden As A <br/> Passenger On A <br/>COMMUTER RAIL OR <br/> SUBWAY</p>
                </div>

                <div className="col-md-3">
                    <img src={image4} alt=""  width="300px" height="400px"/>
                    <p>Over Half Those Age <br/> 16 Or Older In The <br/> Top 30 Markets Have <br/> Traveled By Airplane <br/> In The Past 12 <br/> Months</p>
                </div>
            </div>
        </section>
    );
};

export default Advertise;