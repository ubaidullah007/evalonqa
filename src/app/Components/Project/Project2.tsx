import Link from 'next/link';
import React from 'react';

const Project2 = () => {

  const chooseContent = [
    {
      img: '/assets/images/pages/new-images/AI-power.jpeg',
      title: 'AI-Powered Automation Suite',
      cat1: 'Artificial Intelligence',
      cat2: 'Automation'
    },
    {
      img: '/assets/images/pages/new-images/smart.jpeg',
      title: 'Smart Analytics Dashboard',
      cat1: 'Data Intelligence',
      cat2: 'Visualization'
    },
    {
      img: '/assets/images/pages/new-images/Workflow.jpeg',
      title: 'Cognitive Workflow Manager',
      cat1: 'AI Systems',
      cat2: 'Productivity Tools'
    },
    {
      img: '/assets/images/pages/new-images/Machine-Learning.jpeg',
      title: 'Machine Learning Bug Tracker',
      cat1: 'Deep Learning',
      cat2: 'App Interface'
    }
  ];

  return (
    <section className="agk-project pt-130 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title mb-60 pf_fadeup   text-md-start text-center">
              <span className="sub-title">AI Guide</span>
              <h2>
                Explore Our Intelligent<br />AI-Powered Innovations
              </h2>
              <p>
                Discover how our advanced AI-driven solutions transform ideas into smart, scalable, and efficient digital systems that redefine automation and analytics.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="agk-button  text-md-start text-center mb-60 float-lg-end pf_fadeup">
              <Link href="#" className="theme-btn style-one">
                <span className="text-flip">
                  <span className="text">Explore More</span>
                  <span className="text">Explore More</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="Agenko-project-item  text-md-start text-center style-one mb-45 pf_fadeup">
                <div className="thumbnail">
                  <img src={item.img} alt="AI Project" />
                  <div className="project-button">
                    <Link href="#">
                      <i className="bi bi-plus-lg"></i>
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="project-categories">
                    <a href="#">{item.cat1}</a>
                    <a href="#">{item.cat2}</a>
                  </div>
                  <h4 className="title">
                    <Link href="#">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project2;
