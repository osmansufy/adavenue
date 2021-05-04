import React, { useState } from "react";
import { Nav, Col, Tab, Container, Row } from "react-bootstrap";
import tagBage from "../../assets/images/tag.png";
import iconWrapper from "../../assets/images/icon-wrapper.png";
import car1 from "../../assets/images/car-wrapping-1.png";
import car2 from "../../assets/images/car-wrapping-2.png";
import car3 from "../../assets/images/car-wrapping-4.png";

const BusWrapper = () => {
  const [basicShow, setBasicShow] = useState(false);
  const [standardShow, setStandardShow] = useState(false);
  const [advancedShow, setAdvancedShow] = useState(false);
  const toggleWrapper = (e, targetCar) => {
    e.target?.parentElement.classList.add("active");
    console.log(e, targetCar);
    if (targetCar == "basic") {
      setBasicShow(true);
      setStandardShow(false);
      setAdvancedShow(false);
    } else if (targetCar == "standard") {
      setBasicShow(false);
      setStandardShow(true);
      setAdvancedShow(false);
    } else if (targetCar == "advanced") {
      setBasicShow(false);
      setStandardShow(false);
      setAdvancedShow(true);
    }
  };
  return (
    <Container className="my-5">
      <div className="row">
        <div className="col-md-4">
          <img className={basicShow ? "headlight" : ""} src={car1} alt="" />
        </div>
        <div className="col-md-4">
          <img className={standardShow ? "headlight" : ""} src={car2} alt="" />
        </div>
        <div className="col-md-4">
          <img className={advancedShow ? "headlight" : ""} src={car3} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="allWrapper">
            <div
              onClick={(event) => toggleWrapper(event, "basic")}
              className="bageWrapper"
            >
              <img src={tagBage} alt="" />
              <span>Basic</span>
            </div>
            <div
              className={basicShow ? "bageContainer active" : "bageContainer"}
            >
              <div className="item-bage d-flex align-items-center">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="allWrapper">
            <div
              onClick={(e) => toggleWrapper(e, "standard")}
              className="bageWrapper"
            >
              <img src={tagBage} alt="" />
              <span>Basic</span>
            </div>
            <div
              className={
                standardShow ? "bageContainer active" : "bageContainer"
              }
            >
              <div className="item-bage d-flex align-items-center">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="allWrapper">
            <div
              onClick={(e) => toggleWrapper(e, "advanced")}
              className="bageWrapper"
            >
              <img src={tagBage} alt="" />
              <span>Basic</span>
            </div>
            <div
              className={
                advancedShow ? "bageContainer active" : "bageContainer"
              }
            >
              <div className="item-bage d-flex align-items-center">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
              <div className="item-bage d-flex align-items-center ">
                <img src={iconWrapper} alt="" />
                <p>
                  <b>Ad Placement :</b> Your Ad will be placed on back window of
                  cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BusWrapper;
