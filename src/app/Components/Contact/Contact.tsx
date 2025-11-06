"use client";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Contact = () => {

  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      primary_interest: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
      primary_interest: Yup.string().required("Please select an interest"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setStatus("Sending...");
      try {
        const res = await fetch("/api/sendMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setStatus("Message sent successfully!");
          resetForm();
        } else {
          setStatus("Failed to send message. Try again later.");
        }
      } catch (error) {
        setStatus("An error occurred. Please try again.");
      }
    },
  });



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
                  <h2>Schedule Your Consultation</h2>
                </div>
                <p className="mb-20">
                  Please complete the form below with your details to move forward and
                  choose a suitable time slot.
                </p>

                <form onSubmit={formik.handleSubmit} className="Agenko-contact-form style-one">
                  <div className="row">
                    {/* Name */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form_control"
                          {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <small className="text-danger contact-error">{formik.errors.name}</small>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form_control"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <small className="text-danger contact-error">{formik.errors.email}</small>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form_control"
                          {...formik.getFieldProps("subject")}
                        />
                        {formik.touched.subject && formik.errors.subject && (
                          <small className="text-danger contact-error">{formik.errors.subject}</small>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-lg-12">
                      <textarea
                        rows={3}
                        name="message"
                        placeholder="Message"
                        className="form_control"
                        {...formik.getFieldProps("message")}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <small className="text-danger contact-error">{formik.errors.message}</small>
                      )}
                    </div>

                    {/* Radio Buttons */}
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label className="d-block mb-2" style={{ fontSize: "18px", color: "white" }}>
                          <strong>Primary Interest</strong>
                        </label>

                        {["Embedded Automation QA", "Embedded Manual QA", "Unsure / Other"].map((interest, i) => (
                          <div className="form-check" key={i}>
                            <input
                              type="radio"
                              id={`interest${i}`}
                              name="primary_interest"
                              value={interest}
                              className="form-check-input"
                              checked={formik.values.primary_interest === interest}
                              onChange={formik.handleChange}
                            />
                            <label className="form-check-label" htmlFor={`interest${i}`}>
                              {interest}
                            </label>
                          </div>
                        ))}

                        {formik.touched.primary_interest && formik.errors.primary_interest && (
                          <small className="text-danger contact-error">{formik.errors.primary_interest}</small>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="theme-btn" disabled={status === "Sending..."}>
                          {status === "Sending..." ? "Sending..." : "Schedule a Call Now"}
                        </button>
                      </div>
                    </div>

                    {/* Status Message */}
                    {status && (
                      <div className="col-lg-12">
                        <div className="form-message text-white">{status}</div>
                      </div>
                    )}
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
