/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  CTASection,
  HeroSection,
  ProcessStepComponent,
  ThemeButton,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { useDemoModal } from "@/app/components/DemoModalProvider";
import { ProcessStep, useProcessStepsConfig } from "@/app/constants/howitWorks";
import { useIsMobile } from "@/app/hooks/useIsMobile";

import { images } from "@/app/ui";
import { InsureMDIcon, RightUpArrow } from "@/public/icons";
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

  const isMobile = useIsMobile();

  const { openModal } = useDemoModal();
  return (
    <>
      <div className=" p-4">
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
            descriptionTwo="This page walks through the InsurMD lifecycle end-to-end — from insurance company referral to underwriting-ready outputs."
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
            image={images.howitworksimages.PersonStandingImage}
            imageAlt="Person Standing"
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
                  In Plain Terms
                </h2>
                <p className="text-lg md:text-2xl text-white leading-[140%]">
                  All delivered through one orchestrated experience.
                </p>
              </div>

              <div className="w-fit">
                <ThemeButton
                  icon={<RightUpArrow />}
                  label="Request a Demo"
                  onClick={() => {
                    openModal();
                  }}
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
                    Transforming Underwriting into a Unified Clinical
                    Intelligence Pipeline
                  </h2>
                  <p className="text-base md:text-lg font-normal text-white">
                    Delivers verified data, aggregated histories, and
                    physician-led insights in one seamless, end-to-end
                    experience.
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
                      Verified patient authorization
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Aggregated medical histories
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Physician-led interpretation
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Structured, underwriting-ready outputs
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
          title="Bring underwriting into real time"
          highlightText="underwriting"
          description1="The future of life insurance isn’t slower, heavier, or more manual. It’s connected, clinical, and instantaneous."
          description2="Partner with InsurMD to deliver faster decisions, stronger data, and a radically better applicant journey."
          primaryBtnLabel="Schedule a Demo"
          secondaryBtnLabel="Request Partnership"
          image={images.landingImages.designMockup2}
          onPrimaryClick={() => {
            openModal();
          }}
          onSecondaryClick={() => {
            openModal();
          }}
        />
      </div>
    </>
  );
};

export default Page;
