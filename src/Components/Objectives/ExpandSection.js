import "./Objectives.css";
import { useState } from "react";
const ExpandSection = ({ title, iconName, des }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div
      onMouseEnter={() => {
        handleShow();
      }}
      onMouseLeave={() => {
        handleClose();
      }}
    >
      <div className="titleSectionExpand">
        <div className="iconSectionExpand">
          <i className={`fas ${iconName} customExpandIcon `}></i>
        </div>
        <div className="iconSectionTitle">
          <p className="iconSectionTitleP">{title}</p>
        </div>
      </div>
      <div className={show ? "ExpandDescription" : "ExpandDescriptionNone"}>
        <p className="ExpandDescriptionP">{des}</p>
      </div>
    </div>
  );
};

export default ExpandSection;
