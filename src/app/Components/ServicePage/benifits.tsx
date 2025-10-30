import React from 'react';

const Benefits = (data : any) => {


    return (
        <section className="agk-work-process pt-80 pb-50 text-md-start text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Quality Assurance Excellence</span>
                            <h2>{data?.data?.title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-55 pf_fadeup">
                            <p>{data?.data?.desc}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {data?.data?.benefitslist.map((item, index) => (
                        <div key={item.id} className="col-xl-3 col-md-6 col-sm-12 mb-40 pf_fadeup">
                            <div className="Agenko-iconic-box style-two h-100 ">
                                <div className="icon iconic-box-center">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
