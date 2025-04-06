import React from "react";
import "./index.css"

const Footer = () => {
  return (
    <footer>
      <div id="lgx-footer" className="lgx-footer">
        <div className="lgx-inner-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="lgx-footer-area d-flex flex-wrap">
                {/* Logo Section */}
                <div className="col-md-3" style={{ padding: "0px" }}>
                  <div className="lgx-footer-single text-center">
                    <a href="/" className="lgx-scroll">
                      <img
                        src="image\sdc-logo-ByoIqf9u.png"
                        width="300"
                        alt="Logo"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                {/* Resources & Archives */}
                <div className="col-md-2">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Archives</h3>
                    {[1].map((num) => (
                      <div key={num}>
                        <a
                          href="https://sdc-rec-banda.netlify.app/hackfest"
                          target="_blank"
                          className="resource_color"
                          rel="noopener noreferrer"
                        >
                          HACKFEST {num}.0
                        </a>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Links */}
                <div className="col-md-1">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Community</h3>
                    <a
                      href="https://sdc-rec-banda.netlify.app/"
                      target="_blank"
                      className="resource_color"
                    >
                       Discord
                    </a>
                    <br />
                    <br />
                  </div>
                </div>

                {/* Social Media */}
                <div className="col-md-3 social" style={{ padding: "0 3vw" }}>
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Social Connection</h3>
                    <p className="text">Follow us for latest updates:</p>
                    <ul className="list-inline lgx-social-footer">
                      {[
                        {
                          href: "",
                          icon: "facebook-f",
                        },
                        {
                          href: "",
                          icon: "twitter",
                        },
                        {
                          href: "https://www.instagram.com/student_developer_club/",
                          icon: "instagram",
                        },
                        {
                          href: "https://www.linkedin.com/company/78729859/admin/dashboard/",
                          icon: "linkedin-in",
                        },
                      ].map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.href}
                            target="_blank"
                          >
                            <i className={`fab fa-${social.icon}`} aria-hidden="true"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom Line */}
            <div className="row">
              <div className="footer-text-container w-100">
                <hr />
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h5 style={{ color: "white", textAlign: "center" }}>
                    <a
                      href="https://github.com/adi-singh123"
                      target="_blank"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Designed with ❤️ by Team HACKFEST
                    </a>
                  </h5>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
