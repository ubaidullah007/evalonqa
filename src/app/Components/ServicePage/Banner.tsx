
import React from 'react';
import Link from 'next/link';

const Banner = (data : any) => {
    return (
        <div>

            <section className="mt-80 pb-80 ">
                <div className="shape shape-circle1"><span></span></div>
                <div className="shape shape-circle2"><span></span></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">

                            <div className="page-content text-md-start text-center">
                                <h1 className=" mb-30 services_title">{data.data.title}</h1>
                                <div className="row">
                                    <div className="col-xl-12">

                                        <div className=" d-flex align-items-center">

                                            <div className="text" style={{ fontSize: "22px" }}>
                                                <p >{data.data?.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="hero-button mt-40 d-flex justify-content-md-start justify-content-center">
                                    <Link href="#" className="theme-btn style-one">
                                        <span className="text-flip">
                                            <span className="text">Get Your Startup QA Blueprint</span>
                                            <span className="text">Get Your Startup QA Blueprint</span>
                                        </span>
                                    </Link>
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