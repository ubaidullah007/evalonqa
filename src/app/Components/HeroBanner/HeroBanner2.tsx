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
                            {/* Replaces the stock photo. Pure markup, so it costs
                                no image download, stays sharp at any density, and
                                shows what the company actually does. The run is
                                illustrative -- generic spec names, no client data.
                                role="img" + aria-label so assistive tech gets one
                                sensible summary instead of terminal fragments. */}
                            <div
                                className="qa-run pf_fadeup"
                                role="img"
                                aria-label="Illustration of a Playwright test run finishing with all tests passing"
                            >
                                <div className="qa-run__bar">
                                    <span className="qa-run__dot"></span>
                                    <span className="qa-run__dot"></span>
                                    <span className="qa-run__dot"></span>
                                    <span className="qa-run__file">evalon-qa — playwright</span>
                                </div>

                                <div className="qa-run__body" aria-hidden="true">
                                    <p className="qa-run__cmd">
                                        <span className="qa-run__prompt">$</span> npx playwright test
                                    </p>

                                    <ul className="qa-run__list">
                                        <li style={{ animationDelay: "0.15s" }}>
                                            <span className="qa-run__tick">✓</span>
                                            <span className="qa-run__spec">auth.spec.ts</span>
                                            <span className="qa-run__case">signs in with valid credentials</span>
                                            <span className="qa-run__ms">1.2s</span>
                                        </li>
                                        <li style={{ animationDelay: "0.5s" }}>
                                            <span className="qa-run__tick">✓</span>
                                            <span className="qa-run__spec">checkout.spec.ts</span>
                                            <span className="qa-run__case">applies a discount code</span>
                                            <span className="qa-run__ms">0.9s</span>
                                        </li>
                                        <li style={{ animationDelay: "0.85s" }}>
                                            <span className="qa-run__tick">✓</span>
                                            <span className="qa-run__spec">search.spec.ts</span>
                                            <span className="qa-run__case">returns ranked results</span>
                                            <span className="qa-run__ms">1.4s</span>
                                        </li>
                                        <li style={{ animationDelay: "1.2s" }}>
                                            <span className="qa-run__tick">✓</span>
                                            <span className="qa-run__spec">a11y.spec.ts</span>
                                            <span className="qa-run__case">no critical violations</span>
                                            <span className="qa-run__ms">2.1s</span>
                                        </li>
                                    </ul>

                                    <p className="qa-run__summary" style={{ animationDelay: "1.55s" }}>
                                        <span className="qa-run__pass">48 passed</span>
                                        <span className="qa-run__sep">·</span>
                                        <span>0 failed</span>
                                        <span className="qa-run__sep">·</span>
                                        <span>12.4s</span>
                                        <span className="qa-run__caret"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;