import React from "react";

import "../team/team.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamSection = () => {
  return (
    <section id="teams">
      <div className="container full-box">
        <div className="bgimage">
          <img className="image-team" src="/image\mtt_bg.png" />
          <div className="all">
          <div className="section_title">
            <h3
              className="title-dark"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Meet The Crew
            </h3>
          </div>

          <div className="section_title">
            <h4 className="title-dark clr-white">Team</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="team\jiwanshu.jpeg" alt="JIWANSHU" />
                <h2>JIWANSHU KUMAR</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/jiwanshu-%E2%80%8E-9b848725a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="team\achal.jpeg" alt="ACHAL" width="90%" />
                <h2>ACHAL CHAURASIYA</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/anchal-chaurasiya-693b53257/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="/team/nihal.jpeg" alt="NIHAL" width="90%" />
                <h2>NIHAL JAISWAL</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/nihal-jaiswal-908b52257/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="team\aditya.jpeg" alt="ADITYA" width="90%" />
                <h2>ADITYA SINGH</h2>
                <h6>
                  <a
                    href="-https://www.linkedin.com/in/aditya-singh-03bb48257
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="team\aman.jpeg" alt="AMAN" width="90%" />
                <h2>AMAN SHARMA</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/username5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="/team\adrash.jpeg" alt="ADARSH" width="90%" />
                <h2>ADARSH KUMAR SINGH</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/adarsh-kumar-singh-486b60257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img
                  src="/team\deepak.jpeg"
                  alt="Deepak Kanaujiya"
                  width="90%"
                />
                <h2>Deepak Kanaujiya</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/username8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img
                  src="/team\prajwal.jpeg"
                  alt="Prajjwal Srivastava"
                  width="90%"
                />
                <h2>Prajjwal Srivastava</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/prajjwal-srivastava-3a10a3258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="team-box">
                <img src="/team\Hrishabh.jpg" alt="hrishabh" width="90%" />
                <h2>Hrishabh Gupta</h2>
                <h6>
                  <a
                    href="https://www.linkedin.com/in/hrishabh-gupta-50442821a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
