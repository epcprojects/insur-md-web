import React from "react";

import {
  EnergyIcon,
  UserShieldIcon,
  KeyIcon,
  NetworkWired,
  LayerIcon,
  UserDoctorIcon,
  MagnifyingGlassIcon,
  GridIcon,
  TruckIcon,
  ClockIcon,
  ShieldIcon,
  ServerIcon,
  GreenPointIcon,
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

export const useProcessStepsConfig = (): ProcessStep[] => {
  const isMobile = useIsMobile();
  const { openModal } = useDemoModal();

  const iconWidth = isMobile ? "30" : undefined;
  const iconHeight = isMobile ? "30" : undefined;

  const gp = <GreenPointIcon />;

  return [
    {
      variant: "A" as const,
      ...SHARED,
      numberText: "01",
      leftHeading: "Referral & Case Initiation",
      leftSubheading: "Underwriting begins with a structured handoff",
      rightSideIcon: <EnergyIcon width={iconWidth} height={iconHeight} />,
      rightAboveDiv: {
        title: "Referrals can be initiated through:",
        description:
          "Every InsurMD case starts with a clean referral from the insurance company, BGA, or reinsurer.",
        items: [
          { icon: gp, label: "API-based case creation" },
          { icon: gp, label: "Secure portal uploads" },
          { icon: gp, label: "Batch submission pipelines" },
          {
            icon: gp,
            label: "Embedded referral triggers inside underwriting platforms",
          },
        ],
      },
      secondDiv: {
        title:
          "At intake, InsurMD generates a unique case envelope containing:",
        description:
          "This ensures downstream data retrieval and clinical interpretation align with your underwriting model from day one.",
        items: [
          { icon: gp, label: "Identity anchors" },
          { icon: gp, label: "Consent placeholders" },
          { icon: gp, label: "Insurance company metadata" },
          { icon: gp, label: "Output formatting preferences" },
          { icon: gp, label: "Jurisdictional handling rules" },
        ],
      },
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "Applicant Onboarding & Identity Assurance",
      leftSubheading: "A frictionless, mobile-first entry point",
      rightSideIcon: <UserShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "The onboarding layer handles",
      sectionDescription:
        "Applicants are guided into a secure mobile or web experience purpose-built for clarity and completion.",
      items: [
        { icon: gp, label: "Multi-factor identity verification" },
        { icon: gp, label: "Demographic normalization" },
        { icon: gp, label: "Consent education and disclosure" },
        { icon: gp, label: "Device-aware security hardening" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Unlike traditional APS workflows that rely on mailed forms or provider
          portals, InsurMD establishes identity and authorization in a single
          session — dramatically improving completion rates.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "C" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Explicit Patient Authorization",
      leftSubheading: "Consent that unlocks the longitudinal record",
      rightSideIcon: <KeyIcon width={iconWidth} height={iconHeight} />,
      firstSection: {
        title: "Applicants grant granular permission for",
        description:
          "InsurMD implements structured, auditable authorization flows designed for regulated healthcare environments.",
        items: [
          { icon: gp, label: "Nationwide provider queries" },
          { icon: gp, label: "Health information exchange retrieval" },
          { icon: gp, label: "Health system record pulls" },
          {
            icon: gp,
            label: "Pharmacy and medication data (where applicable)",
          },
        ],
      },
      onClick: () => openModal(),
      secondSection: {
        description: "All consent events are:",
        items: [
          { icon: gp, label: "Time-stamped" },
          { icon: gp, label: "Jurisdiction-aware" },
          { icon: gp, label: "Audit-ready" },
          { icon: gp, label: "Revocation-capable" },
        ],
      },
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This authorization layer is the foundation that enables rapid,
          compliant data access at scale.
        </p>
      ),
    },
    {
      variant: "C" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Nationwide Medical Record Retrieval",
      leftSubheading: "Building the longitudinal clinical picture",
      rightSideIcon: <NetworkWired width={iconWidth} height={iconHeight} />,
      firstSection: {
        title: "Patient History Retrieval Network",
        description:
          "Once authorization is secured, InsurMD activates its retrieval network to aggregate patient history across a distributed healthcare ecosystem.",
        items: [
          { icon: gp, label: "Integrated delivery networks" },
          { icon: gp, label: "Independent providers" },
          { icon: gp, label: "Specialty clinics" },
          {
            icon: gp,
            label: "Hospital systems",
          },
          {
            icon: gp,
            label: "Data exchange partners",
          },
        ],
      },
      onClick: () => openModal(),
      secondSection: {
        description: "Our retrieval engine is optimized for:",
        items: [
          { icon: gp, label: "Parallel querying across sources" },
          { icon: gp, label: "Deduplication of overlapping charts" },
          { icon: gp, label: "Record stitching across time" },
          { icon: gp, label: "Identity reconciliation across systems" },
        ],
      },
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The result is not a stack of documents — it’s a unified clinical
          timeline.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Data Normalization & Signal Extraction",
      leftSubheading: "Converting raw charts into usable medical structure",
      rightSideIcon: <LayerIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Healthcare Data Normalization",
      sectionDescription:
        "Healthcare data is inherently unstructured. InsurMD applies normalization layers to transform heterogeneous records into structured, analyzable formats.",
      items: [
        { icon: gp, label: "Problem list consolidation" },
        { icon: gp, label: "Diagnosis timeline reconstruction" },
        { icon: gp, label: "Medication reconciliation" },
        { icon: gp, label: "Procedure mapping" },
        { icon: gp, label: "Encounter classification" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This stage removes noise while preserving clinical fidelity, enabling
          physicians and underwriting teams to operate from a shared source of
          truth.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Physician-Led Clinical Assessment",
      leftSubheading: "Where data becomes insight",
      rightSideIcon: <UserDoctorIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Physicians evaluate",
      sectionDescription:
        "Every InsurMD case is reviewed by licensed physicians trained in structured clinical interpretation. Their role is not simply validation — it's synthesis.",
      items: [
        { icon: gp, label: "Condition progression and stability" },
        { icon: gp, label: "Treatment adherence patterns" },
        { icon: gp, label: "Comorbidity interactions" },
        { icon: gp, label: "Clinical severity indicators" },
        { icon: gp, label: "Inconsistencies across records" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This human-in-the-loop layer ensures the output reflects real clinical
          reasoning, not just algorithmic summarization.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Gaps-in-Care & Risk Contextualization",
      leftSubheading: "Identifying what's missing — not just what's present",
      rightSideIcon: (
        <MagnifyingGlassIcon width={iconWidth} height={iconHeight} />
      ),
      sectionTitle: "Absence Signal Analysis",
      sectionDescription:
        "Traditional record workflows surface historical data but often miss absence signals. InsurMD identifies and evaluates critical gaps that may impact underwriting decisions.",
      items: [
        { icon: gp, label: "Missing preventative screenings" },
        { icon: gp, label: "Lapsed follow-ups" },
        { icon: gp, label: "Untreated abnormal findings" },
        { icon: gp, label: "Medication discontinuity" },
        { icon: gp, label: "Fragmented specialty care" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          These signals provide underwriting teams with forward-looking context,
          not just retrospective data.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Structured Output Generation",
      leftSubheading: "Deliverables built for underwriting consumption",
      rightSideIcon: <GridIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Operational Clinical Outputs",
      sectionDescription:
        "InsurMD converts clinical interpretation into structured formats designed for operational use, delivering configurable outputs tailored to underwriting workflows.",
      items: [
        { icon: gp, label: "Physician narrative summaries" },
        { icon: gp, label: "Structured condition tables" },
        { icon: gp, label: "Medication matrices" },
        { icon: gp, label: "Timeline views" },
        { icon: gp, label: "Annotated medical records" },
        { icon: gp, label: "Risk flags and clinical notes" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Outputs are tailored to insurance company preferences and underwriting
          workflows.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Delivery Back to the Insurance companies",
      leftSubheading: "Clean handoff into underwriting systems",
      rightSideIcon: <TruckIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Secure Case Delivery",
      sectionDescription:
        "Delivers finalized outputs through secure, enterprise-ready channels.",
      items: [
        { icon: gp, label: "RESTful APIs" },
        { icon: gp, label: "Secure file transfer" },
        { icon: gp, label: "Encrypted portal delivery" },
        { icon: gp, label: "Hybrid ingestion models" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Data is packaged to minimize downstream transformation — reducing lift
          for underwriting and data engineering teams.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Timeline Compression",
      leftSubheading: "From months of friction to days of clarity",
      rightSideIcon: <ClockIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Typical impact",
      sectionDescription:
        "By collapsing authorization, retrieval, interpretation, and delivery into a unified pipeline, InsurMD compresses traditional timelines dramatically.",
      items: [
        { icon: gp, label: "Reduced APS dependency" },
        { icon: gp, label: "Faster underwriting cycle times" },
        { icon: gp, label: "Lower applicant abandonment" },
        { icon: gp, label: "Earlier risk clarity for insurance companys" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This acceleration compounds across high-volume underwriting
          environments.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Data Governance & Traceability",
      leftSubheading: "Every decision backed by provenance",
      rightSideIcon: <ShieldIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Lifecycle Traceability",
      sectionDescription:
        "Maintains full traceability across the case lifecycle.",
      items: [
        { icon: gp, label: "Consent lineage" },
        { icon: gp, label: "Retrieval source tracking" },
        { icon: gp, label: "Transformation logs" },
        { icon: gp, label: "Physician review markers" },
        { icon: gp, label: "Delivery audit trails" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures every clinical insight is explainable — a critical
          requirement in regulated insurance contexts.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "Built for Enterprise Scale",
      leftSubheading: "Infrastructure that grows with underwriting demand",
      rightSideIcon: <ServerIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Engineered for Scale",
      sectionDescription:
        "Built to support diverse operational and enterprise needs.",
      items: [
        { icon: gp, label: "High-throughput referral volumes" },
        { icon: gp, label: "Multi-insurance company deployments" },
        { icon: gp, label: "Configurable output schemas" },
        { icon: gp, label: "Jurisdiction-aware compliance" },
        { icon: gp, label: "Continuous workflow optimization" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures every clinical insight is explainable — a critical
          requirement in regulated insurance contexts.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
