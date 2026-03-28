import React from "react";
import {
  GreenPointIcon,
  HandShakeIcon,
  ProjectIcon,
  UserShieldIcon,
  ClipboardCheckIcon,
  CycleIcon,
  MedicalBookIcon,
  ShieldIcon,
  LayerIcon,
  GlobeIcon,
  ContactBookIcon,
  HeartIcon,
  CubesIcon,
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

export const usePhysicalNetworkStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "A Physician-Led Platform by Design",
      leftSubheading: "Clinical workflows anchored in licensed expertise",
      rightSideIcon: <UserShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "A Physician-Led Platform Grounded in Clinical Expertise",
      sectionDescription:
        "Embeds qualified clinicians into every case to ensure insights are based on real medical reasoning, not just data processing.",
      items: [
        { icon: gp, label: "Guiding clinical workflows " },
        { icon: gp, label: "Reviewing longitudinal patient histories" },
        { icon: gp, label: "Interpreting historical medical data " },
        { icon: gp, label: "Producing structured clinical outputs" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures underwriting insights are grounded in real medical
          reasoning rather than purely algorithmic summarization.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "Purpose-Built Physician Network",
      leftSubheading: "Designed for modern clinical workflows",
      rightSideIcon: <GlobeIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Purpose-Built Physician Network for Modern Clinical Workflows",
      sectionDescription:
        "Curated network enables efficient, technology-driven collaboration while maintaining strong clinical integrity.",
      items: [
        { icon: gp, label: "Longitudinal record interpretation " },
        { icon: gp, label: "Structured clinical documentation" },
        { icon: gp, label: "Cross-jurisdictional care awareness " },
        { icon: gp, label: "Technology-enabled collaboration" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This allows physicians to operate efficiently within a modern,
          data-rich environment while preserving clinical integrity.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Credentialing & Professional Standards",
      leftSubheading: "Maintaining a high clinical bar",
      rightSideIcon: <ContactBookIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Maintaining High Clinical Standards Through Credentialing",
      sectionDescription:
        "Ensures quality and consistency through verified licensure, professional validation, and ongoing network oversight.",
      items: [
        { icon: gp, label: "Verification of active licensure " },
        { icon: gp, label: "Professional standing validation" },
        { icon: gp, label: "Alignment with scope-of-practice expectations" },
        { icon: gp, label: "Ongoing network stewardship" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          These guardrails help ensure the clinical layer remains credible and
          trusted by carriers and partners alike.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Structured Clinical Methodologies",
      leftSubheading: "Consistency across a distributed network",
      rightSideIcon: (
        <ProjectIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle:
        "Structured Clinical Methodologies for Consistent Interpretation",
      sectionDescription:
        "Applies standardized frameworks to ensure reliable, nuanced clinical insights across all cases.",
      items: [
        { icon: gp, label: "Longitudinal health evaluation " },
        { icon: gp, label: "Clinical timeline reconstruction" },
        { icon: gp, label: "Condition contextualization " },
        {
          icon: gp,
          label: "Responsible interpretation of historical findings",
        },
        { icon: gp, label: "Clear clinical summarization practices" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This balance of structure and clinical judgment enables both
          consistency and nuance.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Clinical Governance Framework",
      leftSubheading: "Oversight that scales with the platform",
      rightSideIcon: (
        <ClipboardCheckIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Clinical Governance That Scales with Platform Growth",
      sectionDescription:
        "Ensures consistent quality, accountability, and alignment across the physician network as operations expand.",
      items: [
        { icon: gp, label: "Defined clinical operating models " },
        { icon: gp, label: "Escalation pathways for complex cases" },
        { icon: gp, label: "Continuous refinement of clinical frameworks " },
        { icon: gp, label: "Alignment with evolving healthcare norms" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This governance layer ensures the physician network operates
          cohesively even as the platform scales.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Physician-In-The-Loop Intelligence",
      leftSubheading: "Where human expertise meets modern infrastructure",
      rightSideIcon: <CycleIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Physician-in-the-Loop Intelligence for Modern Clinical Workflows",
      sectionDescription:
        "Combines clinical expertise with structured systems to enhance analysis while preserving human judgment in decision-making.",
      items: [
        { icon: gp, label: "Efficient navigation of large medical histories " },
        { icon: gp, label: "Clear synthesis of complex cases" },
        { icon: gp, label: "Responsible medical framing of outputs  " },
        { icon: gp, label: "Stronger interpretability for underwriting teams" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Technology amplifies physicians — it does not replace them.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Responsible Clinical Interpretation",
      leftSubheading: "Context matters in healthcare data",
      rightSideIcon: (
        <MedicalBookIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle:
        "Responsible Clinical Interpretation with Contextual Understanding",
      sectionDescription:
        "Applies clinical judgment to interpret ambiguous data, ensuring insights reflect true medical context rather than raw records.",
      items: [
        { icon: gp, label: "Clinical nuance in historical interpretation " },
        { icon: gp, label: "Careful handling of uncertain findings" },
        { icon: gp, label: "Balanced representation of patient histories " },
        { icon: gp, label: "Medically grounded summarization" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures outputs reflect clinical reality rather than raw data
          artifacts.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Alignment With Regulated Environments",
      leftSubheading: "Built for healthcare-adjacent use cases",
      rightSideIcon: <ShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Aligned with Regulated Healthcare and Insurance Environments",
      sectionDescription:
        "Ensures responsible handling of medical data through clinician involvement, clear provenance, and transparent interpretation.",
      items: [
        { icon: gp, label: "Authentic clinician involvement " },
        { icon: gp, label: "Clear clinical provenance " },
        { icon: gp, label: "Responsible data interpretation " },
        { icon: gp, label: "Transparent medical framing" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This alignment supports trust across carriers, partners, and
          applicants.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Clinical Quality at Scale",
      leftSubheading: "Designed to grow without dilution",
      rightSideIcon: <LayerIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Maintaining Clinical Quality at Scale Without Compromise",
      sectionDescription:
        "Uses structured frameworks and continuous refinement to preserve consistency and credibility as the platform grows.",
      items: [
        { icon: gp, label: "Structured clinical playbooks " },
        { icon: gp, label: "Ongoing framework refinement " },
        { icon: gp, label: "Platform-supported consistency" },
        { icon: gp, label: "Feedback-informed evolution" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables growth without sacrificing credibility.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Collaboration With Carrier Medical Teams",
      leftSubheading: "Complementing existing clinical leadership",
      rightSideIcon: <HandShakeIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Seamless Collaboration with Carrier Medical Leadership",
      sectionDescription:
        "Provides clear summaries, structured narratives, and transparent insights to support alignment with internal clinical teams.",
      items: [
        { icon: gp, label: "Coherent clinical summaries " },
        { icon: gp, label: "Structured patient narratives " },
        { icon: gp, label: "Transparent clinical provenance " },
        { icon: gp, label: "Clear interpretation layers" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This supports better collaboration between InsurMD physicians and
          carrier-side medical leadership.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Clinical Transparency & Traceability",
      leftSubheading: "Clear lineage from physician to output",
      rightSideIcon: <UserShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Clinical Transparency with End-to-End Traceability",
      sectionDescription:
        "Ensures every output is linked to physician involvement, supporting governance, review processes, and trusted decision-making.",
      items: [
        {
          icon: gp,
          label: "Internal carrier governance ",
        },
        { icon: gp, label: "Clinical review processes" },
        { icon: gp, label: "Multi-stakeholder alignment " },
        { icon: gp, label: "Confidence in interpretation layers" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Traceable clinical authorship reinforces trust in the platform’s
          outputs.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "custom" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "A More Human Clinical Layer",
      leftSubheading: "Restoring clinical presence in digital underwriting",
      rightSideIcon: <HeartIcon width={iconWidth} height={iconHeight} />,
      rightTitle: "Bringing Human Clinical Expertise into Modern Underwriting",
      rightSubtitle:
        "As underwriting becomes increasingly digital, maintaining authentic clinical involvement becomes more important — not less. InsurMD ensures that speed and automation do not come at the expense of human medical oversight.",

      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          By embedding physicians directly into a modern infrastructure layer,
          InsurMD restores a human clinical dimension to accelerated
          underwriting environments.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "13",
      leftHeading: "The Clinical Foundation of InsurMD",
      leftSubheading: "Built on a Strong Clinical Core",
      rightSideIcon: <CubesIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "The Clinical Foundation Behind InsurMD",
      sectionDescription:
        "Combines physician expertise, structured methodologies, and governance-driven design to deliver fast, clinically grounded underwriting insights.",
      items: [
        {
          icon: gp,
          label: "Curated physician participation  ",
        },
        { icon: gp, label: "Structured clinical methodologies " },
        { icon: gp, label: "Governance-minded design " },
        { icon: gp, label: "Technology-enabled workflows" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          InsurMD delivers clinical intelligence that is both modern and
          medically grounded. This is what makes faster underwriting possible
          without losing clinical credibility.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
