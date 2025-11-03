"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import AIImage from '../../../../public/assets/images/pages/new-images/about.jpeg';

const Advantage = (data) => {
    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
        setToggle(!toggle);
    };

    const handleClose = () => {
        setIframeSrc('about:blank');
        setToggle(!toggle);
    };

    // ✅ Rephrased & Optimized Content
    const updatedData = {
        title: "Dependable, Connected, Local. The Evalon QA Edge",
        description: "Our engineering operations are entirely US-based, ensuring seamless coordination, strong communication, and enhanced project security for every client engagement.",
        highlights: [
            "Clear Communication: Work effortlessly with fluent, culturally aligned engineers who understand your business context.",
            "Synchronized Collaboration: Stay in sync with a team operating in your timezone for faster iteration and immediate feedback.",
            "Security and IP Confidence: Rely on the robust legal and privacy protections that come with a fully onshore engineering team."
        ],
        secImg: data?.data?.secImg || "/placeholder.jpg" // fallback image
    };

    return (
        <section className="agk-who-we gray-dark pt-80 text-md-start text-center pb-70">
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-xl-6">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <h2>{updatedData.title}</h2>
                            </div>

                            <p className="mb-40">{updatedData.description}</p>

                            {/* ✅ Dynamic Highlights */}
                            <ul className="check-list style-one mb-40">
                                {updatedData.highlights.map((point, index) => (
                                    <li key={index}>
                                        <i className="bi bi-check2-circle"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-xl-6">
                        <div className="agk-play-image-box mb-50 pf_fadeup">
                            <div className="agk-image style-four">
                                <Image
                                    src={AIImage}
                                    className="rounded-2 object-fit-cover"
                                    alt="Evalon QA US-Based Team Advantage"
                                    width={743}
                                    height={380}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
