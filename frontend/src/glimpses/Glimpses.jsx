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
              Glimpses <span className="text">of HACKFEST </span> <br />
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
                <img src="public\image\a.jpeg" alt="img1" />
                <img src="public\image\b.jpeg" alt="img2" />
                <img src="public\image\c.jpeg" alt="img3" />
                <img src="public\image\d.jpeg" alt="img4" />
                <img src="public\image\e.jpeg" alt="img5" />
                <img src="public\image\f.jpeg" alt="img6" />
                <img src="public\image\g.jpeg" alt="img7" />
                <img src="public\image\h.jpeg" alt="img1" />
                <img src="public\image\i.jpeg" alt="img2" />
                <img src="public\image\j.jpeg" alt="img3" />
                <img src="public\image\k.jpeg" alt="img4" />
                <img src="public\image\l.jpeg" alt="img5" />
              </div>
            </div>
          </div>
          <div className="new-carousel-primary">
            <div className="carousel-container">
              <div className="carousel-track track-left">
                <img src="public\image\l.jpeg" alt="img1" />
                <img src="public\image\k.jpeg" alt="img2" />
                <img src="public\image\j.jpeg" alt="img3" />
                <img src="public\image\i.jpeg" alt="img4" />
                <img src="public\image\h.jpeg" alt="img5" />
                <img src="public\image\g.jpeg" alt="img6" />
                <img src="public\image\f.jpeg" alt="img7" />
                <img src="public\image\e.jpeg" alt="img1" />
                <img src="public\image\a.jpeg" alt="img2" />
                <img src="public\image\b.jpeg" alt="img3" />
                <img src="public\image\c.jpeg" alt="img4" />
                <img src="public\image\d.jpeg" alt="img5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlimpsesNew;
