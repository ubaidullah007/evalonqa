
import React from "react";

const CTA = (data) => {
  return (
    <section className="cta-dark-section text-center text-white py-5">
      <div className="container">
        <h2 className="cta-title mb-3">{data?.data?.title}</h2>
        <p className="cta-desc mb-4">
        {data?.data?.desc}
        </p>
        <a href="#contact" className="btn btn-cta">
      {data?.data?.btnText}
        </a>
      </div>
    </section>
  );
};

export default CTA;
