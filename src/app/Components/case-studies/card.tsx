"use client";
import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "../VideoModal/VideoModal";

const TestimonialsSection = () => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  // ✅ Internal array (no props)
const testimonials = [
  {
    name: "Emily Ross",

    designation: "CEO at Averin Labs",
    company: "CEO at Averin Labs",
    quote:
      "Working with Evalon QA has been an outstanding experience. Their ability to adapt and scale with our testing needs made a huge difference for every startup I’ve worked with. I’ve partnered with Evalon QA multiple times throughout my career, and every single time they’ve delivered exceptional quality, speed, and reliability. They’re more than a testing service — they’re a true partner in product success.",
    thumbnail: "/assets/images/pages/new-images/evalontestimonial-two.png",
    logo: "/images/qoreboard-logo.png",
    videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  },
  {
    name: "Daniel Parker",
    designation: "Product Manager at Nexora Systems",
    company: "LOOP",
    quote:
      "Evalon QA completely transformed how we approached quality assurance. Their expert team made it simple to scale testing across multiple product releases, all while maintaining precision and speed. Their flexibility and proactive communication have made them an invaluable extension of our in-house development process.",
    thumbnail: "/assets/images/pages/new-images/evalontestimonial.png",
    logo: "/images/loop-logo.png",
    videoUrl: "https://www.youtube.com/embed/3fumBcKC6RE",
  },
];


  const handleClick = (url) => {
    setIframeSrc(url);
    setToggle(true);
  };

  const handleClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container bg-dark">
        <div className="row justify-content-center  d-flex flex-wrap">
          {testimonials.map((data, index) => (
            <div
              className="col-md-6 col-lg-5 d-flex align-items-stretch mb-4"
              key={index}
            >
              <div className="testimonial-card bg-dark text-light rounded-3 shadow-lg overflow-hidden w-100 d-flex flex-column">
                {/* Video Section */}
                <div className="position-relative">
                  <Image
                    src={data.thumbnail}
                    width={800}
                    height={450}
                    alt="Testimonial Video"
                    className="img-fluid w-100"
                  />
                  <div
                    onClick={() => handleClick(data.videoUrl)}
                    className="play-btn position-absolute top-50 start-50 translate-middle rounded-circle text-white d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      cursor: "pointer",
                      boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                      backgroundColor:"#6cffff5e !important"
                    }}
                  >
                    <i className="bi bi-play-fill fs-2"></i>
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center mb-3">
                      {/* <Image
                        src={data.logo}
                        width={40}
                        height={40}
                        alt="Company Logo"
                        className="me-2"
                      /> */}
                      <h6 className="m-0 text-uppercase text-muted">
                        {data.company}
                      </h6>
                    </div>
                    <p className="fst-italic text-light opacity-75 mb-3">
                      "{data.quote}"
                    </p>
                  </div>

                  <div>
                    <h5 className="fw-bold text-white mb-0">{data.name}</h5>
                    <small className="text-secondary">{data.designation}</small>
                    <div className="mt-3">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(data.videoUrl);
                        }}
                        className="text-decoration-none"
                      >
                        <i className="bi bi-camera-video me-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handleClose}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
