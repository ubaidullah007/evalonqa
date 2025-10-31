"use client";
import React from "react";



export default function ExplainGuide(data) {
  return (
    <section className="AIexplain-section pt-100 pb-100" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="AIsection-title mb-4 text-md-start text-center">
              <h2 className="text-white fw-bold">{data?.data?.title}</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="AItext-box text-md-start text-center mb-4">
              <p className="text-light">
                {data?.data?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {data?.data?.features.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="AIcard p-4 h-100 rounded shadow-sm text-white"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2c2c2c"
                }}
              >
                <div className="text-center mb-3">
                  <div
                    className="AIicon d-flex align-items-center justify-content-center mx-auto rounded mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                
                    }}
                  >
                    <i className={`${item.icon} display-5 text-white`}></i>
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                </div>
                <p className="text-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
