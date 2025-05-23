import React from "react";
import "../body/body.css";

function Body() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <img src="/image\sdc-logo-ByoIqf9u.png" alt="logo"></img>
        </div>
        <div className="item">
          <ul>
            <li>
              <a className="lgx-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="#themes">
                Themes
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="#prizes">
                Prizes
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="#teams">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="#faq">
                FAQ'<span className="text-lowercase">s</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="lgx-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="video">
        <div className="video-container">
          <video autoPlay muted loop id="background-video">
            <source src="/video\pirate_back.mov" type="video/mp4" />
          </video>
        </div>
        <div className="rec">
          <img src="/team\recbanda.jpeg"></img>
          <div className="devfolio-container">
            <a
              href="https://devfolio.co" // 🔁 Replace with your hackathon's Devfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="devfolio-button"
            >
              <img
                src="/image\dev.png"
                alt="Apply with Devfolio"
                className="devfolio-logo"
              />
              <span>Apply with Devfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
