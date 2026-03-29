import { images } from "../ui";

export const steps = [
  {
    id: "01",
    title: "The applicant is referred to InsurMD by the life insurance company",
    image: images.landingImages.clarityStepOne,
  },
  {
    id: "02",
    title:
      "The applicant connects with a licensed physician through the InsurMD mobile app",
    image: images.landingImages.clarityStepTwo,
  },
  {
    id: "03",
    title:
      "The applicant grants secure permission to access their historic medical records",
    image: images.landingImages.clarityStepThree,
  },
  {
    id: "04",
    title: "InsurMD retrieves, aggregates, and normalizes the data",
    image: images.landingImages.clarityStepFour,
  },
  {
    id: "05",
    title: "A physician conducts a structured clinical assessment",
    image: images.landingImages.clarityStepFive,
  },
  {
    id: "06",
    title: "A gaps-in-care and risk summary is generated",
    image: images.landingImages.clarityStepSix,
  },
  {
    id: "07",
    title:
      "Records and clinical insights are delivered back to the insurance company in a clean, structured format",
    image: images.landingImages.clarityStepSeven,
  },
];

export const cards = [
  {
    title: "Physician access",
    icon: images.landingImages.triangleIcon,
  },
  {
    title: "Nationwide medical data retrieval",
    icon: images.landingImages.nationWideIcon,
  },
  {
    title: "Clinical interpretation",
    icon: images.landingImages.triangle3Icon,
  },
  {
    title: "Structured risk outputs",
    icon: images.landingImages.sRiskIcon,
  },
];

export const featuresList = [
  {
    title: "Instant physician access",
    description:
      "Applicants connect with board-certified physicians in minutes — no scheduling friction, no clinical blind spots.",
    icon: images.landingImages.instantIcon,
    bgColor: "#F6FEFC",
  },
  {
    title: "Unified medical record retrieval",
    description:
      "We securely query nationwide provider networks, health systems, and data partners to assemble a longitudinal patient record.",
    icon: images.landingImages.unifiedIcon,
    bgColor: "#F0FDF9",
  },
  {
    title: "Clinical interpretation, not just raw data",
    description:
      "Our physicians don’t just gather records — they interpret them. Every case includes a structured clinical summary built for underwriting teams.",
    icon: images.landingImages.rawDataIcon,
    bgColor: "#CCFBEF50",
  },
  {
    title: "Gaps-in-care intelligence",
    description:
      "We identify missing screenings, unmanaged conditions, and risk signals that traditional APS workflows often miss.",
    icon: images.landingImages.gapsIcon,
    bgColor: "#99F6E040",
  },
  {
    title: "Structured delivery to insurance companys",
    description:
      "Receive normalized medical records, physician assessments, and risk insights in formats built for underwriting systems.",
    icon: images.landingImages.sDeliveryicon,
    bgColor: "#5FE9D040",
  },
];

export const highlightCards = [
  {
    title: "Accelerated underwriting programs",
    description:
      "Inject physician-grade clinical clarity into fast-track underwriting models.",
    icon: images.landingImages.styleMetalOne,
    bgColor: "#15B79E",
  },
  {
    title: "High-face-value policies",
    description: "Improve data completeness and reduce manual APS burden.",
    icon: images.landingImages.styleMetalTwo,
    bgColor: "#0E9384",
  },
  {
    title: "Complex medical histories",
    description:
      "Bring structure to cases that traditionally require extensive follow-up.",
    icon: images.landingImages.styleMetalThree,
    bgColor: "#107569",
  },
  {
    title: "Digital-first insurance companys",
    description:
      "Align underwriting infrastructure with modern consumer expectations.",
    icon: images.landingImages.styleMetalFour,
    bgColor: "#125D56",
  },
];

type BulletItem = {
  label: string;
  color: string; // main accent color
};

export const teamBulletItems: BulletItem[] = [
  {
    label: "Longitudinal medical record aggregation",
    color: "#107569",
  },
  {
    label: "Physician-led clinical summary",
    color: "#107569",
  },
  {
    label: "Diagnoses and condition timelines",
    color: "#107569",
  },
  {
    label: "Medication reconciliation",
    color: "#107569",
  },
  {
    label: "Gaps-in-care analysis",
    color: "#107569",
  },
  {
    label: "Risk flags and structured annotations",
    color: "#107569",
  },
];

export const securityBulletItems: BulletItem[] = [
  {
    label: "HIPAA-aligned infrastructure",
    color: "#107569",
  },
  {
    label: "End-to-end encryption",
    color: "#107569",
  },
  {
    label: "Explicit patient authorization workflows",
    color: "#107569",
  },
  {
    label: "Full audit trails",
    color: "#107569",
  },
  {
    label: "Secure data handling across retrieval and delivery",
    color: "#107569",
  },
];

export const applicantBulletItems: BulletItem[] = [
  {
    label: "One secure mobile experience",
    color: "#107569",
  },
  {
    label: "One physician interaction",
    color: "#107569",
  },
  {
    label: "One unified medical history",
    color: "#107569",
  },
  {
    label: "One accelerated path to coverage",
    color: "#107569",
  },
];
