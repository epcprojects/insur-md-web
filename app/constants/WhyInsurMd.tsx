import React from "react";
import {
  LayerIcon,
  ShieldIcon,
  GreenPointIcon,
  FileMedicalIcon,
  BuildingIcon,
  CycleIcon,
  StethoscopeIcon,
  RocketIcon,
  GraphIcon,
  RobotIcon,
  UserCheckIcon,
  TrophyIcon,
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

export const useWhyInsurMdStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "A Physician-Led Model by Design",
      leftSubheading: "Medical workflows anchored in licensed oversight",
      rightSideIcon: <StethoscopeIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Physician-Led Clinical Framework for Underwriting Intelligence",
      sectionDescription:
        "Ensures medical data is accessed and interpreted through structured clinical oversight aligned with real-world practice.",
      items: [
        { icon: gp, label: "Physician-initiated clinical workflows" },
        { icon: gp, label: "Structured clinical review and synthesis" },
        { icon: gp, label: "Longitudinal patient understanding " },
        {
          icon: gp,
          label: "Responsible medical interpretation of historical data",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This approach aligns underwriting intelligence with real-world
          clinical practice — not just data aggregation.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "From Records to Clinical Understanding",
      leftSubheading: "Elevating data into meaningful care context",
      rightSideIcon: <FileMedicalIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Transforming Medical Records into Clinical Understanding",
      sectionDescription:
        "Converts raw documents into physician-led insights, providing clear and meaningful clinical context for each case.",
      items: [
        { icon: gp, label: "Comprehensive clinical assessments" },
        { icon: gp, label: "Longitudinal health evaluations" },
        { icon: gp, label: "Identification of potential care opportunities" },
        { icon: gp, label: "Clarification of historical diagnoses" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The result is not simply retrieved data, but clinically grounded
          understanding.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Built for Regulated Environments",
      leftSubheading: "Aligning innovation with responsibility",
      rightSideIcon: <ShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Designed for Regulated Healthcare and Insurance Environments",
      sectionDescription:
        "Ensures responsible clinical involvement, clear data provenance, and proper handling of sensitive health information.",
      items: [
        { icon: gp, label: "Authentic physician participation" },
        {
          icon: gp,
          label: "Appropriate clinical context around historical data",
        },
        { icon: gp, label: "Clear medical provenance across outputs" },
        {
          icon: gp,
          label: "Responsible handling of patient health information",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures the platform supports innovation while respecting the
          seriousness of medical workflows.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Speed With Clinical Integrity",
      leftSubheading: "Acceleration without cutting clinical corners",
      rightSideIcon: <RocketIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Delivering Speed Without Compromising Clinical Integrity",
      sectionDescription:
        "Accelerates underwriting while preserving clinical depth through physician-led, structured workflows.",
      items: [
        { icon: gp, label: "Rapid clinical clarity" },
        { icon: gp, label: "Responsible medical framing" },
        { icon: gp, label: "Defensible insight generation" },
        { icon: gp, label: "Reduced ambiguity in complex cases" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Speed is achieved through orchestration — not shortcuts.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "A Higher-Quality Signal Layer",
      leftSubheading: "Replacing fragmented data with interpreted insight",
      rightSideIcon: <GraphIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Replacing Fragmented Data with Interpreted Clinical Signals",
      sectionDescription:
        "Transforms unstructured records into clear, physician-guided insights for more accurate and meaningful risk evaluation.",
      items: [
        { icon: gp, label: "Timeline reconstruction" },
        { icon: gp, label: "Condition contextualization" },
        { icon: gp, label: "Medication reconciliation" },
        { icon: gp, label: "Clinical summarization" },
        { icon: gp, label: "Health trajectory interpretation" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Underwriters receive insight that reflects real clinical reasoning,
          not just aggregated documentation.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Purpose-Built for Insurance Workflows",
      leftSubheading: "Designed with underwriting reality in mind",
      rightSideIcon: (
        <MedicalBriefcaseIcon width={iconWidth} height={iconHeight} />
      ),
      sectionTitle: "Purpose-Built for Real-World Insurance Workflows",
      sectionDescription:
        "Delivers structured, explainable clinical insights aligned with underwriting processes and integration needs.",
      items: [
        { icon: gp, label: "Structured clinical outputs" },
        { icon: gp, label: "Traceable medical interpretation" },
        { icon: gp, label: "Integration-ready formats" },
        {
          icon: gp,
          label: "Clear alignment with underwriting review processes",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The result is a platform that fits insurance without diluting clinical
          rigor.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Enabling the Next Era of Underwriting",
      leftSubheading: "Where medicine and risk intelligence converge",
      rightSideIcon: <RobotIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Enabling the Next Era of Data-Driven Underwriting",
      sectionDescription:
        "Combines clinical insight with modern platforms to support faster, more intelligent, and digitally driven decision-making.",
      items: [
        { icon: gp, label: "Real-time underwriting environments" },
        { icon: gp, label: "Digitally native insurance company experiences" },
        { icon: gp, label: "AI-assisted risk models" },
        { icon: gp, label: "More responsive underwriting ecosystems" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          We are not replacing underwriting judgment — we are strengthening its
          clinical inputs.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Enterprise-Ready From Day One",
      leftSubheading: "Built for scrutiny, scale, and trust",
      rightSideIcon: <BuildingIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Enterprise-Ready Platform Built for Scale and Trust",
      sectionDescription:
        "Delivers secure, auditable, and configurable workflows designed to meet the demands of large, regulated organizations.",
      items: [
        { icon: gp, label: "Physician-led clinical grounding" },
        { icon: gp, label: "Secure, auditable data flows" },
        { icon: gp, label: "Configurable delivery models" },
        { icon: gp, label: "Governance-ready transparency" },
        { icon: gp, label: "Multi-stakeholder alignment" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This makes InsurMD viable as both a pilot solution and a long-term
          infrastructure layer.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Value Across the Organization",
      leftSubheading: "Clinical clarity that compounds enterprise-wide",
      rightSideIcon: <LayerIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Delivering Value Across the Entire Organization",
      sectionDescription:
        "Enhances clarity, decision-making, and collaboration across underwriting, medical, risk, and digital teams.",
      items: [
        { icon: gp, label: "Underwriters gain clearer clinical context." },
        {
          icon: gp,
          label: "Medical directors receive more coherent case narratives.",
        },
        {
          icon: gp,
          label: "Risk leadership gains defensible insight generation.",
        },
        {
          icon: gp,
          label: "Digital teams enable faster, more trusted journeys.",
        },
        {
          icon: gp,
          label: "Reinsurance partners receive clinically grounded artifacts.",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Clinical credibility strengthens the entire risk ecosystem.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "A More Responsible Applicant Experience",
      leftSubheading: "Modern speed with medical respect",
      rightSideIcon: <UserCheckIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Responsible and Trust-Centered Applicant Experience",
      sectionDescription:
        "Combines transparency, clinical involvement, and efficiency to deliver a respectful and seamless underwriting journey.",
      items: [
        { icon: gp, label: "Transparent consent" },
        { icon: gp, label: "Clear clinical involvement" },
        { icon: gp, label: "Faster clarity" },
        { icon: gp, label: "Reduced administrative burden" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This balances efficiency with respect for the sensitivity of medical
          data.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "A Platform That Improves Over Time",
      leftSubheading: "Designed for continuous clinical alignment",
      rightSideIcon: <CycleIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Platform That Continuously Evolves with Clinical Needs",
      sectionDescription:
        "Adapts outputs, workflows, and integrations over time to strengthen how clinical intelligence supports underwriting strategy.",
      items: [
        {
          icon: gp,
          label: "Clinical output structures",
        },
        { icon: gp, label: "Workflow alignment" },
        { icon: gp, label: "Integration depth" },
        { icon: gp, label: "Insight presentation models" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This allows insurance companys to continuously strengthen how clinical
          intelligence supports underwriting strategy.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "The Strategic Advantage",
      leftSubheading: "Turning clinical credibility into competitive strength",
      rightSideIcon: <TrophyIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Turning Clinical Credibility into Competitive Advantage",
      sectionDescription:
        "Enables faster, more reliable decisions while strengthening trust, efficiency, and long-term positioning in underwriting.",
      items: [
        {
          icon: gp,
          label: "Move faster while preserving clinical integrity",
        },
        { icon: gp, label: "Reduce reliance on fragmented legacy workflows" },
        { icon: gp, label: "Improve applicant confidence" },
        { icon: gp, label: "Strengthen internal decision defensibility" },
        {
          icon: gp,
          label: "Align infrastructure with the future of underwriting",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Clinical credibility becomes a competitive advantage.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
