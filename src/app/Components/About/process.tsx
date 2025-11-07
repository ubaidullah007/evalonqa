import React from 'react';

const Process = (data : any) => {
    
  const steps = [
  {
    step: "01",
    icon: "bi bi-chat-dots",
    title: "Discovery Call",
    desc: "We begin with a brief consultation to understand your goals, tech stack, challenges, and project scope."
  },
  {
    step: "02",
    icon: "bi bi-diagram-3",
    title: "Tailored Strategy",
    desc: "Our experts design a customized QA roadmap and resourcing plan aligned with your timeline and objectives."
  },
  {
    step: "03",
    icon: "bi bi-people",
    title: "Seamless Integration",
    desc: "Evalon QA engineers embed directly with your team, syncing tools, workflows, and communication channels."
  },
  {
    step: "04",
    icon: "bi bi-rocket-takeoff",
    title: "Impact Delivery",
    desc: "We deliver measurable quality improvements from day one, ensuring reliability, speed, and scalability."
  }
]


    return (
        <section className="agk-process pt-70 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-60 pf_zoomIn">
                            <span className="sub-title">Working Process</span>
                            <h2>Our Collaboration Process</h2>
                        </div>
                    </div>
                </div>

                <div className="agk-process-wrapper pf_fadeup">
                    <div className="process-line"></div>
                    <div className="row">
                        {steps.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                <div className="agk-process-box">
                                    <div className="Agenko-step">{item.step}</div>
                                    <div className="Agenko-iconic-box style-five mb-40">
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="content">
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
