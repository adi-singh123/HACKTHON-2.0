import React from "react";
import "../glimpses/glimpses.css";


function GlimpsesNew() {
  return (
    <section id="glimpses-new">
      <div className="glimpses-new-container">
        <div className="container">
          <div className="section_title">
            <h3
              className="title-dark"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Glimpses <span className="text">OF HACKFEST </span> <br />
              <span className="previous_ed text-capitalize">
                Previous Editions
              </span>
            </h3>
          </div>
        </div>

        <div className="image">
          <div className="new-carousel-primary">
            <div className="carousel-container">
              <div className="carousel-track track-right">
                <img src="/image\a.jpeg" alt="img1" />
                <img src="/image\b.jpeg" alt="img2" />
                <img src="/image\c.jpeg" alt="img3" />
                <img src="/image\d.jpeg" alt="img4" />
                <img src="/image\m.jpeg" alt="img5" />
                <img src="/image\f.jpeg" alt="img6" />
                <img src="/image\g.jpeg" alt="img7" />
                <img src="/image\h.jpeg" alt="img1" />
                <img src="/image\i.jpeg" alt="img2" />
                <img src="/image\j.jpeg" alt="img3" />
                <img src="/image\o.jpeg" alt="img4" />
                <img src="/image\m.jpeg" alt="img5" />
            
              </div>
            </div>
          </div>
          <div className="new-carousel-primary">
            <div className="carousel-container">
              <div className="carousel-track track-left">
                <img src="/image\l.jpeg" alt="img1" />
                <img src="/image\k.jpeg" alt="img2" />
                <img src="/image\j.jpeg" alt="img3" />
                <img src="/image\i.jpeg" alt="img4" />
                <img src="/image\o.jpeg" alt="img5" />
                <img src="/image\g.jpeg" alt="img6" />
                <img src="/image\f.jpeg" alt="img7" />
                <img src="/image\e.jpeg" alt="img1" />
                <img src="/image\a.jpeg" alt="img2" />
                <img src="/image\n.jpeg" alt="img3" />
                <img src="/image\c.jpeg" alt="img4" />
                <img src="/image\d.jpeg" alt="img5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlimpsesNew;
