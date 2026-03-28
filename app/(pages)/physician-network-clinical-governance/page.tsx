"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { useDemoModal } from "@/app/components/DemoModalProvider";
import {
  ProcessStep,
  usePhysicalNetworkStepsConfig,
} from "@/app/constants/physicalnetwork";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = usePhysicalNetworkStepsConfig();

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

  const { openModal } = useDemoModal();
  return (
    <>
      <div className=" p-4">
        <div className="rounded-[30px] bg-white-smoke w-full">
          <HeroSection
            heading={
              <>
                Clinical credibility{" "}
                <span
                  className="font-playfair text-white inline-block rounded-full
                                                            [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                               [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                             px-5 pb-2 w-fit mt-2"
                >
                  starts
                </span>{" "}
                with real physicians
              </>
            }
            descriptionOne={
              "At the core of InsurMD is a physician-led operating model. Every clinical workflow on the platform is grounded in licensed medical oversight, ensuring that healthcare data is handled with the rigor, context, and responsibility it demands."
            }
            descriptionTwo={
              "This is not a thin clinical layer placed on top of data workflows. It is a purpose-built physician network supported by structured clinical governance."
            }
            buttons={[
              {
                label: "Request a Demo",
                icon: <RightUpArrow />,
                onClick: () => {
                  openModal();
                },
                variant: "primary",
              },
              {
                label: "Partner with InsurMD",
                icon: <RightUpArrow />,
                onClick: () => {
                  openModal();
                },
                variant: "secondary",
              },
            ]}
            image={images.clinicalpageimages.ClinicalGovernanceImage}
            imageAlt={"Person Standing"}
          />
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
