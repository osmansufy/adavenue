import "./Why.css";
import { Image } from "react-bootstrap";
import InnerComponent from "./InnerComponent";
const Why = () => {
  return (
    <div>
      <div className="titleClass">
        <h4 className="WhyTitle">Why Advertise By Adavenue </h4>
        <Image src="../../assets/5000.png" className="titleImage" />
      </div>
      <div className="whyBody">
        <InnerComponent
          title="On average more than 200 impressions per mile per vehicle"
          icon="fa-mobile-alt"
        />
        <InnerComponent
          title="Creates Amazing Brand Awareness and Recall Rate"
          icon="fa-broadcast-tower"
        />
        <InnerComponent
          title="No off time: working 24x7, when they are on the road or parked"
          icon="fa-user-clock"
        />
        <InnerComponent
          title="Design Support to Give Ad Unique, Localized and Customized Voice"
          icon="fa-cogs"
        />
      </div>
    </div>
  );
};

export default Why;
