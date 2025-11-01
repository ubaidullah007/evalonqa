import React from 'react';

const Skills = (data: any) => {

    const updatedData = {
        title: "Beyond Technical Skills: The LoopQA Difference",
        desc: "We hire and train for the traits that make engineers exceptional partners and effective AI users.",
        Skillslist: [
            {
                id: 1,
                icon: "bi bi-lightbulb", // example icon, replace if needed
                title: "Critical & Analytical Thinking",
                desc: "Ability to deeply understand systems, question assumptions, and devise insightful testing strategies, not just follow scripts."
            },
            {
                id: 2,
                icon: "bi bi-rocket",
                title: "Ambition & Adaptability",
                desc: "Driven to continuously learn, embrace new tools (like Cursor, LLMs), and proactively push for better processes."
            },
            {
                id: 3,
                icon: "bi bi-heart",
                title: "Emotional Intelligence",
                desc: "Strong communication, empathy, and collaboration skills to integrate seamlessly with your team."
            },
            {
                id: 4,
                icon: "bi bi-person-badge",
                title: "Mid/Senior Expertise",
                desc: "Focus on experienced engineers (mid/senior level) who bring mature judgment and problem-solving skills."
            },
        ]
    };

    return (
        <section className="agk-work-process pt-80 pb-50 text-md-start text-center bg-black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Quality Assurance Excellence</span>
                            <h2>{updatedData.title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-55 pf_fadeup">
                            <p>{updatedData.desc}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {updatedData.Skillslist.map((item) => (
                        <div key={item.id} className="col-xl-3 col-md-6 col-sm-12 mb-40 pf_fadeup">
                            <div className="Agenko-iconic-box style-two h-100 ">
                                <div className="icon iconic-box-center">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
