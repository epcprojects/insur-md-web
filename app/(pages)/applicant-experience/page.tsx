"use client";
import {
  CTASection,
  HeroSection,
  ProcessStepComponent,
} from "@/app/components";
import HowItWorksAccordion from "@/app/components/AccordionComponents/HowItWorksAccordion";
import {
  ProcessStep,
  useApplicantExperienceStepsConfig,
} from "@/app/constants/applicantExperience";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  const steps = useApplicantExperienceStepsConfig();

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
      <div className="p-4">
        <div className="rounded-[30px] bg-white-smoke w-full">
          <HeroSection
            heading={
              <>
                A modern underwriting journey, built{" "}
                <span
                  className="font-playfair  text-white inline-block rounded-full
                                               [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                  [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                              px-5 pb-2 w-fit mt-2"
                >
                  around patient
                </span>
              </>
            }
            descriptionOne={
              "For applicants, underwriting has historically been the most confusing and frustrating part of the life insurance process. Weeks of silence, unclear requests, and repeated paperwork create anxiety at the exact moment when clarity matters most."
            }
            descriptionTwo={
              "InsurMD reimagines this experience by placing the applicant at the center of a guided, physician-connected journey designed for transparency, speed, and trust."
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
            image={images.applicantexperienceimages.ApplicantExperienceImage}
            imageAlt={"Applicant Experience"}
          />
        </div>
      </div>
      <HowItWorksAccordion items={accordionItems} />

      <div className="px-4 md:px-8 mb-16">
        <CTASection
          title="The Bottom Line"
          highlightText="Bottom"
          highlightTextClassName="text-[#109383]"
          description1="InsurMD represents a shift from fragmented medical workflows to unified clinical infrastructure."
          description2="By combining physician-led interpretation, structured clinical intelligence, and enterprise-ready integration, the platform enables life insurers to operate with greater speed, clarity, and confidence."
          primaryBtnLabel="Schedule a Carrier Demo"
          secondaryBtnLabel="Talk to Partnerships"
          primaryBtnVariant="custom"
          primaryBtnBgClasses="[background:linear-gradient(170deg,#22CCEE,#0E7090)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(30,204,238,0.50)]"
          secondaryBtnVariant="custom"
          secondaryBtnBgClasses="[background:linear-gradient(170deg,#22CCEE,#0E7090)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(30,204,238,0.50)]"
          image={images.landingImages.designMockup2}
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />
      </div>
    </>
  );
};

export default Page;
