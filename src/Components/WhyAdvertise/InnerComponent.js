import React, { useState } from "react";

const InnerComponent = ({ title, icon }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div
      className="InnerComContainer"
      className={show ? "InnerComContainerOnHover" : "InnerComContainer"}
      onMouseEnter={() => {
        handleShow();
      }}
      onMouseLeave={() => {
        handleClose();
      }}
    >
      <div
        className={
          show ? " InnerComContainerIconHover" : "InnerComContainerIcon"
        }
      >
        <i
          class={
            show
              ? `fas ${icon} custominnericonhover`
              : `fas ${icon} customInnerIcon`
          }
        ></i>
      </div>
      <div
        className={
          show ? "InnerComContainerTextOnHover" : "InnerComContainerText"
        }
      >
        {title}
      </div>
    </div>
  );
};

export default InnerComponent;
