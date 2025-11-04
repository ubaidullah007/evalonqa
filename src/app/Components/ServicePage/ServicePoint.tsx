"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicePoint = (data) => {
     console.log( data , "data" )
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

    // ✅ Rephrased bullet points (mapped dynamically)
    return (
        <section className="agk-who-we gray-dark pt-80 text-md-start text-center pb-70">
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-xl-6">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <h2>{data?.data?.title}</h2>
                            </div>

                            {/* ✅ Dynamic Mapping for Highlights */}
                            <ul className="check-list style-one mb-40">
                                {data?.data?.highlights.map((point, index) => (
                                    <li className='text-start' key={index}>
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
                                    src={data?.data?.secImg}
                                    className="rounded-2 object-fit-cover"
                                    alt="Digital Agency"
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

export default ServicePoint;
