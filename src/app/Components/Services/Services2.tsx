import Link from 'next/link';
import React from 'react';

const Services2 = () => {
    return (
        <section className="agk-services gray-dark pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-65 pf_fadeup text-md-start text-center">
                            <span className="sub-title">Our Services</span>
                            <h2>Smart QA Solutions for Every Stage of Growth</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup">
                            <p>
                                Evalon QA delivers flexible, AI-enhanced testing solutions designed for startups, enterprises, and everything in between.
                                Our experts ensure precision, scalability, and speed no matter your industry or development stage.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row text-md-start text-center">
                    <div className="col-lg-12">
                        <div className="Agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title text-md-start text-center w-100 d-flex justify-content-md-start justify-content-center">
                                <div className="sn-number">01</div>
                                <h3 className="title">Startups</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Tailored <span>QA solutions</span> crafted for high-velocity startups focused on rapid iteration, user feedback, and
                                    achieving strong product-market fit without compromising software quality.
                                </p>
                            </div>
                            <div className="card-button m-auto m-md-0">
                                <Link href="#" className="theme-btn style-one" style={{width:"max-content"}}>
                                    <span className="text-flip">
                                        <span className="text">READ MORE</span>
                                        <span className="text">READ MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="Agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title text-md-start text-center w-100 d-flex justify-content-md-start justify-content-center">
                                <div className="sn-number">02</div>
                                <h3 className="title">Non-Traditional</h3>
                            </div>
                            <div className="content">
                                <p>
                                    From law firms to educational institutions and non-tech businesses expanding into digital products,
                                    we provide adaptive QA frameworks that ensure performance, reliability, and user trust.
                                </p>
                            </div>
                            <div className="card-button m-auto m-md-0">
                                <Link href="#" className="theme-btn style-one" style={{width:"max-content"}}>
                                    <span className="text-flip">
                                        <span className="text">READ MORE</span>
                                        <span className="text">READ MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="Agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title text-md-start text-center w-100 d-flex justify-content-md-start justify-content-center">
                                <div className="sn-number">03</div>
                                <h3 className="title">Legacy Systems</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Expert <span>quality assurance</span> for established enterprises modernizing or migrating complex legacy systems.
                                    We maintain stability and precision throughout your digital transformation.
                                </p>
                            </div>
                            <div className="card-button m-auto m-md-0">
                                <Link href="#" className="theme-btn style-one" style={{width:"max-content"}}>
                                    <span className="text-flip">
                                        <span className="text">READ MORE</span>
                                        <span className="text">READ MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="Agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title text-md-start text-center w-100 d-flex justify-content-md-start justify-content-center">
                                <div className="sn-number">04</div>
                                <h3 className="title">Dev Shops</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Seamlessly integrate our <span>QA engineers</span> into your agency’s workflow to enhance client deliverables,
                                    accelerate testing cycles, and ensure consistent software excellence.
                                </p>
                            </div>
                            <div className="card-button m-auto m-md-0">
                                <Link href="#" className="theme-btn style-one" style={{width:"max-content"}}>
                                    <span className="text-flip">
                                        <span className="text">READ MORE</span>
                                        <span className="text">READ MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;
