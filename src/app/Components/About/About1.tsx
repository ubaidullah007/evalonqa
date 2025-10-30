import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import AboutImg  from '../../../../public/assets/images/pages/new';
const About1 = () => {
    return (
        <section className="agk-about  pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="agk-content-box style-one mb-50 pf_fadeup">
                            <div className="section-title mb-20 text-md-start  text-center">
                                <span className="sub-title">About Us</span>
                                <h2 className='text-md-start text-center'>Empowering Quality Through Intelligent Automation</h2>
                            </div>
                            <p className='text-md-start text-center'>At <strong>Evalon QA</strong>, we simplify the way teams test and validate software using AI-driven insights and automation. Our platform enables faster, smarter, and more reliable testing without compromising on accuracy.</p>
                            <p className='text-md-start text-center'>From test creation to bug documentation, we combine innovation and expertise to help development teams achieve unmatched efficiency and product quality.</p>
                            <div className="agk-button mb-30 text-md-start text-center">
                                <Link href="#" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
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
