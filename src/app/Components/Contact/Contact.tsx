import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="Agenko-contact pt-130 pb-80">
        <div className="container">
          <div className="row">
            {/* Left Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info-wrapper mb-50 pf_fadeup">
                <div className="shape">
                  <span>
                    <Image
                      src="/assets/images/pages/shape/world.png"
                      alt="img"
                      width={306}
                      height={647}
                    />
                  </span>
                </div>
                <ul>
                  <li>
                    <div className="phone">
                      <a href="tel:+923361212123">+92 336 1212123</a>
                    </div>
                  </li>

                  <li>
                    <div className="Agenko-info-box">
                      <div className="content">
                        <h3>Address</h3>
                        <p>Office #402, Gulberg, Lahore, Pakistan</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="Agenko-info-box">
                      <div className="content">
                        <h3>Email</h3>
                        <p>
                          <a href="mailto:info@evalonqa.com">
                            info@evalonqa.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="Agenko-info-box">
                      <div className="content">
                        <h3>Website</h3>
                        <p>
                          <a
                            href="https://www.evalonqa.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.evalonqa.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="Agenko-info-box">
                      <div className="content">
                        <h3>Follow</h3>
                        <div className="social-link">
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-twitter-x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-lg-7">
              <div className="Agenko-content-box mb-50 pf_fadeup">
                <div className="section-title mb-20">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Schedule Your Consultation</h2>
                </div>
                <p className="mb-20">
                  Please complete the form below with your details to move
                  forward and choose a suitable time slot.
                </p>
                <form
                  className="Agenko-contact-form style-one"
                  id="contact-form"
                  action="contact.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </div>
                    </div>


                    <div className="col-lg-12">
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Message"
                        name="message"
                      ></textarea>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="d-block mb-2" style={{fontSize:"18px" , color:"white"}}>
                          <strong>Primary Interest</strong>
                        </label>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="interest1"
                            name="primary_interest"
                            value="Embedded Automation QA"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="interest1"
                          >
                            Embedded Automation QA
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="interest2"
                            name="primary_interest"
                            value="Embedded Manual QA"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="interest2"
                          >
                            Embedded Manual QA
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="interest3"
                            name="primary_interest"
                            value="Unsure / Other"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="interest3"
                          >
                            Unsure / Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="theme-btn">
                          Schedule a Call Now
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-message"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
