"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, usePlatformStepsConfig } from "@/app/constants/PlatformOverview";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = usePlatformStepsConfig();

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
              The clinical infrastructure layer for{" "}
              <span
                className="font-playfair w-fit text-white inline-block rounded-full
                                       [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                      px-5 pb-2  "
              >
                modern
              </span>
              underwriting
            </>
          }
          descriptionOne={
            "InsurMD is a physician-led clinical intelligence platform designed to transform how medical insight enters the life insurance ecosystem. At its core, the platform orchestrates identity, authorization, clinical interpretation, and structured delivery into a single, cohesive infrastructure layer."
          }
          descriptionTwo={
            "Where legacy workflows rely on fragmented record chasing and manual synthesis, InsurMD delivers a unified clinical pipeline built for speed, clarity, and scale."
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
          image={images.platformoverviewimages.PlatformOverviewImage}
          imageAlt={"Platform Overview"}
        />
      </div>
    </div>
    <HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
