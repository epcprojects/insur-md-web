import React from "react";
import {
  LayerIcon,
  ShieldIcon,
  GreenPointIcon,
  RocketIcon,
  PlugIcon,
  ExchangeIcon,
  ProjectIcon,
  DatabaseIcon,
  EnergyIcon,
  SliderIcon,
  NetworkWired,
  ChartIcon,
  HandShakeIcon,
  GearIcon,
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
  hyphenLineFillColor: "#F04438",
  buttonBgClass:
    "[background:linear-gradient(170deg,#FD6F8E_41.33%,#C01048_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]",
  rightDivBgClass: "bg-light-red",
  iconBgClass: "linear-gradient(170deg,#FD6F8E 41.33%,#C01048 102.06%)",
  onClick: () => {},
};

export const useIntegrationApiStepsConfig = (): ProcessStep[] => {
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
      leftHeading: "API-First by Design",
      leftSubheading: "Integration is not an afterthought",
      rightSideIcon: <PlugIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "API-First Integration for Embedded Underwriting Workflows",
      sectionDescription:
        "Enables seamless integration of clinical intelligence into workflows through APIs for case management, automation, and structured delivery.",
      items: [
        { icon: gp, label: "Case creation and lifecycle management" },
        { icon: gp, label: "Referral automation" },
        { icon: gp, label: "Status tracking and orchestration" },
        { icon: gp, label: "Structured output delivery" },
        { icon: gp, label: "Program-level configuration" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This allows InsurMD to function as a composable infrastructure layer
          within modern underwriting environments.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "02",
      leftHeading: "Flexible Integration Models",
      leftSubheading: "Adaptable to different carrier maturity levels",
      rightSideIcon: <ExchangeIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Flexible Integration Models for Different Deployment Needs",
      sectionDescription:
        "Supports API, hybrid, and low-lift approaches—allowing teams to start quickly and scale integration over time.",
      items: [
        {
          icon: gp,
          label:
            "Fully embedded orchestration inside underwriting platforms or digital application flows.",
          title: "Deep API integrations",
        },
        {
          icon: gp,
          label:
            "API-driven workflows combined with secure portals for human-in-the-loop processes.",
          title: "Hybrid deployments",
        },
        {
          icon: gp,
          label:
            "Secure delivery channels that enable rapid pilots without heavy engineering investment.",
          title: "Low-lift onboarding",
        },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This flexibility allows teams to start quickly and deepen integration
          over time.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "03",
      leftHeading: "Clean Case Lifecycle Management",
      leftSubheading: "From referral to delivery — fully observable",
      rightSideIcon: <ProjectIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Fully Observable Case Lifecycle from Referral to Delivery",
      sectionDescription:
        "Provides real-time visibility into case progress through structured lifecycle events and status checkpoints.",
      items: [
        { icon: gp, label: "Case initiation triggers" },
        { icon: gp, label: "Identity and onboarding status" },
        { icon: gp, label: "Authorization milestones" },
        { icon: gp, label: "Retrieval progress indicators" },
        { icon: gp, label: "Clinical review checkpoints" },
        { icon: gp, label: "Output readiness events" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This visibility enables underwriting operations teams to maintain full
          situational awareness across active cases.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "04",
      leftHeading: "Structured Data Outputs",
      leftSubheading: "Built for machine consumption",
      rightSideIcon: <DatabaseIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Structured Outputs Designed for System Integration",
      sectionDescription:
        "Delivers machine-ready data formats for seamless ingestion into underwriting systems, pipelines, and analytics tools.",
      items: [
        { icon: gp, label: "Structured JSON payloads" },
        { icon: gp, label: "Normalized clinical tables" },
        { icon: gp, label: "Metadata-rich document bundles" },
        { icon: gp, label: "Annotated medical records" },
        { icon: gp, label: "Carrier-specific schema mappings" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This enables seamless ingestion into underwriting engines, data
          pipelines, and analytics environments.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "05",
      leftHeading: "Designed for Underwriting Systems",
      leftSubheading: "Integration with real-world carrier stacks",
      rightSideIcon: (
        <LayerIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle: "Designed to Integrate with Existing Underwriting Systems",
      sectionDescription:
        "Works seamlessly with current platforms and tools, adapting to existing workflows without requiring operational changes.",
      items: [
        { icon: gp, label: "Underwriting workbenches" },
        { icon: gp, label: "Policy administration platforms" },
        { icon: gp, label: "Case management systems" },
        { icon: gp, label: "Data lakes and risk models" },
        { icon: gp, label: "Reinsurance data exchanges" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Rather than forcing workflow change, InsurMD adapts to existing
          operational patterns.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "06",
      leftHeading: "Event-Driven Workflows",
      leftSubheading: "Enabling modern orchestration patterns",
      rightSideIcon: (
        <EnergyIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle:
        "Event-Driven Integration for Real-Time Workflow Orchestration",
      sectionDescription:
        "Enables automated actions, dynamic routing, and real-time updates through lifecycle events and webhook notifications.",
      items: [
        { icon: gp, label: "Trigger underwriting actions automatically" },
        { icon: gp, label: "Route cases dynamically" },
        { icon: gp, label: "Update internal dashboards" },
        { icon: gp, label: "Notify operations teams in real time" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          Event-driven integration helps carriers reduce manual coordination
          overhead.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "07",
      leftHeading: "Configurable Output Schemas",
      leftSubheading: "Aligning with your underwriting logic",
      rightSideIcon: <SliderIcon width={iconWidth} height={iconHeight} />,
      sectionTitle:
        "Configurable Output Schemas Aligned with Underwriting Logic",
      sectionDescription:
        "Adapts data structures to match program needs, reducing the need for downstream transformation.",
      items: [
        { icon: gp, label: "Accelerated underwriting schemas" },
        { icon: gp, label: "High-face-value clinical depth profiles" },
        { icon: gp, label: "Reinsurance reporting formats" },
        { icon: gp, label: "Internal scoring model inputs" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures outputs align with your decisioning frameworks rather
          than forcing transformation downstream.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "08",
      leftHeading: "Secure Integration Layers",
      leftSubheading: "Enterprise-grade connectivity",
      rightSideIcon: (
        <NetworkWired
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle: "Secure Integration Layers for Enterprise Connectivity",
      sectionDescription:
        "Implements strong access controls, encryption, and isolation to enable safe integration within regulated environments.",
      items: [
        { icon: gp, label: "Authenticated API access controls" },
        { icon: gp, label: "Encrypted transport layers" },
        { icon: gp, label: "Scoped data access permissions" },
        { icon: gp, label: "Environment isolation" },
        { icon: gp, label: "Integration auditability" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This allows carriers to integrate confidently within regulated
          environments.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "09",
      leftHeading: "Scalable for High-Volume Programs",
      leftSubheading: "Built for throughput, not prototypes",
      rightSideIcon: <ChartIcon width={iconWidth} height={iconHeight} />,
      sectionTitle: "Built to Scale for High-Volume Underwriting Programs",
      sectionDescription:
        "Supports large case volumes, parallel processing, and multi-program deployments as operations grow.",
      items: [
        { icon: gp, label: "High referral volumes" },
        { icon: gp, label: "Parallel case processing" },
        { icon: gp, label: "Multi-program deployments" },
        { icon: gp, label: "Horizontal scaling across regions" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          The platform is designed to grow alongside distribution expansion and
          underwriting automation initiatives.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "10",
      leftHeading: "Rapid Pilot-to-Production Path",
      leftSubheading: "Start small, scale intentionally",
      rightSideIcon: (
        <RocketIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle: "Seamless Transition from Pilot to Full Deployment",
      sectionDescription:
        "Enables quick pilots with controlled testing and gradual integration to reduce risk and validate value early.",
      items: [
        { icon: gp, label: "Fast sandbox provisioning" },
        { icon: gp, label: "Controlled pilot cohorts" },
        { icon: gp, label: "Output validation loops" },
        { icon: gp, label: "Gradual integration deepening" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This reduces integration risk while allowing stakeholders to validate
          value early.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "11",
      leftHeading: "Collaboration with Technical Teams",
      leftSubheading: "Built for real enterprise onboarding",
      rightSideIcon: (
        <HandShakeIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle: "Collaborative Integration with Enterprise Technical Teams",
      sectionDescription:
        "Supports smooth onboarding through clear documentation, aligned design, and transparent data flow mapping.",
      items: [
        {
          icon: gp,
          label: "Clear technical documentation",
        },
        { icon: gp, label: "Integration design alignment" },
        { icon: gp, label: "Security review readiness" },
        { icon: gp, label: "Transparent data flow mapping" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures smoother onboarding and faster time-to-value.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "12",
      leftHeading: "Interoperability Across the Risk Stack",
      leftSubheading: "Connecting carriers, reinsurers, and partners",
      rightSideIcon: (
        <ShieldIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle:
        "Interoperability Across Carriers, Reinsurers, and Partners",
      sectionDescription:
        "Enables shared data, consistent artifacts, and reduced duplication across the underwriting ecosystem.",
      items: [
        {
          icon: gp,
          label: "Cleaner data handoffs to reinsurers",
        },
        { icon: gp, label: "Consistent clinical artifacts across partners" },
        { icon: gp, label: "Reduced duplication of record retrieval" },
        { icon: gp, label: "Shared visibility into case context" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This interoperability becomes increasingly valuable in multi-party
          underwriting ecosystems.
        </p>
      ),
      onClick: () => openModal(),
    },
    {
      variant: "B" as const,
      ...SHARED,
      numberText: "13",
      leftHeading: "Future-Proof by Architecture",
      leftSubheading: "Built for evolving underwriting models",
      rightSideIcon: (
        <GearIcon
          width={iconWidth}
          height={iconHeight}
          gradientFrom="#FD6F8E"
          gradientTo="#C01048"
        />
      ),
      sectionTitle: "Architecture Built for Evolving Underwriting Models",
      sectionDescription:
        "Supports ongoing changes with adaptable schemas, real-time decision layers, and integration with emerging technologies.",
      items: [
        {
          icon: gp,
          label: "Continuous schema evolution",
        },
        { icon: gp, label: "Integration with emerging underwriting AI models" },
        { icon: gp, label: "Real-time decision support layers" },
        { icon: gp, label: "Expanding data enrichment capabilities" },
      ],
      bottomContent: (
        <p className="text-black font-normal text-lg leading-[160%]">
          This ensures the platform remains aligned with where underwriting is
          going — not where it has been.
        </p>
      ),
      onClick: () => openModal(),
    },
  ];
};
