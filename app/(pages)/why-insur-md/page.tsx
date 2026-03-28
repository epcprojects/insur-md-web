"use client";
import {
  CTASection,
  HeroSection,
  ProcessStepComponent,
  ThemeButton,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import {
  ProcessStep,
  useWhyInsurMdStepsConfig,
} from "@/app/constants/WhyInsurMd";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import Image from "next/image";
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
      <div className=" p-4">
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
              <span className="font-normal lg:text-start text-center text-lg text-black leading-[160%]">
                Insurance has modernized distribution, digitized applications,
                and accelerated decisioning models — but one critical dependency
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

      <div className="m-4 md:m-5">
        <div className="bg-[#F5F5F4] rounded-[30px] w-full pt-8 md:pt-24 ">
          <div className="container mx-auto max-w-7xl  px-4 md:px-8">
            <div className="space-y-4.5 md:-mb-8">
              <h2 className="text-center text-greenish-cyan uppercase font-semibold text-lg md:text-xl">
                The Core Insight
              </h2>
              <h3 className="text-4xl md:text-[54px] font-semibold md:leading-[140%] text-center tracking-[-0.03em] md:px-40">
                Clinical{" "}
                <span className="text-[#107569] font-extrabold">clarity</span>{" "}
                must originate from clinical authority
              </h3>

              <div className="space-y-6">
                <p className="text-black text-base md:text-lg font-normal text-center">
                  For decades, underwriting innovation has been constrained by
                  fragmented healthcare data and disconnected workflows.
                  Carriers have invested heavily in automation, digital
                  journeys, and predictive models — yet decision velocity still
                  slows when clinical insight is indirect or incomplete.
                </p>
                <p className="text-black text-base md:text-lg  font-normal text-center">
                  The industry has historically tried to accelerate around this
                  constraint. InsurMD resolves it by placing licensed physicians
                  at the center of the process from the very beginning.
                </p>
                <p className="text-black text-base md:text-lg  font-normal text-center">
                  When clinical workflows are initiated and guided by
                  physicians, the downstream data becomes more cohesive,
                  interpretable, and actionable.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <ThemeButton
                  icon={<RightUpArrow />}
                  label="Request a Demo"
                  onClick={() => {}}
                  variant="primary"
                  borderClr="border-gray-200"
                />
              </div>
            </div>

            <Image alt="" src={images.landingImages.dashboardMockup} />
          </div>
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />
      <div className="px-4 md:px-8 mb-16">
        <CTASection
          title="The Bottom Line"
          highlightText="Bottom"
          description1="InsurMD exists because underwriting should not be limited by how disconnected clinical data has historically been handled."
          description2="By anchoring the workflow in physician-guided clinical intelligence, InsurMD enables carriers to operate with the speed of modern technology and the grounding of real medical oversight."
          primaryBtnLabel="Schedule a Demo"
          secondaryBtnLabel="Request Partnership"
          image={images.landingImages.designMockup2}
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />
      </div>
    </>
  );
};

export default Page;
