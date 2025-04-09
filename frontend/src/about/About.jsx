import React from "react";
import "../about/about.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  return (
    <section className="pb100 pt100" id="about">
      <div className="container">
        <div className="row">
          <div className="section_title">
            <h3 className="title-dark">About the event</h3>
          </div>
          <div className="col-6 mt-3 pt-1">
            <div id="about-div">
              <p>
                HackFest 2.0 – The Ultimate Tech Showdown at REC Banda!is
                <b>Rajkiya Engineering College Banda</b>s most technical and
                biggest hackathon aimed at fostering innovation, creativity, and
                problem-solving among students. This hackathon provides a
                platform for aspiring developers, designers, and entrepreneurs
                to collaborate and build solutions to real-world challenges.
              </p>
              <br />

              <p>
                Objectives of HackFest 2.0 ● Encourage students to develop
                practical solutions for real-world problems. ● Foster teamwork
                and collaboration in a competitive environment. ● Provide a
                platform for students to enhance their technical skills and
                network with experts. ● Introduce students to hackathon culture
                and hands-on project development.
              </p>
              <br />
              <p>
                <b>COMING SOON...</b>
              </p>
            </div>
            </div>
            <div
              className="col-6 text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src="/image\ship.png"
                alt="Event Ship Image"
                className="img-fluid medium-ship"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
