"use client";
import React from 'react';

const Skills = (data: any) => {

    const updatedData = {
        title: "Beyond Code: The Evalon QA Mindset",
        desc: "At Evalon QA, we develop engineers who think critically, communicate clearly, and use AI as a true force multiplier—not just a shortcut.",
        Skillslist: [
            {
                id: 1,
                icon: "bi bi-lightbulb",
                title: "Analytical Depth",
                desc: "Engineers who dissect systems deeply, uncover hidden dependencies, and design test strategies grounded in logic and insight."
            },
            {
                id: 2,
                icon: "bi bi-rocket",
                title: "Growth and Agility",
                desc: "Driven professionals who adapt fast, explore new AI tools like Cursor and LLMs, and continuously refine testing efficiency."
            },
            {
                id: 3,
                icon: "bi bi-heart",
                title: "Collaborative Intelligence",
                desc: "Strong emotional awareness and communication that enable effortless teamwork, even across distributed environments."
            },
            {
                id: 4,
                icon: "bi bi-person-badge",
                title: "Experienced Precision",
                desc: "A team built around seasoned mid and senior engineers who bring technical depth, judgment, and reliability to every QA engagement."
            },
        ]
    };

    return (
        <section className="agk-work-process pt-80 pb-50 text-md-start text-center bg-black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Quality at Human Scale</span>
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
                            <div className="Agenko-iconic-box style-two h-100">
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
