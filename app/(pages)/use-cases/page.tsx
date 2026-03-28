"use client";
import {
  CTASection,
  HeroSection,
  ProcessStepComponent,
  ThemeButton,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { ProcessStep, useUseCaseStepsConfig } from "@/app/constants/usecase";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { images } from "@/app/ui";
import { InsureMDIcon, RightUpArrow } from "@/public/icons";
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

  const isMobile = useIsMobile();

  return (
    <>
      <div className="p-4">
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

      <div className="m-4 md:m-5 ">
        <div className="bg-linear-[170deg] from-dark-teal  to-teal rounded-[30px] w-full py-5 md:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-8 mx-auto max-w-7xl gap-8 md:gap-16">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h2 className="text-white font-semibold text-4xl md:text-[54px] leading-[120%] ">
                  In Practice
                </h2>
                <p className="text-lg md:text-2xl text-white leading-[140%]">
                  Modular Adoption for Progressive Underwriting Transformation
                </p>
              </div>

              <div className="w-fit">
                <ThemeButton
                  icon={<RightUpArrow />}
                  label="Request a Demo"
                  onClick={() => {}}
                  variant="primary"
                  borderClr="border-gray-200"
                />
              </div>
            </div>

            <div className="rounded-3xl p-5 md:p-10 bg-black/30 space-y-4 md:space-y-7.5">
              <div className="bg-white h-15 w-15 md:h-25 md:w-25 rounded-2xl md:rounded-[28px] flex items-center justify-center">
                <InsureMDIcon
                  width={isMobile ? "" : "49"}
                  height={isMobile ? "33" : "63"}
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white text-xl md:text-[28px] font-bold ">
                    Flexible Adoption Across Underwriting Programs
                  </h2>
                  <p className="text-base md:text-lg font-normal text-white">
                    Starts with targeted use cases and expands over time,
                    enabling gradual adoption with reduced risk and scalable
                    impact.
                  </p>
                </div>

                <div>
                  <ul className="space-y-4">
                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Pilot within accelerated underwriting
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Expansion into high-value cases
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Integration into digital channels
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Standardization across programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 mb-16">
        <CTASection
          title="The Unifying Theme"
          highlightText="Unifying"
          description1="Across all use cases, InsurMD delivers the same fundamental value: clinically grounded clarity delivered at modern speed."
          description2="Whether deployed to accelerate decisions, improve confidence, reduce operational burden, or enhance applicant experience, the platform consistently transforms how clinical insight enters the underwriting process."
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
