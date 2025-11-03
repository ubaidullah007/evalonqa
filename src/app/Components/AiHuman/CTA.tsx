import Link from "next/link";
import React from "react";

const CTA = (data) => {
  return (
    <section className="cta-dark-section text-center text-white py-5">
      <div className="container">
        <h2 className="cta-title mb-3">
          Work With QA Engineers Who Think Beyond Automation.
        </h2>
        <p className="cta-desc mb-4">
          Partner with Evalon QA to combine advanced AI testing tools with
          human expertise, ensuring every release is smarter, faster, and
          flawlessly executed.
        </p>
        <Link href="#contact" className="btn btn-cta">
          Start Your QA Transformation
        </Link>
      </div>
    </section>
  );
};

export default CTA;
