"use client"
import React from "react"

export default function OurMissionValues() {
  return (
    <section className="mi-mission-values-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          {/* Our Mission */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mi-content-box p-4 h-100 ">
              <h2 className="mi-section-title mb-3 text-md-left text-center">Our Mission</h2>
              <p className="mb-3 text-md-left text-center">
                At <strong>Evalon QA</strong>, our mission is to redefine software quality through
                intelligent automation. We empower QA teams to deliver faster, more stable, and
                smarter releases by combining the precision of AI with the insight of human expertise.
              </p>
              <ul className="list-unstyled mi-mission-list">
                <li className=""><i className="bi bi-lightning-charge"></i> Accelerate test execution by up to 60%</li>
                <li><i className="bi bi-cpu"></i> Leverage AI to optimize testing efficiency and reliability</li>
                <li><i className="bi bi-people"></i> Empower teams to focus on innovation over repetition</li>
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div className="col-lg-6">
            <div className="mi-content-box p-4 h-100 ">
              <h2 className="mi-section-title mb-3 text-md-left text-center">Our Values</h2>
              <p className="mb-3 text-md-left text-center">
                Our principles guide every decision we make and every test we run.
                At <strong>Evalon QA</strong>, we value innovation, accountability, and a relentless pursuit of quality.
              </p>
              <ul className="list-unstyled mi-values-list">
                <li className=" text-lg-left d-block d-lg-flex"><i className="bi bi-bullseye"></i> <strong>Accountability</strong> - We ensure every result is traceable and impactful.</li>
                <li className=" text-lg-left d-block d-lg-flex"><i className="bi bi-shield-check"></i> <strong>Integrity</strong> - We build trust through transparency and reliability.</li>
                <li className=" text-lg-left d-block d-lg-flex"><i className="bi bi-lightbulb"></i> <strong>Innovation</strong> - We constantly evolve to stay ahead of technology trends.</li>
                <li className=" text-lg-left d-block d-lg-flex"><i className="bi bi-gear-wide-connected"></i> <strong>Efficiency</strong> - We simplify testing, reducing waste and increasing performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
