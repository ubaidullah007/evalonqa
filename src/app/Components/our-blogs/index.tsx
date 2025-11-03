"use client";
import React from 'react';
import Link from 'next/link';

const Banner = ({title , desc}) => {
    return (
        <div>
            <section className="mt-80 pb-80 bg-black">
                <div className="shape shape-circle1"><span></span></div>
                <div className="shape shape-circle2"><span></span></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="page-content text-md-start text-center">
                                <h1 className="mb-30 services_title">
                                    {title}
                                </h1>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-center">
                                            <div className="text" style={{ fontSize: "22px" }}>
                                                <p>
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-button mt-40 d-flex justify-content-md-start justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
