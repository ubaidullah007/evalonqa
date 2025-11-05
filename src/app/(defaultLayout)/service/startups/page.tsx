import React from "react";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";
import StartUps from "../../../../../public/assets/images/pages/new-images/startups.jpg";

const data = {
  servicetitle: "custom-startups",
  infoSection: {
    title: "Accelerate Your Launch with Smarter QA for Startups",
    desc: "Innovate freely while we make sure your product performs flawlessly. Our AI-powered, US-based QA helps you move faster and scale confidently without compromising reliability."
  },

  DetailSec: {
    title: "The Startup Momentum Challenge",
    desc: "In the fast lane of growth, speed matters but stability builds trust. That’s where our intelligent QA ensures your progress never becomes a risk.",
    servicesDetail: [
      {
        id: 1,
        title: "Agile QA Implementation",
        desc: "We integrate rapid testing frameworks that match your development pace and support quick, confident releases.",
        icon: "bi bi-lightning"
      },
      {
        id: 2,
        title: "AI-Enhanced Test Coverage",
        desc: "Using AI-powered tools, we expand your test coverage efficiently identifying issues before they impact users.",
        icon: "bi bi-cpu"
      },
      {
        id: 3,
        title: "Continuous Feedback Loop",
        desc: "Our QA approach feeds real-time insights back into development, ensuring continuous improvement and smarter iterations.",
        icon: "bi bi-arrow-repeat"
      }
    ]
  },

  benifits: {
    subtitle: "Intelligent Quality Assurance",
    title: "Empowering Startups with Smarter, Faster QA",
    desc: "We merge proven QA expertise with AI efficiency to help startups deliver stable, scalable, and high-performing software every time.",
    benefitslist: [
      {
        id: 2,
        title: "Adaptive Test Strategy",
        desc: "Develop clear, flexible testing roadmaps from unit to UAT perfectly aligned with your evolving software environment.",
        icon: "bi bi-diagram-3"
      },
      {
        id: 3,
        title: "Smart AI Automation",
        desc: "Use AI intelligently to automate the most impactful test scenarios, saving hours of manual work while improving accuracy.",
        icon: "bi bi-robot"
      },
      {
        id: 4,
        title: "Transparent Reporting",
        desc: "Maintain full visibility into bugs, test results, and improvements through structured, easy-to-read reports and dashboards.",
        icon: "bi bi-file-earmark-bar-graph"
      },
      {
        id: 5,
        title: "Preventive Risk Control",
        desc: "Detect vulnerabilities before they cause disruptions, ensuring compliance, consistency, and complete system reliability.",
        icon: "bi bi-shield-lock"
      }
    ]
  },

  ServiceList: {
    title: "From Zero to QA Acceleration in Just Days",
    highlights: [
      "We simplify the QA process so you can focus on building, not debugging.",
      "AI-driven insights ensure faster testing cycles and better product quality.",
      "Our engineers integrate directly into your workflow no onboarding delays.",
      "Flexible engagement models that scale as your startup grows.",
      "Trusted by fast-moving startups who value speed, precision, and partnership."
    ],
    secImg: StartUps
  },

  Strategy: {
    title: "Your Seamless Path to Reliable QA",
    steps: [
      {
        step: "Step 01",
        icon: "flaticon-search-user",
        title: "Discovery & Insight",
        desc: "A quick session to explore your goals, product landscape, and existing QA gaps for tailored alignment."
      },
      {
        step: "Step 02",
        icon: "flaticon-vector",
        title: "Custom QA Roadmap",
        desc: "We design a tailored QA plan that fits your sprint cycle, budget, and release timelines with clear milestones and on-time delivery."
      },
      {
        step: "Step 03",
        icon: "flaticon-implementation",
        title: "Integration & Execution",
        desc: "Our QA specialists embed seamlessly into your team, bringing advanced tooling and efficient workflows."
      },
      {
        step: "Step 04",
        icon: "flaticon-exam",
        title: "Performance & Impact",
        desc: "We measure outcomes continuously, fine-tuning test coverage and efficiency to deliver sustained quality."
      }
    ]
  },

  cta: {
    title: "Ready to Scale Your Product with Confidence?",
    desc: "Empower your startup with AI-driven QA excellence. Let’s build reliability and speed into your next big launch together.",
    btnText: "Book Your QA Strategy Session"
  }
};

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
