import React from "react";
import {
  GreenPointIcon,
  UserShieldIcon,
  UserCheckIcon,
  ClockIcon,
  HandShakeIcon,
  BuildingIcon,
  CycleIcon,
  HospitalIcon,
  LockIcon,
  ClipboardListIcon,
  UserLockIcon,
  PaperPlaneIcon,
  DesktopIcon,
  SecretUserIcon,
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
  hyphenLineFillColor: "#9E77ED",
  buttonBgClass:
    "[background:linear-gradient(170deg,#B692F6_41.33%,#53389E_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.70)]",
  rightDivBgClass: "bg-light-purple",
  iconBgClass: "linear-gradient(170deg,#B692F6 41.33%,#53389E 102.06%)",
  onClick: () => {},
};

export const useSecurityComplianceStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "A Healthcare-Grade Security Foundation",
      leftSubheading: "Designed with protected health information in mind",
      rightSideIcon: <HospitalIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Healthcare-Grade Security Across the Data Lifecycle",
      sectionDescription:
        "Ensures PHI is securely handled across ingestion, processing, and delivery—protecting data at every stage.",
      items: [
        { icon: gp, label: "Data ingestion" },
        { icon: gp, label: "Storage and processing " },
        { icon: gp, label: "Clinical review workflows " },
        { icon: gp, label: "Output generation" },
        { icon: gp, label: "Downstream delivery" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures sensitive medical data is protected not only at rest and
          in transit, but also throughout active use.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "HIPAA-Aligned Architecture",
      leftSubheading: "Privacy built into system design",
      rightSideIcon: (
        <UserShieldIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Privacy-First Architecture with HIPAA Alignment",
      sectionDescription:
        "Implements strict access controls, authorization, and monitoring to ensure secure and compliant handling of PHI.",
      items: [
        { icon: gp, label: "Role-based access controls" },
        { icon: gp, label: "Minimum necessary data exposure" },
        { icon: gp, label: "Secure authorization workflows" },
        { icon: gp, label: "Access logging and monitoring" },
        { icon: gp, label: "Vendor security governance" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          All PHI access is gated by explicit patient authorization and tightly
          scoped permissions.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "End-to-End Encryption",
      leftSubheading: "Protecting data across every boundary",
      rightSideIcon: <LockIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "End-to-End Encryption Across All Data Boundaries",
      sectionDescription:
        "Applies strong encryption in transit, at rest, and across services to protect sensitive data at every stage.",
      items: [
        { icon: gp, label: "Encryption in transit using strong TLS protocols" },
        { icon: gp, label: "Encryption at rest across storage layers" },
        { icon: gp, label: "Encrypted inter-service communication" },
        { icon: gp, label: "Secure key management practices" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This multi-layer encryption strategy minimizes exposure across both
          internal and external boundaries.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Explicit Patient Authorization Controls",
      leftSubheading: "Consent as a first-class primitive",
      rightSideIcon: (
        <UserCheckIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Structured Outputs That Reduce Manual Effort",
      sectionDescription:
        "InsurMD delivers organized clinical artifacts, eliminating the need to review lengthy, unstructured records.",
      items: [
        { icon: gp, label: "Digitally captured consent flows" },
        { icon: gp, label: "Jurisdiction-aware authorization templates" },
        { icon: gp, label: "Time-stamped consent lineage" },
        { icon: gp, label: "Revocation-aware handling" },
        { icon: gp, label: "Audit-ready authorization records" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This creates a verifiable trust chain from patient permission to
          underwriting consumption.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Comprehensive Auditability",
      leftSubheading: "Every action leaves a trail",
      rightSideIcon: (
        <ClipboardListIcon width={iconWidth} height={iconHeight} />
      ),
      sectionTitle: "Complete Traceability Across Every Platform Action",
      sectionDescription:
        "Maintains detailed logs for consent, data processing, and outputs to support audits and governance.",
      items: [
        { icon: gp, label: "Consent capture events " },
        { icon: gp, label: "Record retrieval metadata " },
        { icon: gp, label: "Data transformations" },
        { icon: gp, label: "Clinical review touchpoints" },
        { icon: gp, label: "Output generation and delivery logs" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          These logs support internal governance, external audits, and
          regulatory defensibility.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Secure Clinical Review Workflows",
      leftSubheading: "Protecting data during active interpretation",
      rightSideIcon: <UserLockIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Secure Clinical Review Environments for Sensitive Data",
      sectionDescription:
        "Protects PHI during active analysis with isolated workspaces, strict access controls, and secure session management.",
      items: [
        { icon: gp, label: "Segmented clinical workspaces" },
        { icon: gp, label: "Access isolation controls" },
        { icon: gp, label: "Session security enforcement " },
        { icon: gp, label: "Controlled export pathways" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures data remains protected even during its most sensitive
          lifecycle stage — human interpretation.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Data Minimization Principles",
      leftSubheading: "Exposure reduction by design",
      rightSideIcon: (
        <ClockIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Data Minimization to Reduce Exposure Risk",
      sectionDescription:
        "Limits unnecessary data access and propagation through scoped retrieval, tailored outputs, and controlled data handling.",
      items: [
        { icon: gp, label: "Scoped data retrieval where appropriate" },
        {
          icon: gp,
          label: "Output tailoring based on insurance company needs",
        },
        { icon: gp, label: "Controlled downstream payload design" },
        { icon: gp, label: "Limited data persistence windows when applicable" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Minimizing exposure surface area is one of the most effective ways to
          reduce systemic risk.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Secure Data Delivery to Insurance companiess",
      leftSubheading: "Enterprise-ready handoff mechanisms",
      rightSideIcon: <PaperPlaneIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Secure Data Delivery Aligned with Insurance companies Requirements",
      sectionDescription:
        "Supports encrypted APIs, secure transfers, and configurable delivery methods to match insurance company security and governance needs.",
      items: [
        { icon: gp, label: "Encrypted APIs" },
        { icon: gp, label: "Secure file transfer mechanisms" },
        { icon: gp, label: "Hardened portal delivery" },
        { icon: gp, label: "Hybrid ingestion architectures" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Delivery methods are configurable to match each insurance company’s
          internal security posture and data governance policies.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Infrastructure Security Practices",
      leftSubheading: "Built for resilience and isolation",
      rightSideIcon: <DesktopIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Infrastructure Security Built for Resilience and Isolation",
      sectionDescription:
        "Implements segmented networks, least-privilege access, and continuous monitoring to reduce risk and ensure stability.",
      items: [
        { icon: gp, label: "Network segmentation" },
        { icon: gp, label: "Principle-of-least-privilege access models" },
        { icon: gp, label: "Environment isolation across deployment tiers" },
        { icon: gp, label: "Continuous monitoring and alerting" },
        { icon: gp, label: "Hardened service boundaries" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          These controls reduce blast radius and support operational resilience.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Vendor & Dependency Governance",
      leftSubheading: "A controlled ecosystem approach",
      rightSideIcon: (
        <HandShakeIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Governed ecosystem across vendors and dependencies",
      sectionDescription:
        "Applies strict evaluation, monitoring, and integration standards to maintain a consistent security baseline across third-party components.",
      items: [
        { icon: gp, label: "Vendor evaluation frameworks" },
        { icon: gp, label: "Dependency monitoring" },
        { icon: gp, label: "Secure integration patterns" },
        { icon: gp, label: "Ongoing risk review" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This helps maintain a consistent security baseline across the broader
          platform ecosystem.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Privacy by Design",
      leftSubheading: "Aligning technology with patient trust",
      rightSideIcon: <SecretUserIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Privacy-First Design Aligned with Patient Trust",
      sectionDescription:
        "Embeds transparency, consent, and controlled data usage into every product decision to protect sensitive information.",
      items: [
        {
          icon: gp,
          label: "Clear patient disclosure experiences",
        },
        { icon: gp, label: "Transparent data usage boundaries" },
        { icon: gp, label: "Scoped data sharing models" },
        { icon: gp, label: "Consent-centric workflows" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures the applicant experience reflects the sensitivity of the
          data being handled.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "Enterprise Governance Support",
      leftSubheading: "Enabling insurance company risk teams",
      rightSideIcon: (
        <BuildingIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Supporting Enterprise Risk and Governance Processes",
      sectionDescription:
        "Enables security reviews, audit readiness, and alignment with internal compliance frameworks for smoother onboarding.",
      items: [
        {
          icon: gp,
          label: "Security reviews by insurance company risk teams",
        },
        {
          icon: gp,
          label: "Architecture transparency for technical evaluators",
        },
        { icon: gp, label: "Audit readiness for regulated partners" },
        { icon: gp, label: "Alignment with internal compliance frameworks" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This reduces friction during procurement and partnership onboarding.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "13",
      leftHeading: "Continuous Security Evolution",
      leftSubheading: "Security as an ongoing discipline",
      rightSideIcon: (
        <CycleIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#B692F6"
          gradientTo="#53389E"
        />
      ),
      sectionTitle: "Security That Evolves with Emerging Threats",
      sectionDescription:
        "Continuously improves controls, monitoring, and infrastructure to adapt to evolving security risks.",
      items: [
        {
          icon: gp,
          label: "Ongoing control refinement",
        },
        { icon: gp, label: "Infrastructure hardening" },
        { icon: gp, label: "Monitoring and anomaly detection" },
        { icon: gp, label: "Secure development lifecycle practices" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Security is treated as a living system, not a static milestone.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
