import React from "react";

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
                    <a href="#home" className="lgx-scroll">
                      <img
                        src="assets/img/logo7_b.png"
                        width="300"
                        alt="Logo"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>

                {/* Venue Info */}
                <div className="col-md-3 address_footer">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Venue</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.580254099303!2d77.1160121747764!3d28.732087675610426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1694593915477!5m2!1sen!2sin"
                      width="100%"
                      height="150"
                      style={{
                        border: "none",
                        borderRadius: "0.4rem",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Venue Location"
                    ></iframe>
                    <p style={{ color: "#45b6b6" }}>
                      <b>November 2024</b>
                    </p>
                    <a
                      href="https://goo.gl/maps/TzNt7TZ2tLfWApzF7"
                      className="lgx-scroll resource_color"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shaheed Sukhdev College of Business Studies
                    </a>
                  </div>
                </div>

                {/* Resources & Archives */}
                <div className="col-md-2">
                  <div className="lgx-footer-single">
                    <h3 className="footer-title">Resources</h3>
                    <a
                      href="assets/docs/hackCBS_proposal_7.pdf"
                      target="_blank"
                      className="resource_color"
                      rel="noopener noreferrer"
                    >
                      Sponsorship Brochure
                    </a>
                    <h3 className="footer-title">Archives</h3>
                    {[2, 3, 4, 5, 6].map((num) => (
                      <div key={num}>
                        <a
                          href={`https://v${num}.hackcbs.tech`}
                          target="_blank"
                          className="resource_color"
                          rel="noopener noreferrer"
                        >
                          hackCBS {num}.0
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
                      href="http://bit.ly/hackcbs_discord"
                      target="_blank"
                      className="resource_color"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-discord" aria-hidden="true"></i> Discord
                    </a>
                    <br />
                    <a
                      href="https://t.me/joinchat/LlOuzVQ1_GSIbQ8oodUOwQ"
                      target="_blank"
                      className="resource_color"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram" aria-hidden="true"></i> Telegram
                    </a>
                    <br />
                    <a
                      href="https://github.com/hackcbs"
                      target="_blank"
                      className="resource_color"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" aria-hidden="true"></i> Github
                    </a>
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
                          href: "https://www.facebook.com/hackcbs/",
                          icon: "facebook-f",
                        },
                        {
                          href: "https://www.twitter.com/hackcbs/",
                          icon: "twitter",
                        },
                        {
                          href: "https://www.instagram.com/hackcbs/",
                          icon: "instagram",
                        },
                        {
                          href: "https://www.linkedin.com/company/hackcbs",
                          icon: "linkedin-in",
                        },
                        {
                          href: "http://bit.ly/hackCBS-YouTube",
                          icon: "youtube",
                        },
                      ].map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
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
                      href="https://github.com/ItsMuskanGoyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Designed with ❤️ by Team hackCBS
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
