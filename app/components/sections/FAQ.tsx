"use client";

import * as Accordion from "@radix-ui/react-accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const FaqsSection: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "What is InsurMD?",
      answer:
        "InsurMD is a physician-led clinical intelligence platform that enables life insurers to obtain structured, clinically interpreted medical insight quickly and efficiently. It connects applicants with licensed physicians, retrieves longitudinal medical history, and delivers underwriting-ready outputs in a streamlined, compliant workflow.",
    },
    {
      question: "How is InsurMD different from traditional APS vendors?",
      answer:
        "Traditional APS workflows focus on retrieving documents from providers, often resulting in delays and fragmented records. InsurMD replaces this model with a coordinated, physician-guided process that combines record retrieval, clinical interpretation, and structured outputs into a single unified workflow.",
    },
    {
      question: "Are physicians actively involved in the process?",
      answer:
        "Yes. Licensed physicians are embedded directly into the workflow. They guide clinical processes, review patient histories, and provide structured clinical interpretation, ensuring outputs are grounded in real medical reasoning.",
    },
    {
      question: "How does InsurMD access patient medical records?",
      answer:
        "Patients provide explicit authorization through a secure, guided experience. Once authorization is granted, InsurMD retrieves medical records from a wide network of healthcare providers and data sources, assembling a longitudinal view of the patient’s health history.",
    },
    {
      question: "Is patient consent required?",
      answer:
        "Yes. All data access is based on explicit, patient-driven authorization. Consent is clearly presented, digitally captured, and fully traceable, ensuring transparency and compliance throughout the process.",
    },
    {
      question: "How long does the process take?",
      answer:
        "While timelines can vary depending on case complexity and data availability, InsurMD significantly reduces the traditional underwriting timeline — often compressing weeks or months of record gathering into a matter of days.",
    },
    {
      question: "What type of outputs does InsurMD provide to carriers?",
      answer:
        "InsurMD delivers structured, underwriting-ready outputs that may include physician summaries, condition timelines, medication reconciliation, and clinically annotated records. Outputs are designed for both human review and system integration.",
    },
    {
      question: "Can InsurMD integrate with our existing underwriting systems?",
      answer:
        "Yes. InsurMD is built with an API-first architecture and supports flexible integration models, including direct API integration, secure data delivery, and hybrid workflows that align with existing carrier infrastructure.",
    },
    {
      question: "Is InsurMD secure and compliant?",
      answer:
        "InsurMD is designed with healthcare-grade security and privacy principles. The platform incorporates encryption, access controls, auditability, and patient authorization workflows to support operation in regulated environments.",
    },
    {
      question: "Does InsurMD replace underwriting teams or medical directors?",
      answer:
        "No. InsurMD is designed to support and enhance underwriting teams and medical directors by providing clearer, more structured clinical inputs. It improves decision-making efficiency without replacing human judgment.",
    },
    {
      question: "How does InsurMD support accelerated underwriting programs?",
      answer:
        "InsurMD adds clinically grounded insight to accelerated models, helping carriers improve confidence in decisions while maintaining speed. It is particularly valuable in edge cases or expanded eligibility scenarios.",
    },
    {
      question: "Can InsurMD be used for high face value or complex cases?",
      answer:
        "Yes. InsurMD is well-suited for complex medical histories and high face value policies where deeper clinical clarity is required. Physician-led interpretation helps bring structure to challenging cases.",
    },
    {
      question: "How does InsurMD support reinsurers?",
      answer:
        "InsurMD provides a shared, clinically grounded artifact that can be used across carriers and reinsurers. This reduces ambiguity, improves alignment, and accelerates facultative review processes.",
    },
    {
      question: "What is required to get started with InsurMD?",
      answer:
        "Carriers can begin with a pilot program or limited deployment. InsurMD supports flexible onboarding models, allowing organizations to start quickly and expand integration over time.",
    },
    {
      question: "Does InsurMD require changes to our current workflows?",
      answer:
        "No major workflow changes are required to get started. InsurMD is designed to integrate into existing underwriting processes and can be deployed incrementally based on operational needs.",
    },
    {
      question: "How does InsurMD improve applicant experience?",
      answer:
        "InsurMD replaces long, opaque processes with a guided, physician-connected experience. Applicants benefit from clearer steps, faster timelines, and reduced administrative burden.",
    },
    {
      question: "Can InsurMD scale across large underwriting volumes?",
      answer:
        "Yes. The platform is designed for enterprise-scale deployments, supporting high case volumes, multiple programs, and integration across large underwriting environments.",
    },
    {
      question:
        "Is InsurMD suitable for digital-first or embedded insurance models?",
      answer:
        "Yes. InsurMD is particularly well-suited for digital distribution environments where speed, clarity, and seamless integration are critical to the applicant journey.",
    },
    {
      question: "How does InsurMD ensure data accuracy?",
      answer:
        "Data accuracy is supported through a combination of longitudinal record aggregation, normalization processes, and physician-led clinical interpretation, ensuring outputs reflect a coherent and medically grounded view of the patient.",
    },

    {
      question: "Who are the primary users of InsurMD?",
      answer:
        "InsurMD is used by life insurance carriers, MGAs, reinsurers, underwriting teams, and medical directors seeking faster, clearer, and more reliable clinical inputs.",
    },
  ];

  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="space-y-3"
    >
      {faqItems.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className=" last:border-b-0 border-b border-b-gray-200"
        >
          <Accordion.Trigger className="w-full py-3 md:py-5 cursor-pointer">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium text-start md:text-3xl text-black">
                  {item.question}
                </h4>

                <span className="relative flex items-center justify-center rtl:pb-3 ltr:pt-0.5 shrink-0 w-5 h-5">
                  <span className="faq-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7L7 7M17 7V17"
                        stroke="#1F252E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </Accordion.Header>

            <Accordion.Content className="faq-anim">
              <p className="mt-2 text-base text-start lg:text-xl text-neutral-700">
                {item.answer}
              </p>
            </Accordion.Content>
          </Accordion.Trigger>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default FaqsSection;
