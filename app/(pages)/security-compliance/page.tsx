"use client";
import {
  HeroSection,
  ProcessStepComponent,
  ThemeButton,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import {
  ProcessStep,
  useSecurityComplianceStepsConfig,
} from "@/app/constants/securityCompliance";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { images } from "@/app/ui";
import { InsureMDIcon, RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useSecurityComplianceStepsConfig();

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
      <div className=" p-4">
        <div className="rounded-[30px]  bg-light-purple w-full">
          <HeroSection
            heading={
              <>
                Built for environments where{" "}
                <span
                  className="font-playfair text-white inline-block  rounded-full
                 [background:linear-gradient(170deg,#B692F6_41.33%,#53389E_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.50)]
                  px-5 pb-2 w-fit mt-2"
                >
                  trust
                </span>{" "}
                is non-negotiable
              </>
            }
            descriptionOne={
              "InsurMD operates at the intersection of healthcare data and insurance risk — two of the most regulated domains in the modern economy. Security and compliance are not layered on top of the platform; they are foundational to its architecture."
            }
            descriptionTwo={
              "From patient authorization to data delivery, every layer of InsurMD is designed to meet the expectations of enterprise carriers, regulated partners, and clinical stakeholders."
            }
            buttons={[
              {
                label: "Request a Demo",
                icon: <RightUpArrow />,
                onClick: () => {},
                variant: "custom",
                bgClass:
                  "[background:linear-gradient(170deg,#B692F6_41.33%,#53389E_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.70)]",
              },
              {
                label: "Partner with InsurMD",
                icon: <RightUpArrow />,
                onClick: () => {},
                variant: "secondary",
              },
            ]}
            image={images.securityandcomplianceimages.NegotiationImage}
            imageAlt={"negotiation handshake"}
          />
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />

      <div className="m-4 md:m-5 ">
        <div className="bg-linear-[170deg] from-[#53389E]  to-[#B692F6] rounded-[30px] w-full py-5 md:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-8 mx-auto max-w-7xl gap-8 md:gap-16">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h2 className="text-white font-semibold text-4xl md:text-[54px] leading-[120%] ">
                  Trust as a Platform Feature
                </h2>
                <p className="text-lg md:text-2xl text-white leading-[140%]">
                  Security is not an add-on. It is part of the product itself.
                </p>
              </div>

              <div className="w-fit">
                <ThemeButton
                  icon={<RightUpArrow />}
                  label="Request a Demo"
                  onClick={() => {}}
                  variant="custom"
                  borderClr="border-black/40"
                  wrapperClasses=""
                  bgClasses="[background:linear-gradient(170deg,#B692F6,#53389E)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.70)]"
                  bodyBgClasses="bg-black/40 text-white!"
                />
              </div>
            </div>

            <div className="rounded-3xl p-5 md:p-10 bg-black/30 space-y-4 md:space-y-7.5">
              <div className="bg-white h-15 w-15 md:h-25 md:w-25 rounded-2xl md:rounded-[28px] flex items-center justify-center">
                <InsureMDIcon
                  fill1="#53389E"
                  fill2="#B692F6"
                  fill3="#7F56D9"
                  width={isMobile ? "" : "49"}
                  height={isMobile ? "33" : "63"}
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white text-xl md:text-[28px] font-bold ">
                    Trust Embedded into the Core Platform Experience
                  </h2>
                  <p className="text-base md:text-lg font-normal text-white">
                    Built on transparency, verifiable data, and secure systems
                    to ensure confidence across all stakeholders.
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
                      Transparent authorization
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Verifiable provenance
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Hardened infrastructure
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Explainable data flows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
