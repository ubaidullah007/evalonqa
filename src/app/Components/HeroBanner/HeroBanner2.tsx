import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
            <div className="hero-wrapper-two has-video">
                {/* Full-bleed background video. The site header is
                    position:absolute over the page, so the clip runs edge to
                    edge behind both the header and the hero copy. */}
                <video
                    className="hero-video"
                    src="/bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    tabIndex={-1}
                ></video>
                <span className="hero-video__scrim" aria-hidden="true"></span>

                <div className="shape circle-one"><span></span></div>
                <div className="shape circle-two"><span></span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-content">
                                <h1>
                                    <span className="text-anm text-md-start text-center ">Where Human QA Meets </span>
                                    <span className="text-anm text-md-start text-center d-block d-md-inline-block">AI Speed</span>
                                </h1>
                                <div className="pro">Pro</div>
                                <div className="text-box pf_fadeup text-md-start text-center">
                                    <p>
                                        <span>Evalon QA</span> blends expert human testers with advanced AI-driven automation to deliver faster, smarter, and more reliable software testing ensuring zero compromises in quality or precision.
                                    </p>
                                    <div className="hero-button d-flex justify-content-md-start justify-content-center">
                                        <Link href="/about-us" className="theme-btn style-one">
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
                                {/* next/image so this gets resized and served as
                                    webp/avif. The previous asset was a 6144x3456
                                    9.9MB JPEG dropped into a ~850px slot through a
                                    plain <img>, i.e. shipped at full size to every
                                    visitor. priority because it is the LCP element. */}
                                <Image
                                    src="/assets/images/pages/new-images/Machine-Learning.jpeg"
                                    alt="Abstract visualisation of data flowing through a validation pipeline"
                                    width={1408}
                                    height={768}
                                    priority
                                    sizes="(max-width: 991px) 100vw, 66vw"
                                    className="rounded-3"
                                    style={{ width: "100%", height: "auto" }}
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