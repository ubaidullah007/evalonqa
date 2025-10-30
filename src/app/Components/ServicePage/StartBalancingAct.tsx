import React from 'react';

const StartBalancingAct = (data : any) => {


    return (
        <section className="agk-service-ca pt-80 text-md-start text-center" style={{ backgroundColor: "#18191b" }}>
            <div className="container">
                {/* Header Section */}
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Our Service <span className="line"></span></span>
                            <h2>{data?.data?.title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-box float-lg-end pf_fadeup">
                            <p>
                               {data?.data?.desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="row justify-content-center pb-80">
                    {data?.data?.servicesDetail.map((service, index) => (
                        <div
                            key={service.id}
                            className={`col-lg-4 col-md-6 col-sm-12 margin-friendly ${
                                index === 1 ? 'mt-60' : index === 2 ? 'mt-120' : ''
                            }`}
                        >
                            <div className="Agenko-iconic-box style-four pf_fadeup text-white text-center p-4 rounded-3 ">
                                <div className="icon mb-4">
                                    <i className={`${service.icon} display-5 text-white`}></i>
                                </div>
                                <div className="content">
                                    <h4 className="title mb-3">{service.title}</h4>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartBalancingAct;
