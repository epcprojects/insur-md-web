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
      answer: "",
    },
    {
      question: "How does InsurMD work?",
      answer: "",
    },
    {
      question: "Do physicians need to manage inventory or shipping?",
      answer: "",
    },
    {
      question: "Does InsurMD influence clinical decision-making?",
      answer: "",
    },
    {
      question: "What types of products are available through InsurMD?",
      answer: "",
    },
    {
      question: "What types of practices is InsurMD built for?",
      answer: "",
    },
    {
      question: "How does InsurMD support compliance?",
      answer: "",
    },
    {
      question: "How does InsurMD help practices scale?",
      answer: "",
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
                <h4 className="text-base font-medium md:text-3xl text-black">
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
