import React from "react";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";

import Legacy from "../../../../../public/assets/images/pages/new-images/Legacy.jpg";


const data =  {
    infoSection: {
        title: "Modernize Your QA with AI-Powered Agility",
        desc: "Transform outdated QA systems into agile, automated, and intelligent processes. Our AI-driven solutions enhance speed, reliability, and confidence across your legacy software ecosystem."
    },

    DetailSec: {
        title: "Overcoming the Legacy QA Bottleneck",
        desc: "Legacy systems often rely on slow, manual QA processes that block innovation and increase release risks. We revitalize your quality assurance with modern, automated, and AI-supported practices.",
        servicesDetail: [
            {
                id: 1,
                title: "Smart Code Intelligence",
                desc: "AI analyzes complex codebases, highlighting weak points, dependencies, and potential regression risks to guide smarter testing.",
                icon: "bi bi-cpu"
            },
            {
                id: 2,
                title: "Strategic Test Automation",
                desc: "We design scalable automation frameworks (UI, API, and integration) to maximize coverage and minimize manual effort.",
                icon: "bi bi-gear-wide-connected"
            },
            {
                id: 3,
                title: "Team Upskilling & Empowerment",
                desc: "We train your QA team with modern testing methodologies and AI-assisted tools to build long-term independence and capability.",
                icon: "bi bi-person-check"
            }
        ]
    },

    benifits: {
        subtitle: "Intelligent Legacy Transformation",
        title: "Elevate Your QA Efficiency with AI & Automation",
        desc: "We combine automation strategy, AI insight, and expert QA guidance to modernize your processes — enabling faster releases, fewer errors, and stronger systems.",
        benefitslist: [
            {
                id: 1,
                title: "Comprehensive Assessment",
                desc: "We perform an in-depth analysis of your codebase, workflows, and team processes to pinpoint improvement areas.",
                icon: "bi bi-search"
            },
            {
                id: 2,
                title: "AI-Driven Optimization",
                desc: "Leverage machine learning models to identify redundant, brittle, or missing test areas for smarter regression coverage.",
                icon: "bi bi-robot"
            },
            {
                id: 3,
                title: "Sustainable Automation Strategy",
                desc: "We introduce modern, maintainable automation that delivers consistent, reliable test outcomes without complexity.",
                icon: "bi bi-diagram-3"
            },
            {
                id: 4,
                title: "Risk Reduction & Faster Releases",
                desc: "Reduce dependency on manual regression, catch issues earlier, and ship updates faster with confidence.",
                icon: "bi bi-shield-check"
            }
        ],
    },

    ServiceList: {
        title: "Expertise That Scales With You",
        highlights: [
            "We partner with your internal QA and development teams for smooth, sustainable modernization.",
            "Our US-based engineers embed directly into your workflows for transparency and seamless collaboration.",
            "Automation frameworks are tailored for your stack, product goals, and release cadence.",
            "Continuous improvement ensures your QA evolves alongside your technology.",
            "Empower your team through hands-on enablement, training, and ongoing optimization."
        ],
        secImg: Legacy
    },

    Strategy: {
        title: "Your Legacy QA Modernization Roadmap",
        steps: [
            {
                step: "Step 01",
                icon: "flaticon-search-user",
                title: "Assess & Analyze",
                desc: "We review your code, QA processes, tools, and team structure to identify bottlenecks and modernization opportunities."
            },
            {
                step: "Step 02",
                icon: "flaticon-vector",
                title: "Strategize & Plan",
                desc: "Develop a clear roadmap focused on automation priorities, upskilling needs, and achievable modernization milestones."
            },
            {
                step: "Step 03",
                icon: "flaticon-implementation",
                title: "Implement & Integrate",
                desc: "We deploy automation, integrate AI insights, and optimize your QA pipeline for efficiency and scalability."
            },
            {
                step: "Step 04",
                icon: "flaticon-exam",
                title: "Train & Empower",
                desc: "Through workshops and continued support, we upskill your team to confidently maintain modern QA practices."
            }
        ],
    },

    cta: {
        title: "Modernize Your QA, Accelerate Your Business",
        desc: "Don’t let legacy systems hold back your growth. Discover how AI and automation can transform your QA process for faster, safer releases.",
        btnText: "Book Your Modernization Consultation"
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
