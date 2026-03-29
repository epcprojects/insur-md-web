import React from "react";
import {
  ShieldIcon,
  GreenPointIcon,
  CycleIcon,
  ProjectIcon,
  DatabaseIcon,
  UserDoctorIcon,
  TableIcon,
  SpeedoMeterIcon,
  PieChartIcon,
  ClipboardCheckIcon,
  UsersIcon,
  ChessKingIcon,
  UsersSettingIcon,
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
  hyphenLineFillColor: "#06AED4",
  buttonBgClass:
    "[background:linear-gradient(170deg,#22CCEE_41.33%,#0E7090_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]",
  rightDivBgClass: "bg-cyan-50",
  iconBgClass: "linear-gradient(170deg,#2CE 41.33%,#0E7090 102.06%)",
  onClick: () => {},
};

export const useUnderwritingTeamsStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "Underwriting Has a Data Problem — Not a Talent Problem",
      leftSubheading: "Great underwriters are constrained by incomplete inputs",
      rightSideIcon: (
        <DatabaseIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#22CCEE"
          gradientTo="#0E7090"
        />
      ),
      sectionTitle: "Data-Driven Friction",
      sectionDescription:
        "Underwriting delays are driven by data quality and timing issues.",
      items: [
        { icon: gp, label: "Fragmented medical histories" },
        { icon: gp, label: "Delayed APS returns" },
        { icon: gp, label: "Contradictory provider documentation" },
        { icon: gp, label: "Unstructured charts requiring manual synthesis" },
        { icon: gp, label: "Limited clinical context behind diagnoses" },
      ],
      bottomContent: (
        <div className="flex flex-col gap-4">
          <p className="text-black font-normal text-lg leading-[160%]">
            The result is slower cycle times and avoidable uncertainty, even in
            experienced teams.
          </p>
          <p className="text-black font-normal text-lg leading-[160%]">
            InsurMD addresses the root issue: the signal layer underwriting
            depends on.
          </p>
        </div>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "Clinical Context, Not Just Records",
      leftSubheading: "Moving beyond document retrieval",
      rightSideIcon: (
        <UserDoctorIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#22CCEE"
          gradientTo="#0E7090"
        />
      ),
      sectionTitle: "From Documents to Clinical Interpretation",
      sectionDescription:
        "InsurMD goes beyond raw documents by delivering physician-led interpretation that helps underwriters clearly understand each case.",
      items: [
        { icon: gp, label: "Condition stability vs. progression" },
        { icon: gp, label: "Clinical severity in real-world context" },
        { icon: gp, label: "Treatment adherence signals" },
        { icon: gp, label: "Cross-condition interactions" },
        { icon: gp, label: "Material findings that may be buried in charts" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This transforms underwriting from document review into informed
          decision-making.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Longitudinal Medical Clarity",
      leftSubheading: "One timeline instead of scattered encounters",
      rightSideIcon: (
        <ShieldIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#22CCEE"
          gradientTo="#0E7090"
        />
      ),
      sectionTitle: "Reconstructing Longitudinal Clinical History",
      sectionDescription:
        "InsurMD organizes fragmented records into a clear, longitudinal clinical view for faster underwriting assessment.",
      items: [
        { icon: gp, label: "When conditions first emerged" },
        { icon: gp, label: "How they evolved over time" },
        { icon: gp, label: "Intervals of stability vs. escalation" },
        { icon: gp, label: "Treatment milestones" },
        { icon: gp, label: "Care continuity patterns" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This longitudinal framing is especially valuable for complex or
          high-face-value cases.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Structured Outputs Built for Underwriting Workflows",
      leftSubheading: "Designed for consumption, not interpretation",
      rightSideIcon: <TableIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Structured Outputs That Reduce Manual Effort",
      sectionDescription:
        "InsurMD delivers organized clinical artifacts, eliminating the need to review lengthy, unstructured records.",
      items: [
        { icon: gp, label: "Physician executive summaries" },
        { icon: gp, label: "Condition tables with timelines" },
        { icon: gp, label: "Medication reconciliations" },
        { icon: gp, label: "Highlighted abnormalities" },
        { icon: gp, label: "Risk annotations" },
        { icon: gp, label: "Source-linked documentation" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Everything is organized to accelerate comprehension without removing
          access to underlying records.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Faster Cycle Times Without Blind Spots",
      leftSubheading: "Speed that doesn’t compromise rigor",
      rightSideIcon: <SpeedoMeterIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Faster Decisions Without Compromising Confidence",
      sectionDescription:
        "InsurMD accelerates timelines while preserving underwriting accuracy and defensibility.",
      items: [
        { icon: gp, label: "Verified patient authorization" },
        { icon: gp, label: "Comprehensive data retrieval" },
        { icon: gp, label: "Physician oversight" },
        { icon: gp, label: "Transparent provenance" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables underwriting teams to move faster without expanding risk
          exposure due to incomplete data.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Better Risk Segmentation",
      leftSubheading: "Surface nuance that raw data often hides",
      rightSideIcon: <PieChartIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Surfacing Hidden Patterns for Better Risk Segmentation",
      sectionDescription:
        "InsurMD extracts key signals from unstructured charts to enable more precise and consistent risk assessment.",
      items: [
        { icon: gp, label: "Subclinical indicators" },
        { icon: gp, label: "Care adherence patterns" },
        { icon: gp, label: "Early-stage comorbidities" },
        { icon: gp, label: "Gaps in follow-up care" },
        { icon: gp, label: "Medication volatility" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          These insights can support both conservative and accelerated
          underwriting strategies.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Decision Confidence in Regulated Environments",
      leftSubheading: "Built for explainability",
      rightSideIcon: (
        <ClipboardCheckIcon width={iconWidth} height={iconHeight} />
      ),
      sectionTitle: "Audit-Ready Outputs with Full Traceability",
      sectionDescription:
        "InsurMD ensures every insight is traceable, supporting clear justification and auditability in underwriting decisions.",
      items: [
        { icon: gp, label: "Source documentation" },
        { icon: gp, label: "Physician interpretation layers" },
        { icon: gp, label: "Consent lineage" },
        { icon: gp, label: "Retrieval metadata" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This level of transparency supports governance, internal review, and
          regulatory defensibility.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Designed for Modern Underwriting Models",
      leftSubheading: "Flexible enough for multiple risk philosophies",
      rightSideIcon: (
        <ProjectIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#22CCEE"
          gradientTo="#0E7090"
        />
      ),
      sectionTitle: "Flexible Outputs Across Underwriting Models",
      sectionDescription:
        "InsurMD supports multiple underwriting approaches with configurable outputs tailored to required clinical depth.",
      items: [
        { icon: gp, label: "Fully underwritten programs" },
        { icon: gp, label: "Accelerated underwriting tracks" },
        { icon: gp, label: "Fluidless models" },
        { icon: gp, label: "Hybrid digital underwriting" },
        { icon: gp, label: "Reinsurance data enrichment" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Outputs can be configured to align with the level of clinical depth
          required by each program.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Empowering Frontline Underwriters",
      leftSubheading: "Reducing cognitive load where it matters most",
      rightSideIcon: <UsersIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Empowering Underwriters to Scale with Consistency",
      sectionDescription:
        "Reduces manual effort so underwriters can handle more cases, focus on decisions, and maintain consistent evaluations.",
      items: [
        {
          icon: gp,
          label: "Focus on decision quality instead of document parsing",
        },
        { icon: gp, label: "Handle more cases without burnout" },
        { icon: gp, label: "Escalate fewer files for additional data" },
        { icon: gp, label: "Maintain consistency across evaluations" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This improves both throughput and decision uniformity.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Strategic Value for Chief Underwriters & CROs",
      leftSubheading: "A platform-level underwriting advantage",
      rightSideIcon: <ChessKingIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Strategic Advantage for Underwriting Leadership",
      sectionDescription:
        "Enhances speed, data quality, and risk insights—driving better conversion, lower costs, and stronger competitive positioning.",
      items: [
        { icon: gp, label: "Shorter time-to-decision across the book" },
        { icon: gp, label: "Improved applicant conversion rates" },
        { icon: gp, label: "Reduced APS dependency costs" },
        {
          icon: gp,
          label: "Better insight into population-level risk patterns",
        },
        {
          icon: gp,
          label: "Stronger alignment with digital distribution models",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          In competitive markets, underwriting speed and data quality directly
          influence growth.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Reinsurance Alignment",
      leftSubheading: "Shared clarity across the risk stack",
      rightSideIcon: <UsersSettingIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Aligned Risk Communication Across Stakeholders",
      sectionDescription:
        "Enables faster reviews, clearer communication, and reduced back-and-forth across insurance company and reinsurance teams.",
      items: [
        {
          icon: gp,
          label: "Faster facultative reviews",
        },
        { icon: gp, label: "Clearer risk communication" },
        { icon: gp, label: "Reduced data back-and-forth" },
        { icon: gp, label: "Stronger alignment on complex cases" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This shared clinical layer reduces friction across the underwriting
          ecosystem.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "Built for Continuous Improvement",
      leftSubheading: "Shared clarity across the risk stack",
      rightSideIcon: (
        <CycleIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#22CCEE"
          gradientTo="#0E7090"
        />
      ),
      sectionTitle: "Designed for Continuous Underwriting Evolution",
      sectionDescription:
        "Enables ongoing refinement of outputs, models, and insights as underwriting strategies evolve over time.",
      items: [
        {
          icon: gp,
          label: "Refine output schemas over time",
        },
        { icon: gp, label: "Align insights with internal scoring models" },
        { icon: gp, label: "Identify recurring data gaps" },
        { icon: gp, label: "Inform accelerated underwriting thresholds" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The platform becomes more valuable as underwriting strategies evolve.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
