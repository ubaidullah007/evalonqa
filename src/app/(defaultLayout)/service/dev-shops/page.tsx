import React from "react";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";

import DevShops from "../../../../../public/assets/images/pages/new-images/devshops.jpg";


const data =  {
    infoSection: {
        title: "Transform Quality Into Client Satisfaction and Growth",
        desc: "Empower your development team with AI-driven QA that ensures flawless software delivery, strengthens client trust, and fuels business expansion."
    },

    DetailSec: {
        title: "The Cost of Overlooking Software Quality",
        desc: "Every undetected bug or missed regression can ripple across projects — impacting satisfaction, timelines, and profitability. We help you prevent these setbacks before they occur.",
        servicesDetail: [
            {
                id: 1,
                title: "Reduced Profit Margins",
                desc: "Frequent rework and bug fixes eat into development hours, increasing costs and shrinking project profitability.",
                icon: "bi bi-graph-down"
            },
            {
                id: 2,
                title: "Damaged Client Relationships",
                desc: "Unstable releases create frustration, lead to trust issues, and put future partnerships at risk.",
                icon: "bi bi-emoji-frown"
            },
            {
                id: 3,
                title: "Lost Growth Potential",
                desc: "Inconsistent quality limits your ability to win referrals, upsell new services, or secure larger contracts.",
                icon: "bi bi-bar-chart"
            }
        ]
    },

    benifits: {
        subtitle: "Smarter QA That Drives Client Success",
        title: "Deliver Reliable Software and Strengthen Every Partnership",
        desc: "We bring intelligent QA solutions powered by AI and process excellence to ensure your client projects are delivered on time, on budget, and with confidence.",
        benefitslist: [
            {
                id: 1,
                title: "Faster Testing Cycles",
                desc: "Accelerate delivery with AI-generated test cases and automated validation for quicker, more reliable feedback.",
                icon: "bi bi-lightning-charge"
            },
            {
                id: 2,
                title: "Precise Bug Detection",
                desc: "Identify high-risk areas and regressions early through intelligent analysis before they affect your clients.",
                icon: "bi bi-bug"
            },
            {
                id: 3,
                title: "Seamless Integration",
                desc: "We plug directly into your existing workflow and tools (Jira, Slack, CI/CD, Repos) for smooth, disruption-free collaboration.",
                icon: "bi bi-diagram-3"
            },
            {
                id: 4,
                title: "Collaborative Partnership",
                desc: "Consider us your embedded QA arm — adapting to your pace, aligning with your goals, and delivering measurable value.",
                icon: "bi bi-people"
            }
        ],
    },

    ServiceList: {
        title: "Deliver Quality That Grows Your Business",
        highlights: [
            "Deliver software that delights clients and inspires long-term trust.",
            "Protect project margins by minimizing costly rework and delays.",
            "Build a reputation for reliability that attracts repeat business and referrals.",
            "Expand your offerings with QA as a strategic, high-value service."
        ],
        secImg: DevShops
    },

    Strategy: {
        title: "How We Integrate QA Into Your Projects",
        steps: [
            {
                step: "Step 01",
                icon: "flaticon-idea",
                title: "Project Kick-off & Alignment",
                desc: "We quickly understand your goals, project scope, and team workflow to align QA efforts with your delivery needs."
            },
            {
                step: "Step 02",
                icon: "flaticon-network",
                title: "Workflow Integration",
                desc: "Our QA team joins your communication channels and tools, syncing perfectly with your development rhythm."
            },
            {
                step: "Step 03",
                icon: "flaticon-automation",
                title: "Proactive Testing & Insights",
                desc: "We execute AI-assisted testing, deliver actionable reports, and share clear insights to keep quality on track."
            },
            {
                step: "Step 04",
                icon: "flaticon-growth",
                title: "Deliver & Elevate",
                desc: "We help you deliver flawless software, strengthen client satisfaction, and scale your business with confidence."
            }
        ],
    },

    cta: {
        title: "Deliver Exceptional Software and Strengthen Client Trust",
        desc: "Let’s transform how your dev shop approaches quality — ensuring every project exceeds expectations and drives measurable business growth.",
        btnText: "Let’s Talk Quality Growth"
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
