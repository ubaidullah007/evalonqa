import React from 'react';

const StepProcess = (data : any) => {
    
    const steps = [
        {
            step: "Step 01",
            icon: "flaticon-search-user",
            title: "Discovery Call",
            desc: "A short introductory chat to understand your product, tech stack, challenges, and project goals."
        },
        {
            step: "Step 02",
            icon: "flaticon-vector",
            title: "Tailored Strategy",
            desc: "We create a customized QA roadmap and resource plan perfectly aligned with your timeline and budget."
        },
        {
            step: "Step 03",
            icon: "flaticon-implementation",
            title: "Seamless Integration",
            desc: "Our QA engineers integrate smoothly with your existing team, setup tools, and establish clear workflows."
        },
        {
            step: "Step 04",
            icon: "flaticon-exam",
            title: "Impact Delivery",
            desc: "We start delivering measurable quality improvements from day one, ensuring reliability and speed."
        }
    ];

    return (
        <section className="agk-process pt-70 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-60 pf_zoomIn">
                            <span className="sub-title">Our Simple Startup Engagement</span>
                            <h2>{data?.data?.title}</h2>
                        </div>
                    </div>
                </div>

                <div className="agk-process-wrapper pf_fadeup">
                    <div className="process-line"></div>
                    <div className="row">
                        {data?.data?.steps.map((item, index) => (
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

export default StepProcess;
