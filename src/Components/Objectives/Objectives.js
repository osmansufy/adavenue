import "./Objectives.css";
import { Image } from "react-bootstrap";
import ExpandSection from "./ExpandSection";

const Objectives = () => {
  return (
    <div className="containerObjective">
      <h4 className="objectiveTitle">Our Advertising Objectives</h4>
      <div className="innercontainerObjective">
        <div className="sectionOLeft">
          <ExpandSection
            title="FRontier Technology"
            iconName="fa-tv"
            des="We do more than wrapping ads. We creatively 
advertise brands in unique ways."
          />

          <ExpandSection
            title="Maximum Coverage"
            iconName="fa-globe"
            des="We do more than wrapping ads. We creatively 
advertise brands in unique ways."
          />
        </div>
        <div className="sectionOImage">
          <Image src="../../assets/mobile.png" className="mobileImage" />
        </div>
        <div className="sectionORight">
          <ExpandSection
            title="FRontier Technology"
            iconName="fa-code"
            des="We do more than wrapping ads. We creatively 
advertise brands in unique ways."
          />
          <ExpandSection
            title="FRontier Technology"
            iconName="fa-search"
            des="We do more than wrapping ads. We creatively 
advertise brands in unique ways."
          />
        </div>
      </div>
    </div>
  );
};

export default Objectives;
