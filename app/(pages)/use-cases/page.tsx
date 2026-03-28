"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, useUseCaseStepsConfig } from "@/app/constants/usecase";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
   const steps = useUseCaseStepsConfig();
    
      const renderStepContent = (step: ProcessStep) => {
        switch (step.variant) {
          case "A":
            return <ProcessStepComponent variant="A" items={[step]} />;
          case "B":
            return <ProcessStepComponent variant="B" items={[step]} />;
          case "C":
            return <ProcessStepComponent variant="C" items={[step]} />;
          case "custom":
            return <ProcessStepComponent variant="custom" items={[step]} />;
        }
      };
    
      const accordionItems = steps.map((step) => ({
        content: <div className="py-4 lg:py-16">{renderStepContent(step)}</div>,
      }));
  return (
    <>
    <div className=" min-h-dvh p-4">
      <div className="rounded-[30px] bg-white-smoke w-full">
        <HeroSection
          heading={
            <>
              Where InsurMD creates{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                                                            [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                               [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                             px-5 pb-2 w-fit mt-2"
              >
                immediate
              </span>{" "}
              underwriting leverage
            </>
          }
          descriptionOne={
            "InsurMD is designed as a flexible clinical intelligence layer that supports a wide range of underwriting models. While the platform is unified at its core, its impact varies depending on how and where it is deployed."
          }
          descriptionTwo={
            "This page outlines the most common ways carriers, MGAs, and reinsurers use InsurMD to unlock speed, clarity, and confidence."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "primary",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.usecasesimages.LaptopScreenImages}
          imageAlt={"Laptop screen images"}
        />
      </div>
    </div>
    <HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
