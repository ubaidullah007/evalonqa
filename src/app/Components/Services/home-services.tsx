"use client";
import React from "react";

// Import icons
import AI from "../../../../public/assets/images/pages/new-images/AI-Driven.svg";
import Cursor from "../../../../public/assets/images/pages/new-images/Cursor.svg";
import AIOutput from "../../../../public/assets/images/pages/new-images/Ai-output.svg";
import InHouse from "../../../../public/assets/images/pages/new-images/in-output.svg";
import Secure from "../../../../public/assets/images/pages/new-images/secure.svg";
import QATraining from "../../../../public/assets/images/pages/new-images/qatesting.svg";
import Image from "next/image";

const features = [
  {
    icon: AI,
    title: "AI-Powered Test Generation",
    description:
      "Evalon QA leverages intelligent automation and context-aware AI models to scan your codebase and create fully optimized, accurate, and ready-to-run test suites."
  },
  {
    icon: Cursor,
    title: "Cursor Workflow Enhancement",
    description:
      "Our QA professionals guide you in using Cursor tools efficiently, optimizing Ask-mode workflows to boost accuracy, speed, and productivity in test creation."
  },
  {
    icon: AIOutput,
    title: "AI Output Validation",
    description:
      "Evalon QA designs specialized agents that rigorously verify and benchmark AI-generated outputs, ensuring your models deliver consistent and trusted results."
  },
  {
    icon: InHouse,
    title: "Proprietary QA Toolset",
    description:
      "With our in-house Evalon QA frameworks, we automate issue detection, streamline refactoring, and significantly reduce turnaround time for testing cycles."
  },
  {
    icon: Secure,
    title: "Data-Safe QA Infrastructure",
    description:
      "Evalon QA safeguards every testing process through robust compliance, IP protection, and complete transparency in all operational workflows."
  },
  {
    icon: QATraining,
    title: "QA Upskilling & Enablement",
    description:
      "Beyond testing services, Evalon QA empowers your teams with hands-on training in AI-driven automation, scalable QA systems, and modern validation methods."
  }
];

export default function HomeServices() {
  return (
    <section className="py-5" style={{ backgroundColor: "#0a0a0a" }}>
      
      <div className="container">
             <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-65 pf_fadeup text-md-start text-center">
                            <span className="sub-title">Our Services</span>
                            <h2>Smart QA Solutions for Every Stage of Growth</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup text-md-start text-center">
                            <p>
                                Evalon QA delivers flexible, AI-enhanced testing solutions designed for startups, enterprises, and everything in between.
                                Our experts ensure precision, scalability, and speed no matter your industry or development stage.
                            </p>
                        </div>
                    </div>
                </div>
        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2c2c2c"
                }}
              >
                <div className=" mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded mr-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#ffffffff",
                      border: "1px solid #333"
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <br/>
                  <h5 className="mb-0 text-white">{item.title}</h5>
                </div>
                <p className=" mb-0 text-white" >{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
