import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import AboutImg  from '../../../../public/assets/images/pages/new';
const About1 = () => {
    return (
        <section className="agk-about pt-80 ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="agk-content-box style-one mb-50 pf_fadeup">
                            <div className="section-title mb-20 text-md-start  text-center">
                                <span className="sub-title">Why Choose Us</span>
                                <h2 className='text-md-start text-center'>Faster, Smarter, More Reliable Releases with AI</h2>
                            </div>
                            <p className='text-md-start text-center'>At EvalonQA, we empower businesses to achieve faster, smarter, and more reliable software releases through AI-powered automation. We bridge the gap between human expertise and cutting-edge AI tools like Playwright, Cypress, GitHub Copilot, Claude Code, and Blackbox AI — enabling QA teams to execute regression cycles up to 60% faster, reduce flaky tests by 90%, and accelerate delivery by 2x.</p>
                           
                            <div className="agk-button mb-30 text-md-start text-center">
                                <Link href="/contact" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">Schedule a Call</span>
                                        <span className="text">Schedule a Call</span>
                                    </span>
                                </Link>
                            </div>
                            <ul>
                                <li className='d-block d-md-inline-block'>
                                    <div className="Agenko-counter-box style-one">
                                        <div className="content">
                                            <h2 className="mb-10 text-md-start text-center"><span className="count">240</span>+</h2>
                                            <p className='text-md-start text-center'>Automated Test Suites Delivered</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='d-block d-md-inline-block'>
                                    <div className="Agenko-counter-box style-one">
                                        <div className="content ">
                                            <h2 className="mb-10 text-md-start text-center"><span className="count">99</span>%</h2>
                                            <p className='text-md-start text-center'>Accuracy in AI-Driven Reports</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="agk-image-box style-one mb-50 pf_fadeup">
                            <div className="agk-image">
                                <Image 
                                    src="/assets/images/pages/new-images/about.jpeg" 
                                    alt="Evalon QA Platform" 
                                    width={440} 
                                    height={532} 
                                />
                            </div>
                            <div className="Agenko-experince-box style-one">
                                <h2><span>5</span>+</h2>
                                <p>Years in Smart QA Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
