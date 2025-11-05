import React from "react";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";

import SOftwareTesting from "../../../../../public/assets/images/pages/new-images/software-testing.webp";


const data =  {
    servicetitle: "custom-non-traditional",
    infoSection: {
        title: "Empower Your Internal Software with Professional QA",
        desc: "You’re the expert in your business — let us be the experts in your software quality. Our AI-driven QA ensures your internal systems perform reliably without disrupting operations."
    },

    DetailSec: {
        title: "The Internal Software Quality Challenge",
        desc: "As internal tools evolve, maintaining consistent quality becomes harder. Bugs, regressions, and ad-hoc testing can slow teams down and affect productivity. We bring clarity, structure, and confidence back to your releases.",
        servicesDetail: [
            {
                id: 1,
                title: "Structured Test Planning",
                desc: "Define clear, scalable QA processes for unit, integration, and user acceptance testing — customized for your software and workflow.",
                icon: "bi bi-list-check"
            },
            {
                id: 2,
                title: "AI-Powered Test Automation",
                desc: "Integrate intelligent automation where it delivers the best ROI, minimizing manual effort while ensuring thorough coverage.",
                icon: "bi bi-cpu"
            },
            {
                id: 3,
                title: "Transparent Bug Tracking",
                desc: "Implement standardized reporting workflows to identify, log, and resolve issues faster across all your internal applications.",
                icon: "bi bi-bug"
            }
        ]
    },

    benifits: {
        subtitle: "Intelligent QA for Internal Software",
        title: "Enhancing Reliability and Efficiency Across Your Operations",
        desc: "We combine proven QA strategies, AI tools, and practical expertise to strengthen the performance and stability of your internal systems — so your teams can stay focused on innovation.",
        benefitslist: [
            {
                id: 1,
                title: "Domain-Aware Testing",
                desc: "We take the time to understand your business operations, ensuring QA is relevant and aligned with your actual workflows.",
                icon: "bi bi-briefcase"
            },
            {
                id: 2,
                title: "Streamlined Collaboration",
                desc: "Our US-based QA experts integrate smoothly into your team, communicating clearly and working in your timezone.",
                icon: "bi bi-people"
            },
            {
                id: 3,
                title: "Process Optimization",
                desc: "We refine your testing approach with scalable methodologies, empowering your developers to focus on building rather than debugging.",
                icon: "bi bi-gear"
            },
            {
                id: 4,
                title: "Long-Term Enablement",
                desc: "We build sustainable QA capabilities within your team, ensuring consistent quality and faster delivery over time.",
                icon: "bi bi-lightbulb"
            }
        ],
    },

    ServiceList: {
        title: "Your Quality Partner, Not Just a Vendor",
        highlights: [
            "We understand your domain — ensuring every test aligns with real business needs.",
            "Smooth communication and timezone alignment for effortless collaboration.",
            "We focus on implementing QA practices that fit your culture and capacity.",
            "Our goal is to deliver immediate impact while enabling long-term growth.",
            "Practical, effective, and aligned with your existing tools and teams."
        ],
        secImg: SOftwareTesting
    },

 Strategy: {
    title: "Simple Steps to Build Quality Into Your Software",
    steps: [
        {
            step: "Step 01",
            icon: "flaticon-search-user",
            title: "Understand Your Context",
            desc: "We analyze your business goals, software ecosystem, and current quality challenges to define the right direction."
        },
        {
            step: "Step 02",
            icon: "flaticon-vector",
            title: "Design the QA Plan",
            desc: "We outline a practical QA roadmap with clear priorities, timelines, and measurable success criteria."
        },
        {
            step: "Step 03",
            icon: "flaticon-implementation",
            title: "Integrate & Execute",
            desc: "Our QA specialists integrate seamlessly with your team to implement processes and start improving quality fast."
        },
        {
            step: "Step 04",
            icon: "flaticon-growth",
            title: "Refine & Scale",
            desc: "We monitor outcomes, refine strategies, and scale QA efforts to continuously enhance software reliability."
        }
    ],
},


    cta: {
        title: "Ensure Your Software’s Success with Expert QA",
        desc: "Let’s bring structure, speed, and confidence to your internal development process. Partner with our team to elevate quality and free your developers to innovate.",
        btnText: "Start Your QA Partnership"
    }
}

const ServicePage = async () => {
  return (
    <>
      <Banner data={data.infoSection} />
      <StartBalancingAct data={data.DetailSec} />
      <Benifits data={data.benifits} />
      <ServicePoint data={data.ServiceList} />
      <StepProcess data={data.Strategy} />
      <CTA data={data.cta} />
    </>
  );
};

export default ServicePage;
