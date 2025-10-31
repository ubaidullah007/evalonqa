import React from "react";
import { ServiceData } from "../../../Data/servicesdata";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";

// ✅ Correct type for Next.js App Router (params as Promise)
interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

const ServicePage = async ({ params }: ServicePageProps) => {
  // ✅ Resolve params (Next internally provides Promise)
  const resolvedParams = await params;

  const service = ServiceData.find(
    (obj) => obj.servicetitle?.toLowerCase() === resolvedParams.id?.toLowerCase()
  );

  if (!service) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  const {
    infoSection = {},
    DetailSec = {},
    benifits = [],
    ServiceList = [],
    Strategy = [],
    cta = {},
  } = service;

  return (
    <>
      <Banner data={infoSection} />
      <StartBalancingAct data={DetailSec} />
      <Benifits data={benifits} />
      <ServicePoint data={ServiceList} />
      <StepProcess data={Strategy} />
      <CTA data={cta} />
    </>
  );
};

export default ServicePage;
