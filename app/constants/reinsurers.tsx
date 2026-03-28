import React from "react";
import {
  GreenPointIcon,
  UserDoctorIcon,
  SpeedoMeterIcon,
  UsersIcon,
  UsersSettingIcon,
  FileIcon,
  LinkIcon,
  DoubleTickIcon,
  MedicalBookIcon,
  MedicalNotesIcon,
  EnergyIcon,
  ChartLineIcon,
} from "@/public/icons";
import {
  ProcessStepItemVariantA,
  ProcessStepItemVariantB,
  ProcessStepItemVariantC,
  ProcessStepItemVariantCustom,
} from "../components/sections/ProcessStepComponent";
import { useIsMobile } from "../hooks/useIsMobile";

export type ProcessStep =
  | ({ variant: "A" } & ProcessStepItemVariantA)
  | ({ variant: "B" } & ProcessStepItemVariantB)
  | ({ variant: "C" } & ProcessStepItemVariantC)
  | ({ variant: "custom" } & ProcessStepItemVariantCustom);

const SHARED = {
  hyphenLineFillColor: "#0BA5EC",
  buttonBgClass:
    "[background:linear-gradient(170deg,#36BFFA_41.33%,#0086C9_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#36BFFA,0_1.441px_24.649px_0_rgba(54,191,250,0.50)]",
  rightDivBgClass: "bg-blue-light50",
  iconBgClass: "linear-gradient(170deg,#36BFFA 41.33%,#0086C9 102.06%)",
  onClick: () => {},
};

export const useReinsurersStepsConfig = (): ProcessStep[] => {
  const isMobile = useIsMobile();

  const iconWidth = isMobile ? "30" : undefined;
  const iconHeight = isMobile ? "30" : undefined;

  const gp = <GreenPointIcon />;

  return [
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "01",
      leftHeading: "The Reinsurance Reality",
      leftSubheading: "High responsibility, uneven inputs",
      rightSideIcon: <FileIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Standardizing Clinical Inputs for Reinsurance Decisions",
      sectionDescription:
        "Reduces variability and ambiguity by delivering consistent, structured clinical data for faster and clearer risk evaluation.",
      items: [
        { icon: gp, label: "Raw APS documents" },
        { icon: gp, label: "Summaries with limited provenance " },
        { icon: gp, label: "Disconnected medical narratives" },
        { icon: gp, label: "Carrier-specific formatting" },
      ],
      bottomContent: (
      <p className="text-black font-normal text-lg leading-[160%]">
         This variability introduces friction, delays, and unnecessary ambiguity in risk evaluation. InsurMD helps standardize the clinical signal entering the reinsurance layer.
        </p>
       
        
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "A Shared Clinical Intelligence Layer",
      leftSubheading: "Creating alignment across stakeholders",
      rightSideIcon: <UsersIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9"/>,
      sectionTitle: "A Shared Clinical Intelligence Layer Across Stakeholders",
      sectionDescription:
        "Delivers consistent, physician-guided insights that align carriers and reinsurers, reducing friction and improving clarity.",
      items: [
        { icon: gp, label: "Consistent clinical framing " },
        { icon: gp, label: "Reduced interpretation divergence " },
        { icon: gp, label: "Faster cross-party alignment"},
        { icon: gp, label: "Clearer medical provenance"},
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          A shared clinical layer reduces friction across the entire risk ecosystem.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Faster Facultative Reviews",
      leftSubheading: "Accelerating high-touch decisions",
      rightSideIcon: <SpeedoMeterIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9"/>,
      sectionTitle: "Accelerating Facultative Reviews with Clear Clinical Insight",
      sectionDescription:
        "Delivers physician-interpreted outputs that improve clarity, reduce back-and-forth, and speed high-touch decision-making.",
      items: [
        { icon: gp, label: "Cleaner case narratives " },
        { icon: gp, label: "Faster clinical comprehension" },
        { icon: gp, label: "Reduced back-and-forth with carriers " },
        { icon: gp, label: "More efficient underwriting collaboration" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
       This shortens facultative cycle times without sacrificing depth.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Stronger Clinical Provenance",
      leftSubheading: "Confidence in where insights originate",
      rightSideIcon: <LinkIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Ensuring Strong Clinical Provenance and Traceability",
      sectionDescription:
        "Links source records, physician interpretation, and outputs to provide clear, reliable insight origins.",
      items: [
        { icon: gp, label: "Source medical records " },
        { icon: gp, label: "Physician interpretation layers " },
        { icon: gp, label: "Structured clinical summaries" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
        This provenance supports stronger confidence in clinical insights, particularly in complex or high-value cases.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Consistency Across Carrier Partners",
      leftSubheading: "Reducing variability in medical artifacts",
      rightSideIcon: <DoubleTickIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Driving Consistency Across Carrier Submissions",
      sectionDescription:
        "Normalizes clinical inputs across carriers, enabling faster reviews, clearer comparisons, and more consistent evaluations.",
      items: [
        { icon: gp, label: "More comparable case evaluations " },
        { icon: gp, label: "Streamlined internal reviews " },
        { icon: gp, label: "Reduced cognitive switching costs " },
        { icon: gp, label: "Clearer cross-carrier benchmarking" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
        Consistency improves both speed and accuracy.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Physician-Guided Clinical Framing",
      leftSubheading: "Medical interpretation that travels well across organizations",
      rightSideIcon: <MedicalBookIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Physician-Guided Clinical Framing Across Organizations",
      sectionDescription:
        "Delivers clear, transferable medical insights that reduce re-interpretation and improve cross-team collaboration.",
      items: [
        { icon: gp, label: "More intuitive medical narratives " },
        { icon: gp, label: "Reduced need for re-interpretation " },
        { icon: gp, label: "Stronger collaboration between carrier and reinsurer medical teams " },
        { icon: gp, label: "Clearer shared understanding of clinical nuance" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
         Human clinical grounding improves interoperability.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Supporting Complex Risk Evaluations",
      leftSubheading: "Clarity where it matters most",
      rightSideIcon: <MedicalNotesIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Structured Clinical Insight for Reinsurers",
      sectionDescription:
        "Organizes longitudinal patient histories into clear, coherent clinical views for better risk assessment.",
      items: [
        { icon: gp, label: "High face value policies " },
        { icon: gp, label: "Multi-condition applicants " },
        { icon: gp, label: "Incomplete or fragmented histories " },
        { icon: gp, label: "Escalated underwriting reviews" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
        Complexity becomes more navigable with structured clinical context.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Enabling Faster Carrier Collaboration",
      leftSubheading: "A more efficient underwriting dialogue",
      rightSideIcon: (
        <EnergyIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9"/>
      ),
      sectionTitle: "Enabling Faster Carrier Collaboration",
      sectionDescription:
        "Introduces a shared clinical baseline that reduces friction, aligns carriers and reinsurers, and accelerates underwriting decisions.",
      items: [
        { icon: gp, label: "Fewer clarification cycles " },
        { icon: gp, label: "Clearer clinical alignment " },
        { icon: gp, label: "Faster decision convergence" },
        { icon: gp, label: "Stronger partnership dynamics" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
       Better inputs create better collaboration.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Portfolio-Level Insights Over Time",
      leftSubheading: "From case clarity to ecosystem intelligence",
      rightSideIcon: <ChartLineIcon width={iconWidth} height={iconHeight}  />,
      sectionTitle: "Portfolio-Level Intelligence & Clinical Insights Over Time",
      sectionDescription:
        "Transforms clinical clarity at the case level into consistent, portfolio-wide underwriting insights.",
      items: [
        { icon: gp, label: "Clearer understanding of clinical variability " },
        { icon: gp, label: "More consistent medical narratives " },
        { icon: gp, label: "Improved alignment across distributed underwriting environments" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
       Structured clinical layers compound value over time.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Designed for Multi-Stakeholder Environments",
      leftSubheading: "Built for shared risk ecosystems",
      rightSideIcon: <UsersIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9"/>,
      sectionTitle: "Designed for Multi-Stakeholder Risk Environments",
      sectionDescription:
        "Enables transparent, traceable, and integration-ready clinical workflows, supporting aligned decision-making across shared risk ecosystems.",
      items: [
        { icon: gp, label: "Transparent clinical artifacts " },
        { icon: gp, label: "Integration" },
        { icon: gp, label: "ready outputs " },
         { icon: gp, label: "Governance-friendly data lineage" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
        These characteristics make InsurMD well-suited for shared risk infrastructures.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Complementing Reinsurer Medical Teams",
      leftSubheading: "Enhancing, not replacing, expertise",
      rightSideIcon: <UserDoctorIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9"/>,
      sectionTitle: "Complementing Reinsurer Medical Expertise",
      sectionDescription:
        "Enhances internal medical teams with structured clinical clarity, enabling faster evaluation and allowing experts to focus on judgment over reconstruction.",
      items: [
        {
          icon: gp,
          label: "Coherent clinical summaries ",
        },
        { icon: gp, label: "Longitudinal patient framing" },
        { icon: gp, label: "Reduced document fragmentation " },
        { icon: gp, label: "Faster case orientation" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
       This allows internal experts to focus on judgment rather than reconstruction.
        </p>
      ),
    },
      {
      variant: "custom" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "A More Cohesive Risk Stack",
      leftSubheading: "Aligning medicine and risk across layers",
      rightSideIcon: <UsersSettingIcon width={iconWidth} height={iconHeight} gradientFrom="#36BFFA"  gradientTo="#0086C9" />,
      rightTitle: "Building a More Cohesive and Aligned Risk Stack",
      rightSubtitle:
        "The modern life insurance ecosystem spans carriers, reinsurers, and distribution partners. InsurMD introduces a clinical layer that helps unify how medical insight flows across that stack.",
     
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
        By grounding underwriting inputs in physician-led interpretation and structured outputs, InsurMD helps create a more cohesive and efficient risk ecosystem.
        </p>
      ),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "13",
      leftHeading: "The Reinsurer Advantage",
      leftSubheading: "Unlocking the Reinsurer Advantage Across Ecosystems",
      rightSideIcon: <ChartLineIcon width={iconWidth} height={iconHeight}/>,
      sectionTitle: "Maximizing the Reinsurer Advantage Across Ecosystems",
      sectionDescription:
        "Reinsurers gain faster clarity, reduced ambiguity, stronger collaboration, and more consistent underwriting across the ecosystem.",
      items: [
        {
          icon: gp,
          label: "Faster facultative clarity ",
        },
        { icon: gp, label: "Reduced medical ambiguity " },
        { icon: gp, label: "Improved collaboration with carriers  " },
        { icon: gp, label: "Stronger clinical transparency " },
         { icon: gp, label: "More consistent underwriting dialogue " },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
      Clarity compounds across the stack.
        </p>
      ),
    },
  ];
};
