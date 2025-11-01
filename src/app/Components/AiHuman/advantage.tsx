"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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

    // ✅ Updated & Rephrased Data
    const updatedData = {
        title: "Accountable, Aligned, Available: The US-Based Advantage",
        description: "Our entire engineering team is based in the United States, providing distinct advantages for collaboration and security.",
        highlights: [
            "Seamless Communication: Fluent English and cultural alignment minimize misunderstandings.",
            "Real-Time Collaboration: Work within your timezone for faster feedback loops and agile integration.",
            "Enhanced Security & IP Protection: Benefit from the accountability and legal framework of an onshore team."
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

                            {/* ✅ Dynamic Mapping for Highlights */}
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
                                    src={updatedData.secImg}
                                    className="rounded-2 object-fit-cover"
                                    alt="US-Based Team Advantage"
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
