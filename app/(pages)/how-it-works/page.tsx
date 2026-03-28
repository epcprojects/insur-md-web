/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, useProcessStepsConfig } from "@/app/constants/howitWorks";

import { images } from "@/app/ui";
import {
  RightUpArrow,
} from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useProcessStepsConfig();
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
      <div className=" min-h-dvh  p-4">
        <div className="rounded-[30px]  bg-teal-50 w-full ">
          <HeroSection
            heading={
              <>
                From referral to{" "}
                <span
                  className="font-playfair text-white inline-block mr-2 rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
            px-5 pb-2 w-fit mt-2"
                >
                  clinical
                </span>
                <span
                  className="font-playfair text-white inline-block  rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
           px-5 pb-2 w-fit mt-2"
                >
                  intelligence
                </span>{" "}
                — a fully orchestrated pipeline
              </>
            }
            descriptionOne="InsurMD replaces fragmented underwriting workflows with a single, physician-led orchestration layer. Instead of relying on disconnected record requests, manual follow-ups, and partial charts, we coordinate identity, authorization, medical data retrieval, clinical interpretation, and structured delivery through one continuous system."
            descriptionTwo="This page walks through the InsurMD lifecycle end-to-end — from carrier referral to underwriting-ready outputs."
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
            image={images.howitworksimages.PersonStandingImage}
            imageAlt="Person Standing"
          />
        </div>
      </div>
    <HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
