import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
            <div className="hero-wrapper-two">
                <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="img" width={50} height={50} style={{filter:"sepia(1)"}} /></span></div>
                <div className="shape shape-two"><span><Image className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="img" width={40} height={80} /></span></div>
                <div className="shape circle-one"><span></span></div>
                <div className="shape circle-two"><span></span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content">
                                <h1>
                                    <span className="text-anm">Where Human QA Meets </span>
                                    <span className="text-anm">AI Speed</span>
                                </h1>
                                <div className="pro">Pro</div>
                                <div className="text-box pf_fadeup">


                                    <p> <span>Evalon QA</span> blends expert human testers with advanced AI-driven automation to deliver faster, smarter, and more reliable software testing — ensuring zero compromises in quality or precision.</p>
                                    <div className="hero-button">
                                        <Link href="#" className="theme-btn style-one">
                                            <span className="text-flip">
                                                <span className="text">Read More</span>
                                                <span className="text">Read More</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="service-list pf_fadeup">
                                <li>
                                    <Link href="#ai-playwright" className="Agenko-iconic-box style-one">
                                        <div className="icon">
                                            <i className="bi bi-browser-edge"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">AI Enhanced Playwright</h4>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#smart-test-data" className="Agenko-iconic-box style-one">
                                        <div className="icon">
                                            <i className="bi bi-database"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Intelligent Test Data Generation</h4>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#cursor-usage" className="Agenko-iconic-box style-one">
                                        <div className="icon">
                                            <i className="bi bi-cursor"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Advanced Cursor Techniques</h4>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#ai-bug-docs" className="Agenko-iconic-box style-one">
                                        <div className="icon">
                                            <i className="bi bi-bug"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Automated Bug Reporting</h4>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <div className="hero-image style-one pf_fadeup">
                                <video
                                    src="/assets/images/pages/new-images/Bannervideo.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-100 rounded-3"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;