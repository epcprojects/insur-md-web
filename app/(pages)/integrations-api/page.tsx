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
  useIntegrationApiStepsConfig,
} from "@/app/constants/IntegrationApi";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { images } from "@/app/ui";
import { InsureMDIcon, RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useIntegrationApiStepsConfig();

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
        <div className="rounded-[30px] bg-light-red  w-full ">
          <HeroSection
            heading={
              <>
                Built to{" "}
                <span
                  className="font-playfair text-white inline-block rounded-full
                          [background:linear-gradient(170deg,#FD6F8E_41.33%,#C01048_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]
                           px-5 ps-6 pb-3 w-fit mt-2"
                >
                  plug
                </span>{" "}
                into real underwriting ecosystems
              </>
            }
            descriptionOne={
              "InsurMD is not designed to sit beside your stack — it’s built to integrate into it. Modern carriers operate across a complex mesh of underwriting platforms, policy admin systems, data warehouses, and partner ecosystems. InsurMD is engineered to connect cleanly across that landscape."
            }
            descriptionTwo={
              "Whether deployed as a pilot or scaled across enterprise programs, the platform is built for seamless interoperability."
            }
            buttons={[
              {
                label: "Request a Demo",
                icon: <RightUpArrow />,
                onClick: () => {},
                variant: "custom",
                bgClass:
                  "[background:linear-gradient(170deg,#FD6F8E_41.33%,#C01048_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]",
              },
              {
                label: "Partner with InsurMD",
                icon: <RightUpArrow />,
                onClick: () => {},
                variant: "secondary",
              },
            ]}
            image={images.apiimages.ApiImage}
            imageAlt={"Api Image"}
          />
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />
      <div className="m-4 md:m-5 pb-12 md:pb-16">
        <div className="bg-linear-[170deg] from-[#C01048]  to-[#FD6F8E] rounded-[30px] w-full py-5 md:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-8 mx-auto max-w-7xl gap-8 md:gap-16">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h2 className="text-white font-semibold text-4xl md:text-[54px] leading-[120%] ">
                  In Practice
                </h2>
                <p className="text-lg md:text-2xl text-white leading-[140%]">
                  Integration becomes an accelerator, not a blocker.
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
                  bgClasses="[background:linear-gradient(170deg,#FD6F8E.33%,#C01048.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]"
                  bodyBgClasses="bg-black/40 text-white!"
                />
              </div>
            </div>

            <div className="rounded-3xl p-5 md:p-10 bg-black/30 space-y-4 md:space-y-7.5">
              <div className="bg-white h-15 w-15 md:h-25 md:w-25 rounded-2xl md:rounded-[28px] flex items-center justify-center">
                <InsureMDIcon
                  fill1="#912018"
                  fill2="#D92D20"
                  fill3="#F97066"
                  width={isMobile ? "" : "49"}
                  height={isMobile ? "33" : "63"}
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white text-xl md:text-[28px] font-bold ">
                    Real-World Integration Outcomes for Carrier Teams
                  </h2>
                  <p className="text-base md:text-lg font-normal text-white">
                    Enables faster deployment, smoother workflows, and improved
                    visibility—turning integration into an accelerator.
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
                      Faster deployment than traditional vendors
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Minimal disruption to existing workflows
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Cleaner data ingestion pipelines
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Better visibility into underwriting timelines
                    </li>
                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Strong alignment between technical and underwriting teams
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
          highlightTextClassName="text-[#F63D68]"
          description1="The future of life insurance isn’t slower, heavier, or more manual. It’s connected, clinical, and instantaneous."
          description2="Partner with InsurMD to deliver faster decisions, stronger data, and a radically better applicant journey."
          primaryBtnLabel="Schedule a Demo"
          secondaryBtnLabel="Request Partnership"
          primaryBtnVariant="custom"
          primaryBtnBgClasses="[background:linear-gradient(170deg,#FD6F8E.33%,#C01048.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]"
          secondaryBtnVariant="custom"
          secondaryBtnBgClasses="[background:linear-gradient(170deg,#FD6F8E.33%,#C01048.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]"
          image={images.landingImages.designMockup2}
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />
      </div>
    </>
  );
};

export default Page;
