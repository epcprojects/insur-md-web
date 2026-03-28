"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, useReinsurersStepsConfig } from "@/app/constants/reinsurers";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useReinsurersStepsConfig();
  
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
              A clearer{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                          [background:linear-gradient(170deg,#36BFFA_41.33%,#0086C9_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#36BFFA,0_1.441px_24.649px_0_rgba(54,191,250,0.50)]
                            px-5 pb-2 w-fit mt-2"
              >
                clinical layer
              </span>{" "}
              across the risk stack
            </>
          }
          descriptionOne={
            "Reinsurers operate at a unique vantage point — evaluating risk across carriers, products, and underwriting philosophies. Yet despite this elevated perspective, one challenge remains consistent: fragmented clinical inputs."
          }
          descriptionTwo={
            "InsurMD provides a physician-led clinical intelligence layer that helps reinsurers engage with cleaner, more coherent medical context across facultative and treaty workflows."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "custom",
              bgClass:
                "[background:linear-gradient(170deg,#36BFFA_41.33%,#0086C9_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#36BFFA,0_1.441px_24.649px_0_rgba(54,191,250,0.50)]",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.reinsurersimages.LayersImage}
          imageAlt={"Layers Image"}
        />
      </div>
    </div>
<HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
