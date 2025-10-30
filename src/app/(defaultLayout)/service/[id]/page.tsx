//import React from "react";
import { ServiceData } from "../../../Data/servicesdata";
import StartBalancingAct from "../../../Components/ServicePage/StartBalancingAct";
import Benifits from "../../../Components/ServicePage/benifits";
import Banner from "../../../Components/ServicePage/Banner";
import ServicePoint from "../../../Components/ServicePage/ServicePoint";
import StepProcess from "../../../Components/ServicePage/stepprocess";
import CTA from "../../../Components/ServicePage/cta";


interface ServicePageProps {
  params: {
    id: string;
  };
}

const ServicePage = ({ params }: ServicePageProps) => {
  // params.id = "startup" etc.
  const service = ServiceData.find((obj) => obj.servicetitle === params.id);
  

  if (!service) {
    return <div className="text-center py-20 text-xl">Service not found</div>;
  }

  return (
    <>
      <Banner data={service.infoSection} />
      <StartBalancingAct data={service.DetailSec} />
      <Benifits data={service.benifits} />
      <ServicePoint data={service.ServiceList} />
      <StepProcess data={service?.Strategy}/>
      <CTA data={service.cta}/>
    </>
  );
};

export default ServicePage;
