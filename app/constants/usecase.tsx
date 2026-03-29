import React from "react";
import {
  UserDoctorIcon,
  GreenPointIcon,
  HandShakeIcon,
  EnergyIcon,
  MedicalNotesIcon,
  FileIcon,
  DollarIcon,
  LaptopIcon,
  WaterIcon,
  SmileIcon,
  SpeedoMeterIcon,
  ProjectIcon,
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

export const useUseCaseStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "Accelerated Underwriting Programs",
      leftSubheading: "Inject clinical depth into fast decisioning models",
      rightSideIcon: (
        <EnergyIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Enhancing Accelerated Underwriting with Clinical Depth",
      sectionDescription:
        "Adds physician-guided context to fast decisioning models, improving confidence without slowing down workflows.",
      items: [
        { icon: gp, label: "Add clinical depth to fluidless models " },
        { icon: gp, label: "Reduce reliance on APS retrieval " },
        { icon: gp, label: "Improve decision confidence in edge cases " },
        {
          icon: gp,
          label: "Support expansion of accelerated eligibility bands",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The result is faster programs that remain grounded in real clinical
          insight.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "High Face Value Policies",
      leftSubheading: "Strengthen rigor where it matters most",
      rightSideIcon: <DollarIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Strengthening High Face Value Underwriting with Clinical Insight",
      sectionDescription:
        "Provides deeper clinical clarity and physician-led interpretation for high-value cases without extending decision timelines.",
      items: [
        { icon: gp, label: "Longitudinal medical clarity " },
        { icon: gp, label: "Physician-led interpretation " },
        { icon: gp, label: "Better documentation for internal review " },
        { icon: gp, label: "Stronger alignment with reinsurance expectations" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables insurance companys to maintain rigor while reducing
          friction in high-stakes underwriting.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Complex Medical Histories",
      leftSubheading: "Bringing structure to challenging cases",
      rightSideIcon: (
        <MedicalNotesIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle:
        "Simplifying Complex Medical Histories for Better Evaluation",
      sectionDescription:
        "Organizes fragmented data into clear clinical narratives, enabling faster and more confident assessment of complex cases.",
      items: [
        { icon: gp, label: "Multi-condition applicants " },
        { icon: gp, label: "Incomplete provider documentation " },
        { icon: gp, label: "Conflicting historical records " },
        { icon: gp, label: "Long care timelines across systems" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Physician-guided interpretation helps underwriters evaluate complexity
          without prolonged back-and-forth data requests.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Digital-First Insurance companies Experiences",
      leftSubheading: "Align underwriting with modern distribution",
      rightSideIcon: <LaptopIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Enabling Digital-First Underwriting Experiences",
      sectionDescription:
        "Supports faster, transparent journeys that align with modern distribution while maintaining strong clinical grounding.",
      items: [
        { icon: gp, label: "Reduce post-application friction " },
        { icon: gp, label: "Shorten underwriting timelines" },
        { icon: gp, label: "Deliver clearer applicant experiences " },
        { icon: gp, label: "Support embedded insurance models" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This alignment is critical for insurance companys investing heavily in
          digital growth.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Reinsurance Collaboration",
      leftSubheading: "A shared clinical layer across the risk stack",
      rightSideIcon: (
        <HandShakeIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle:
        "Streamlining Reinsurance Collaboration with Shared Clinical Insight",
      sectionDescription:
        "Provides consistent, clinically grounded data that improves clarity, reduces duplication, and speeds alignment across stakeholders.",
      items: [
        { icon: gp, label: "Clearer facultative review inputs " },
        { icon: gp, label: "Reduced medical data ambiguity" },
        { icon: gp, label: "Faster risk alignment across parties " },
        { icon: gp, label: "Stronger clinical transparency" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This creates a more cohesive underwriting dialogue across the
          ecosystem.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "APS Reduction Strategies",
      leftSubheading: "Moving beyond legacy retrieval models",
      rightSideIcon: (
        <FileIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Reducing APS Dependency with Modern Clinical Workflows",
      sectionDescription:
        "Replaces slow legacy retrieval with faster, structured approaches that improve efficiency and applicant experience.",
      items: [
        { icon: gp, label: "Lower retrieval timelines " },
        { icon: gp, label: "Reduce operational overhead " },
        { icon: gp, label: "Improve applicant satisfaction " },
        { icon: gp, label: "Minimize fragmented provider responses" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This creates a pathway toward modernized underwriting infrastructure.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Fluidless Underwriting Initiatives",
      leftSubheading: "Supporting the next generation of risk models",
      rightSideIcon: <WaterIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Supporting Fluidless Underwriting with Clinical Context",
      sectionDescription:
        "Adds physician-guided insight to non-invasive models, improving clarity without introducing exam friction.",
      items: [
        { icon: gp, label: "Borderline eligibility cases " },
        { icon: gp, label: "Younger digital applicants " },
        { icon: gp, label: "Programs seeking expanded automation " },
        { icon: gp, label: "Iterative underwriting innovation" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          InsurMD acts as a clinical safety net for fluidless expansion.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Applicant Experience Transformation",
      leftSubheading: "Turning a slow process into a guided journey",
      rightSideIcon: <SmileIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Transforming the Applicant Experience into a Guided Journey",
      sectionDescription:
        "Replaces uncertainty with clarity, delivering faster timelines, better communication, and increased applicant confidence.",
      items: [
        { icon: gp, label: "Faster resolution timelines " },
        { icon: gp, label: "Clearer communication moments " },
        { icon: gp, label: "Reduced administrative burden " },
        { icon: gp, label: "Greater applicant confidence" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This creates brand lift while accelerating underwriting outcomes.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Operational Efficiency Initiatives",
      leftSubheading: "Reducing manual underwriting burden",
      rightSideIcon: (
        <SpeedoMeterIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Driving Operational Efficiency in Underwriting Workflows",
      sectionDescription:
        "Reduces manual effort and speeds case progression, enabling teams to handle more volume without increasing headcount.",
      items: [
        { icon: gp, label: "Reduced manual chart parsing " },
        { icon: gp, label: "Fewer follow-up requests" },
        { icon: gp, label: "Faster case progression " },
        { icon: gp, label: "Lower operational drag per file" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables underwriting teams to scale throughput without
          proportional headcount increases.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Medical Director Support",
      leftSubheading: "Providing clearer clinical narratives",
      rightSideIcon: (
        <UserDoctorIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle:
        "Supporting Medical Directors with Clear Clinical Narratives",
      sectionDescription:
        "Delivers structured, physician-informed insights that improve review efficiency and strengthen decision confidence.",
      items: [
        { icon: gp, label: "Cleaner clinical summaries " },
        { icon: gp, label: "Stronger longitudinal context " },
        { icon: gp, label: "Better decision defensibility" },
        { icon: gp, label: "Reduced time spent reconstructing case history" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This supports faster, more confident clinical oversight.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Program Modernization",
      leftSubheading: "A bridge from legacy to next-gen underwriting",
      rightSideIcon: (
        <ProjectIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#15B79E"
          gradientTo="#125D56"
        />
      ),
      sectionTitle: "Enabling Program Modernization Without Disruption",
      sectionDescription:
        "Acts as a bridge between legacy systems and modern workflows, allowing gradual transformation without major disruption.",
      items: [
        {
          icon: gp,
          label: "Pilot-driven innovation programs ",
        },
        { icon: gp, label: "Gradual underwriting digitization" },
        { icon: gp, label: "Selective deployment by product line " },
        { icon: gp, label: "Incremental workflow transformation" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables forward movement without disruptive change management.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
