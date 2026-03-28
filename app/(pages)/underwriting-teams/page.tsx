"use client";
import {
  CTASection,
  HeroSection,
  ProcessStepComponent,
  ThemeButton,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import { useDemoModal } from "@/app/components/DemoModalProvider";
import {
  ProcessStep,
  useUnderwritingTeamsStepsConfig,
} from "@/app/constants/underwritingteams";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { images } from "@/app/ui";
import { InsureMDIcon, RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useUnderwritingTeamsStepsConfig();

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
      <div className="p-4">
        <div className="rounded-[30px]   bg-light-skyblue w-full">
          <HeroSection
            heading={
              <>
                Built for the people who actually{" "}
                <span
                  className="font-playfair text-white inline-block rounded-full
          [background:linear-gradient(170deg,#2CE_41.33%,#0E7090_102.06%)]
[box-shadow:inset_0_-1.441px_7.351px_0_#2CE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]
            px-5 pb-2 w-fit mt-2"
                >
                  carry
                </span>{" "}
                the{" "}
                <span
                  className="font-playfair text-white inline-block rounded-full
          [background:linear-gradient(170deg,#2CE_41.33%,#0E7090_102.06%)]
[box-shadow:inset_0_-1.441px_7.351px_0_#2CE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]
           px-5 pb-2 w-fit "
                >
                  risk
                </span>
              </>
            }
            descriptionOne={
              "InsurMD is designed with underwriting reality in mind. Not theoretical workflows. Not surface-level data feeds. Real-world underwriting requires context, defensibility, and speed — often all at once."
            }
            descriptionTwo={
              "This page focuses on how InsurMD supports underwriting teams directly, from frontline underwriters to chief risk officers and reinsurance partners."
            }
            buttons={[
              {
                label: "Request a Demo",
                icon: <RightUpArrow />,
                onClick: () => {
                  openModal();
                },
                variant: "custom",
                bgClass:
                  "[background:linear-gradient(170deg,#22CCEE_41.33%,#0E7090_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]",
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
            image={images.forunderwritingteamsimages.mackbookimage}
            imageAlt={""}
          />
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />

      <div className="m-4 md:m-5 pb-12 md:pb-16">
        <div className="bg-linear-[170deg] from-dark-skyblue  to-bright-skyblue rounded-[30px] w-full py-5 md:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 container px-4 md:px-8 mx-auto max-w-7xl gap-8 md:gap-16">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h2 className="text-white font-semibold text-4xl md:text-[54px] leading-[120%] ">
                  In Practice
                </h2>
                <p className="text-lg md:text-2xl text-white leading-[140%]">
                  All without introducing workflow complexity.
                </p>
              </div>

              <div className="w-fit">
                <ThemeButton
                  icon={<RightUpArrow />}
                  label="Request a Demo"
                  onClick={() => {
                    openModal();
                  }}
                  variant="custom"
                  borderClr="border-black/40"
                  wrapperClasses=""
                  bgClasses="[background:linear-gradient(170deg,#22CCEE,#0E7090)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(30,204,238,0.50)]"
                  bodyBgClasses="bg-black/40 text-white!"
                />
              </div>
            </div>

            <div className="rounded-3xl p-5 md:p-10 bg-black/30 space-y-4 md:space-y-7.5">
              <div className="bg-white h-15 w-15 md:h-25 md:w-25 rounded-2xl md:rounded-[28px] flex items-center justify-center">
                <InsureMDIcon
                  fill1="#155B75"
                  fill3="#67E3F9"
                  fill2="#06AED4"
                  width={isMobile ? "" : "49"}
                  height={isMobile ? "33" : "63"}
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-white text-xl md:text-[28px] font-bold ">
                    Practical Impact Across Underwriting Workflows
                  </h2>
                  <p className="text-base md:text-lg font-normal text-white">
                    Reduces manual effort, speeds up case handling, and improves
                    consistency and collaboration without added complexity.
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
                      Reduced time spent chasing records
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Faster file progression
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      More consistent decision inputs
                    </li>

                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Stronger confidence in borderline cases
                    </li>
                    <li className="bg-black/20 rounded-xl md:rounded-2xl py-2.5 md:py-4 px-6 flex items-center gap-4 text-white text-sm md:text-lg">
                      <InsureMDIcon
                        width="18"
                        height="24"
                        fill3="#A7A9AC"
                        fill2="#E6E7E8"
                        fill1="white"
                      />{" "}
                      Improved collaboration between underwriting and medical
                      directors
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
          title="The Bottom Line"
          highlightText="Bottom"
          highlightTextClassName="text-[#06AED4]"
          description1="InsurMD gives underwriting teams what they’ve always needed but rarely had at scale: timely, clinically interpreted medical clarity."
          primaryBtnLabel="Schedule a Demo"
          secondaryBtnLabel="Request Partnership"
          primaryBtnVariant="custom"
          primaryBtnBgClasses="[background:linear-gradient(170deg,#22CCEE,#0E7090)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(30,204,238,0.50)]"
          secondaryBtnVariant="custom"
          secondaryBtnBgClasses="[background:linear-gradient(170deg,#22CCEE,#0E7090)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(30,204,238,0.50)]"
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
