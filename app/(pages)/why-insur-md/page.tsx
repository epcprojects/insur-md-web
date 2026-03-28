"use client";
import { HeroSection, ProcessStepComponent } from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, useWhyInsurMdStepsConfig } from "@/app/constants/WhyInsurMd";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useWhyInsurMdStepsConfig();
  
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
              A physician-led foundation for{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                                                                    [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                                       [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                                      px-2 pb-2 w-fit mt-2"
              >
                modern
              </span>{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                                                                    [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                                       [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                                      ps-2 pe-4 pb-2 w-fit mt-2"
              >
                underwriting
              </span>
            </>
          }
          descriptionOne={
            <span className="font-normal text-lg text-black leading-[160%]">
              Insurance has modernized distribution, digitized applications, and
              accelerated decisioning models — but one critical dependency
              remains anchored in clinical reality:
              <span className="font-extrabold font-playfair italic text-leaf ">
                meaningful medical interpretation.
              </span>
            </span>
          }
          descriptionTwo={
            "InsurMD was built around a simple premise: when healthcare data moves through physicians, everything downstream becomes clearer, faster, and more defensible."
          }
          descriptionThree="We are not a records vendor. Not a telehealth company. Not a passive data intermediary. InsurMD is a physician-led clinical intelligence layer purpose-built for life insurance underwriting."
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
          image={images.insuremdimages.InsureMdImage}
          imageAlt={"insure md"}
        />
      </div>
    </div>
    <HowItWorksAccordion items={accordionItems} />
    </>
  );
};

export default Page;
