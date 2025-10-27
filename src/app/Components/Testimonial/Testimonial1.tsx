"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const Testimonial1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const testimonialContent = [
        {
          subtitle: "CTO – FinTech Startup",
          title: "Mr. Daniel Cooper",
          content:
            "Evalon QA revolutionized our testing pipeline. Their AI-powered automation detected issues early, saving us weeks of manual effort. The precision and adaptability of their platform made every release more reliable.",
        },
        {
          subtitle: "QA Lead – SaaS Company",
          title: "Ms. Emily Ross",
          content:
            "Partnering with Evalon QA has been a turning point for our QA team. Their intelligent test coverage suggestions and real-time insights helped us cut regression testing time by over 50%.",
        },
        {
          subtitle: "Product Manager – E-commerce Platform",
          title: "Mr. Ahmed Tariq",
          content:
            "Evalon QA’s smart testing framework gave us full confidence before every product launch. Their automation flow is seamless, and their AI-driven reporting simplifies complex test data like never before.",
        },
        {
          subtitle: "Engineering Director – HealthTech Company",
          title: "Ms. Laura Chen",
          content:
            "Evalon QA perfectly blends human expertise with AI innovation. Their context-aware automation helps us maintain compliance while improving speed and accuracy across all projects.",
        },
      ];
      

    return (
            <section className="agk-testimonial-ca gray-dark pt-130 pb-80">
                <div className="shape shape-one"><span></span></div>
                <div className="shape shape-two"><span></span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_fadeup">
                                <span className="sub-title">Testimonial</span>
                                <h2>Success Stories From Around the Globe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            
                            <div className="agk-image-box mb-50 pf_fadeup">
                                <div className="agk-image">
                                <Image src="/assets/images/pages/new-images/testimonial.jpg" alt="img" width={410} height={466}   style={{objectFit:"contain"  }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="agk-content-box mb-50 pf_fadeup">
                                <div className="fill-text">TESTIMONIAL</div>
                                <div className="testimonial-slider">
                                <Slider {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="Agenko-testimonial-item style-two">
                                        <div className="testimonial-content">
                                            <ul className="ratings">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <p>{item.content}</p>
                                            <div className="author-item">
                                                <div className="author-info">
                                                    <h4>{item.title}</h4>
                                                    <h5>{item.subtitle}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial1;