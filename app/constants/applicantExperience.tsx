import React from "react";
import {
  GreenPointIcon,
  ShieldIcon,
  UsersIcon,
  UserDoctorIcon,
  EnergyIcon,
  CompassIcon,
  FileContractIcon,
  SupportIcon,
  RunningIcon,
  LeafIcon,
  HandMedicalIcon,
  PeopleArrowsIcon,
  StarIcon,
} from "@/public/icons";
import {
  ProcessStepItemVariantA,
  ProcessStepItemVariantB,
  ProcessStepItemVariantC,
  ProcessStepItemVariantCustom,
} from "../components/sections/ProcessStepComponent";
import { useIsMobile } from "../hooks/useIsMobile";
import { useDemoModal } from "../components/DemoModalProvider";

export type ProcessStep =
  | ({ variant: "A" } & ProcessStepItemVariantA)
  | ({ variant: "B" } & ProcessStepItemVariantB)
  | ({ variant: "C" } & ProcessStepItemVariantC)
  | ({ variant: "custom" } & ProcessStepItemVariantCustom);

const SHARED = {
  hyphenLineFillColor: "#109383",
  buttonBgClass:
    "[background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]",
  rightDivBgClass: "bg-teal-50",
  iconBgClass: "linear-gradient(170deg,#15B79E 41.33%,#125D56 102.06%)",
  onClick: () => {},
};

export const useApplicantExperienceStepsConfig = (): ProcessStep[] => {
  const isMobile = useIsMobile();
  const { openModal } = useDemoModal();

  const iconWidth = isMobile ? "30" : undefined;
  const iconHeight = isMobile ? "30" : undefined;

  const gp = <GreenPointIcon />;

  return [
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "01",
      leftHeading: "From Uncertainty to Clarity",
      leftSubheading: "Replacing opacity with guided progression",
      rightSideIcon: <CompassIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "From Uncertainty to Underwriting Clarity",
      sectionDescription:
        "Replaces opaque processes with guided onboarding, clear touchpoints, and faster resolution for applicants.",
      items: [
        { icon: gp, label: "Clear next steps " },
        { icon: gp, label: "Guided onboarding " },
        { icon: gp, label: "Defined clinical touchpoints " },
        { icon: gp, label: "Faster resolution timelines" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Clarity transforms how underwriting feels.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "A Mobile-First Experience",
      leftSubheading: "Built for how people interact today",
      rightSideIcon: (
        <UsersIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "A Mobile-First, User-Centric Experience",
      sectionDescription:
        "Streamlines applicant engagement with secure, guided workflows and intuitive mobile and web interfaces.",
      items: [
        { icon: gp, label: "Secure mobile and web access " },
        { icon: gp, label: "Guided workflows " },
        { icon: gp, label: "Simple identity steps " },
        { icon: gp, label: "Clear progress signals" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This modern interface removes friction without oversimplifying the
          seriousness of the process.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Transparent Consent and Control",
      leftSubheading: "Respecting the sensitivity of medical data",
      rightSideIcon: <FileContractIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Transparent Consent and Data Control",
      sectionDescription:
        "Provides clear authorization, plain-language disclosures, and defined access, building applicant trust.",
      items: [
        { icon: gp, label: "Clear authorization flows " },
        { icon: gp, label: "Plain-language disclosures " },
        { icon: gp, label: "Defined scope of access " },
        { icon: gp, label: "Confidence in how information is handled" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Transparency builds trust at every step.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Physician-Connected, Not Faceless",
      leftSubheading: "Human clinical presence in a digital process",
      rightSideIcon: (
        <UserDoctorIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Physician-Connected, Human-Centered Underwriting",
      sectionDescription:
        "Embeds real physicians into the digital process, providing context, credibility, and a humanized experience.",
      items: [
        { icon: gp, label: "Reinforce credibility " },
        { icon: gp, label: "Provide clinical context " },
        { icon: gp, label: "Reduce uncertainty " },
        { icon: gp, label: "Humanize the underwriting experience" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Technology enables the journey, but medicine grounds it.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "A More Respectful Clinical Interaction",
      leftSubheading: "Focused, relevant, and efficient",
      rightSideIcon: <SupportIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "A More Respectful and Efficient Clinical Experience",
      sectionDescription:
        "Delivers focused, relevant interactions that reduce redundancy, minimize fatigue, and improve applicant comfort.",
      items: [
        { icon: gp, label: "Fewer repetitive data requests " },
        { icon: gp, label: "More coherent clinical moments " },
        { icon: gp, label: "Reduced administrative fatigue " },
        { icon: gp, label: "Greater overall comfort with the process" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Respectful design improves engagement.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Faster Paths to Resolution",
      leftSubheading: "Speed that applicants can feel",
      rightSideIcon: <RunningIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Faster, Clearer Paths to Resolution",
      sectionDescription:
        "Compresses workflows into a coordinated clinical pipeline, reducing waiting, uncertainty, and accelerating policy progression.",
      items: [
        { icon: gp, label: "Less waiting " },
        { icon: gp, label: "Faster clarity on next steps " },
        { icon: gp, label: "Shorter uncertainty windows " },
        { icon: gp, label: "Quicker policy progression" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Time is one of the most valuable experience improvements InsurMD
          delivers.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Reduced Administrative Burden",
      leftSubheading: "Less paperwork, more progress",
      rightSideIcon: <LeafIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Reduced Administrative Burden for Applicants",
      sectionDescription:
        "Minimizes forms, duplication, and follow-ups, streamlining information capture and communication for a lighter, efficient process.",
      items: [
        { icon: gp, label: "Fewer manual forms " },
        { icon: gp, label: "Streamlined information capture " },
        { icon: gp, label: "Reduced duplication of effort " },
        { icon: gp, label: "Simplified communication moments" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The experience becomes lighter without becoming less rigorous.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Confidence Through Structure",
      leftSubheading: "A journey that feels intentional",
      rightSideIcon: (
        <ShieldIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Confidence Through Structured Clinical Journeys",
      sectionDescription:
        "Creates a deliberate, purposeful process that builds trust, engagement, and support for applicants.",
      items: [
        { icon: gp, label: "Understand what’s happening " },
        { icon: gp, label: "Trust the process " },
        { icon: gp, label: "Stay engaged through completion " },
        { icon: gp, label: "Feel supported rather than processed" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Structure builds emotional confidence.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Stronger Alignment With Modern Expectations",
      leftSubheading: "Matching how consumers expect services to work",
      rightSideIcon: <EnergyIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Modernizing Underwriting to Meet Applicant Expectations",
      sectionDescription:
        "Delivers fast, transparent, and guided underwriting experiences that boost completion, sentiment, and brand perception.",
      items: [
        { icon: gp, label: "Higher completion rates " },
        { icon: gp, label: "Better applicant sentiment " },
        {
          icon: gp,
          label: "Stronger brand perception for insurance companies",
        },
        { icon: gp, label: "Improved referral confidence" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Modern experiences shape modern brands.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Built for Sensitive Moments",
      leftSubheading: "Respect during important decisions",
      rightSideIcon: <HandMedicalIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Designed for Sensitive and Meaningful Moments",
      sectionDescription:
        "Ensures clear, respectful, and human-centered interactions that reduce friction during important life decisions.",
      items: [
        { icon: gp, label: "Clear communication moments " },
        { icon: gp, label: "Reduced friction under stress " },
        { icon: gp, label: "Respectful pacing " },
        { icon: gp, label: "Human-centered interaction design" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Sensitivity matters in moments that matter.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Better Outcomes for Everyone",
      leftSubheading: "When applicant experience improves, everything improves",
      rightSideIcon: <PeopleArrowsIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Driving Better Outcomes Across the Ecosystem",
      sectionDescription:
        "Enhances applicant experience, increases engagement, and delivers more complete, trusted underwriting outcomes.",
      items: [
        {
          icon: gp,
          label: "Stronger placement outcomes ",
        },
        { icon: gp, label: "Reduced applicant drop-off " },
        { icon: gp, label: "Better insurance companY relationships " },
        { icon: gp, label: "More trusted underwriting experiences" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Experience quality compounds across the lifecycle.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "custom" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "A New Standard for Underwriting Experience",
      leftSubheading:
        "Delivers clear, trusted journeys through guided, physician-led workflows.",
      rightSideIcon: <StarIcon width={iconWidth} height={iconHeight} />,
      rightTitle: "Setting a New Standard for Underwriting Experience",
      rightSubtitle:
        "InsurMD represents a shift from slow, opaque underwriting journeys to experiences that are guided, transparent, and clinically grounded.",

      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          By combining modern interfaces, physician-connected workflows, and
          structured progression, InsurMD helps transform one of the most
          challenging parts of life insurance into an experience defined by
          clarity and trust.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
