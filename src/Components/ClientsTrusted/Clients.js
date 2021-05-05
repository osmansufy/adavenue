import React from "react";
import "./Client.css";
const Clients = () => {
  return (
    <div>
      <section className="padding-top-80 padding-bottom-80 padding-top-80 padding-bottom-80 clientClass">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title section-title-2">
                {/* contact area wrapper */}
                <span className="subtitle">Clients</span>
                <h3 className="title">Trusted By</h3>
                <p>
                  We are happy to announce that these companies have trusted us
                  with the responsibility to conduct their campaigns.
                </p>
                <image src="../../assets/mobile.png" className="mobileImage" />
              </div>
              {/* //. contact area wrapper */}
            </div>
            <div className="col-lg-8">
              <div className="screeshort-carousel-wrap-02">
                <div className="screenshort-carousel-02">
                  <div className="single-screenshort-item">
                    <img
                      src="../../assets/img/partner/ambergroup.png"
                      alt="ambergroup"
                    />
                  </div>
                  <div className="single-screenshort-item">
                    <img
                      src="../../assets/img/partner/bashundharagroup.png"
                      alt="bashundharagroup"
                    />
                  </div>
                  <div className="single-screenshort-item">
                    <img
                      src="../../assets/img/partner/grameenphone.png"
                      alt="grameenphone"
                    />
                  </div>
                  <div className="single-screenshort-item">
                    <img
                      src="../../assets/img/partner/grandeboulevardonline.png"
                      alt="grandeboulevardonline"
                    />
                  </div>
                  <div className="single-screenshort-item">
                    <img src="../../assets/img/partner/uber.png" alt="uber" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
