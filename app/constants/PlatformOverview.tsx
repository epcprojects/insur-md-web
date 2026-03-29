import React from "react";
import {
  NetworkWired,
  LayerIcon,
  UserDoctorIcon,
  GreenPointIcon,
  BrainIcon,
  GearIcon,
  HandShakeIcon,
  FileMedicalIcon,
  BuildingIcon,
  CycleIcon,
  ShapesIcon,
} from "@/public/icons";
import {
  ProcessStepItemVariantA,
  ProcessStepItemVariantB,
  ProcessStepItemVariantC,
  ProcessStepItemVariantCustom,
} from "../components/sections/ProcessStepComponent";
import { useIsMobile } from "../hooks/useIsMobile";
import { MedicalBriefcaseIcon } from "@/public/icons/MedicalBriefcaseIcon";
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

export const usePlatformStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "Clinical Intelligence Infrastructure",
      leftSubheading: "Beyond vendors. Beyond point solutions.",
      rightSideIcon: <BrainIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Introducing Clinical Intelligence as a Core Underwriting Layer",
      sectionDescription:
        "nifies physician-guided workflows, longitudinal data, and structured outputs to deliver real-time clinical intelligence for underwriting.",
      items: [
        { icon: gp, label: "Physician-guided clinical workflows" },
        { icon: gp, label: "Longitudinal medical data assembly" },
        { icon: gp, label: "Structured clinical interpretation " },
        { icon: gp, label: "Integration-ready outputs" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This convergence creates a new primitive for underwriting: real-time
          clinical intelligence.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "Physician-Led by Architecture",
      leftSubheading: "Clinical grounding built into the platform",
      rightSideIcon: <GearIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Clinically Grounded, Physician-Led Platform Architecture",
      sectionDescription:
        "Embeds licensed physicians into workflows, ensuring clinically accurate, responsible, and credible medical interpretation across the platform.",
      items: [
        { icon: gp, label: "Clinically grounded data flows " },
        { icon: gp, label: "Responsible medical interpretation" },
        { icon: gp, label: "Stronger credibility in regulated environments" },
        { icon: gp, label: "Clear clinical provenance across outputs" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The platform does not abstract medicine away — it operationalizes it.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "A Unified Clinical Pipeline",
      leftSubheading: "From referral to insight in one orchestrated flow",
      rightSideIcon: <NetworkWired width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Unified, End-to-End Clinical Pipeline",
      sectionDescription:
        "Orchestrates onboarding, records, physician interpretation, and structured delivery in a single integrated workflow.",
      items: [
        { icon: gp, label: "Secure onboarding and authorization" },
        { icon: gp, label: "Nationwide medical record retrieval" },
        { icon: gp, label: "Longitudinal data normalization" },
        { icon: gp, label: "Physician-led interpretation" },
        { icon: gp, label: "Structured underwriting delivery" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          By compressing these steps into a single system, InsurMD transforms a
          historically fragmented process into an integrated experience.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Designed for the Insurance Risk Stack",
      leftSubheading: "Built where healthcare and underwriting intersect",
      rightSideIcon: <HandShakeIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Purpose-Built for the Insurance Risk Stack",
      sectionDescription:
        "Integrates medical data with underwriting workflows, supporting insurance companys, MGAs, reinsurers, and medical teams as shared infrastructure.",
      items: [
        { icon: gp, label: "Insurance companiess" },
        { icon: gp, label: "MGAs" },
        { icon: gp, label: "Reinsurers" },
        { icon: gp, label: "Medical directors" },
        { icon: gp, label: "Digital underwriting teams" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This cross-stack relevance enables InsurMD to function as shared
          infrastructure rather than a single-point tool.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Structured Outputs for Real Decisions",
      leftSubheading: "Turning medical complexity into actionable clarity",
      rightSideIcon: <FileMedicalIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Structured Clinical Outputs for Actionable Decisions",
      sectionDescription:
        "Converts unstructured medical data into timelines, summaries, and annotated insights ready for underwriting decisions.",
      items: [
        { icon: gp, label: "Longitudinal timelines" },
        { icon: gp, label: "Condition normalization" },
        { icon: gp, label: "Physician summaries" },
        { icon: gp, label: "Clinical annotations" },
        { icon: gp, label: "Integration-ready data models" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The result is information designed for decisions — not document
          review.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Integration-Ready by Design",
      leftSubheading: "Built to embed, not sit beside",
      rightSideIcon: <LayerIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Integration-Ready Platform Designed for Underwriting",
      sectionDescription:
        "Embeds seamlessly into underwriting ecosystems with APIs, event-driven workflows, and multi-system interoperability.",
      items: [
        { icon: gp, label: "Seamless case orchestration" },
        { icon: gp, label: "Event-driven workflows" },
        { icon: gp, label: "Structured data ingestion" },
        { icon: gp, label: "Multi-system interoperability" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          InsurMD becomes part of the underwriting fabric rather than an
          external dependency.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Enterprise-Grade Foundations",
      leftSubheading: "Built for scale and scrutiny",
      rightSideIcon: <BuildingIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Enterprise-Grade Foundations for Scalable Healthcare & Insurance",
      sectionDescription:
        "Delivers secure, auditable, and physician-governed infrastructure built for scale, compliance, and long-term adoption.",
      items: [
        { icon: gp, label: "Secure, auditable data flows" },
        { icon: gp, label: "Physician-led governance layers" },
        { icon: gp, label: "Configurable deployment models" },
        { icon: gp, label: "Transparent clinical provenance" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures the platform is viable for both pilots and long-term
          infrastructure adoption.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Enabling Modern Underwriting Models",
      leftSubheading: "Powering the shift to real-time decisioning",
      rightSideIcon: (
        <MedicalBriefcaseIcon width={iconWidth} height={iconHeight} />
      ),
      sectionTitle: "Enabling Modern, Real-Time Underwriting Models",
      sectionDescription:
        "Delivers rapid, physician-grounded clinical insights and structured data to power dynamic underwriting pipelines.",
      items: [
        { icon: gp, label: "Faster clinical clarity" },
        { icon: gp, label: "Physician-grounded insights" },
        { icon: gp, label: "Structured data for decision engines" },
        { icon: gp, label: "Integration into modern underwriting pipelines" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The platform helps insurance companys modernize without sacrificing
          clinical depth.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "A Platform That Compounds Value",
      leftSubheading: "Infrastructure that improves over time",
      rightSideIcon: <CycleIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Platform That Compounds Value Over Time",
      sectionDescription:
        "Continuously enhances underwriting workflows through evolving outputs, optimized integration, and deeper clinical alignment.",
      items: [
        { icon: gp, label: "Output schema evolution" },
        { icon: gp, label: "Workflow optimization - Integration expansion" },
        { icon: gp, label: "Clinical alignment with internal models" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This makes InsurMD not just a tool, but a continuously evolving
          infrastructure layer.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Human Expertise, Amplified by Technology",
      leftSubheading: "The balance that defines the platform",
      rightSideIcon: <UserDoctorIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Human Expertise Amplified by Technology",
      sectionDescription:
        "Combines physician-led clinical insight with scalable technology to accelerate decisions and reinforce underwriting accuracy.",
      items: [
        { icon: gp, label: "Technology accelerates" },
        { icon: gp, label: "Physicians interpret" },
        { icon: gp, label: "Underwriters decide" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Each layer reinforces the others.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "A Shared Layer for a Fragmented Ecosystem",
      leftSubheading: "Unifying how clinical insight flows",
      rightSideIcon: <NetworkWired width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Shared Clinical Layer for a Fragmented Ecosystem",
      sectionDescription:
        "Unifies medical insight across insurance companys and reinsurers, reducing duplication and improving collaboration and consistency.",
      items: [
        {
          icon: gp,
          label:
            "Cleaner collaboration across insurance companys and reinsurers",
        },
        { icon: gp, label: "More consistent clinical narratives" },
        { icon: gp, label: "Reduced duplication of effort" },
        { icon: gp, label: "Stronger ecosystem alignment" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          A unified layer creates systemic efficiency.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "custom" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "The Strategic Role of InsurMD",
      leftSubheading:
        "From workflow improvement to infrastructure transformation",
      rightSideIcon: <ShapesIcon width={iconWidth} height={iconHeight} />,
      rightTitle: "The Strategic Role of InsurMD in Underwriting",
      rightSubtitle:
        "The modern life insurance ecosystem spans insurance companys, reinsurers, and distribution partners. InsurMD introduces a clinical layer that helps unify how medical insight flows across that stack.",
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          By grounding underwriting inputs in physician-led interpretation and
          structured outputs, InsurMD helps create a more cohesive and efficient
          risk ecosystem.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
