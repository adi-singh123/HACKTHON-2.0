import React from "react";
import "../prizes/prizes.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Prizes() {
  return (
    <section id="prizes" className="pb100 pt100">
      <div className="container">
        <div className="section_title">
          <h3
            className="title-dark"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            PRIZES
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="good">
              <div className="ser">
                <div className="ser-logo first-logo">
                  <img src="/image\first.png" alt="1st" />
                </div>
                <h4 className="prize-heading">First Prize</h4>
                <p>GOLD MEDAL</p>
                <p>
                  GIFT's
                </p>
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTwo"></div>
            </div>
          </div>
          <div
            className="col-md-4 prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="good">
              <div className="ser">
                <div className="ser-logo second-logo">
                  <img src="/image\second.png" alt="2nd" />
                </div>
                <h4 className="prize-heading">Second Prize</h4>
                <p>
                  siliver model
                </p>
                <p>
                 GIFTS
                </p>
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTwo"></div>
            </div>
          </div>
          <div
            className="col-md-4 order-md-12 prize-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="good">
              <div className="ser">
                <div className="ser-logo third-logo">
                  <img src="/image\third.png" alt="3rd" />
                </div>
                <h4 className="prize-heading">Third Prize</h4>
                <p>
                  BROWN model
                </p>
                <p>
                  GIFTS
                </p>
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTwo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
