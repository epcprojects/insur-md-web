/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AlertOctagonIcon,
  CheckListIcon,
  DonutIcon,
  EnterpriseDeployment,
  FilterIcon,
  InsureMDIcon,
  MachineReadableIcon,
  MedicalRecordIcon,
  RightUpArrow,
  TeamUnderwritingIcon,
  UnderWritingPlatformIcon,
} from "@/public/icons";
import { CTASection, GroupToggle, ThemeButton } from "./components";
import Image from "next/image";
import { images } from "./ui";
import {
  applicantBulletItems,
  cards,
  featuresList,
  highlightCards,
  securityBulletItems,
  teamBulletItems,
} from "./constants/landing";

import { ReactNode, useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import HowItWorksAccordion2 from "./components/AccordionComponents/HowItWorksAccordion2";
import { useDemoModal } from "./components/DemoModalProvider";

type ListItem = {
  label: string;
  icon: ReactNode;
};

const listItems: ListItem[] = [
  {
    label: "API-first architecture",
    icon: <FilterIcon />,
  },
  {
    label: "Structured data delivery",
    icon: <CheckListIcon />,
  },
  {
    label: "PDF and machine-readable formats",
    icon: <MachineReadableIcon />,
  },
  {
    label: "Flexible ingestion into underwriting platforms",
    icon: <UnderWritingPlatformIcon />,
  },
  {
    label: "Scalable for enterprise deployments",
    icon: <EnterpriseDeployment />,
  },
];

export default function Home() {
  const [tab, setTab] = useState("teams");
  const isMobile = useIsMobile();
  const { openModal } = useDemoModal();

  return (
    <main className="mb-8 md:mb-16 ">
      <div className="">
        <div className=" from-[#ACCBEE] to-[#E7F0FD] bg-linear-to-t w-full flex flex-col relative">
          <div className="py-12 md:py-24 pt-24 md:pt-49 mx-auto container px-4 md:px-8 max-w-7xl z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="space-y-7 md:space-y-14.5">
                <div className="space-y-2">
                  <h2 className="text-black font-extrabold text-4xl md:text-7xl leading-[110%] tracking-[-0.03em]">
                    Insurance{" "}
                    <span className="text-greenish-cyan font-playfair">
                      underwriting,
                    </span>{" "}
                    reinvented for the real world.
                  </h2>

                  <p className="text-black text-base md:text-xl">
                    InsurMD instantly connects applicants with licensed
                    physicians, retrieves their complete medical history, and
                    delivers a structured clinical assessment in days — not
                    months. Faster decisions. Better data. A radically smoother
                    path to policy issuance.
                  </p>
                </div>

                <div className="flex items-center flex-col md:flex-row gap-4">
                  <ThemeButton
                    label={"Request a Demo"}
                    icon={<RightUpArrow />}
                    onClick={() => {
                      openModal();
                    }}
                    variant={"primary"}
                  />
                  <ThemeButton
                    label={"Partner with InsurMD"}
                    icon={<RightUpArrow />}
                    onClick={() => {
                      openModal();
                    }}
                    variant={"primary"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={images.landingImages.landingMockup}
            className="md:absolute inset-e-0 bottom-0 "
          />
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-[#F5F5F4] rounded-[30px] w-full pt-8 md:pt-24 ">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-3xl md:text-[54px] font-medium md:leading-[140%] text-center tracking-[-0.03em] md:px-10">
              Built for modern life{" "}
              <span className="text-[#4BB8B2] font-extrabold">insurers</span>,{" "}
              <span className="text-[#107569] font-extrabold">reinsurers</span>,
              and
              <span className="text-[#31D3B7] font-extrabold">
                {" "}
                underwriting
              </span>{" "}
              teams who refuse to wait on outdated medical record workflows.
            </h2>

            <Image alt="" src={images.landingImages.dashboardMockup} />
          </div>
        </div>
      </div>
      <div className="m-4 md:m-5">
        <div className="bg-[#FEF3F2] rounded-[30px] w-full py-8 md:py-24 relative">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <Image
              alt=""
              src={images.landingImages.theProblemMockup}
              className="absolute inset-e-0 bottom-0 md:block hidden"
            />

            <div className="space-y-8 md:space-y-16">
              <div className="space-y-3">
                <div className="space-y-3">
                  <h2 className="font-semibold text-sm text-center md:text-start md:text-base text-[#B42318] md:border md:border-[#FECDCA] py-1 px-3.5 rounded-full w-fit md:before-content[''] md:before:w-1.5 before:h-1.5 before:mr-2 before:mb-0.5 before:bg-[#F04438] before:inline-block before:rounded-full ">
                    The underwriting bottleneck no one talks about
                  </h2>
                  <h3 className="text-black text-4xl md:text-7xl font-extrabold">
                    The <span className="text-[#D92D20]">Problem.</span>
                  </h3>
                </div>
                <p className="font-normal text-lg md:text-2xl text-black">
                  Traditional life insurance underwriting is still <br />{" "}
                  constrained by a broken data supply chain.
                </p>
              </div>

              <div className="space-y-8 md:space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
                  <div className="p-5 rounded-3xl drop-shadow-2xl flex flex-col items-center justify-center gap-4 md:rotate-13 bg-white">
                    <span className="inline-block rotate-12 md:rotate-0">
                      <DonutIcon />
                    </span>
                    <h2 className="text-lg font-normal text-center text-gray-800">
                      APS requests stall. Providers fax incomplete charts.
                      Applicants lose momentum.
                    </h2>
                  </div>

                  <div className="p-5 rounded-3xl drop-shadow-2xl flex flex-col items-center justify-center gap-4 md:-rotate-13 bg-white">
                    <span className="inline-block rotate-13 md:rotate-12">
                      <TeamUnderwritingIcon />
                    </span>
                    <h2 className="text-lg font-normal text-center text-gray-800">
                      Underwriting teams are left making decisions with
                      fragmented or stale data.
                    </h2>
                  </div>

                  <div className="p-5 rounded-3xl drop-shadow-2xl flex flex-col items-center justify-center gap-4 md:rotate-13 bg-white">
                    <span className="inline-block -rotate-13 md:-rotate-12">
                      <MedicalRecordIcon />
                    </span>
                    <h2 className="text-lg font-normal text-center text-gray-800">
                      Medical records take weeks — sometimes months — to gather.
                    </h2>
                  </div>
                </div>

                <div className="drop-shadow rounded-2xl md:rounded-full  p-1.5 bg-white w-fit overflow-hidden">
                  <div className="ps-6 pe-8 bg-linear-to-t from-[#FEAFA840] flex items-start md:items-center rounded-2xl md:rounded-full py-3 gap-2 md:gap-4 to-[#F5EFEF40]">
                    <AlertOctagonIcon />{" "}
                    <div>
                      <h2 className="text-gray-800 text-base md:text-xl font-normal">
                        In a world where everything is real-time,{" "}
                      </h2>
                      <h3 className="text-[#F04438] font-bold italic text-base md:text-xl">
                        underwriting still runs on delay.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-[url('/images/clarityBgPattern.png')] bg-no-repeat bg-cover rounded-[30px] w-full py-8 md:py-24 relative">
          <div className="container mx-auto max-w-7xl space-y-16 px-4 md:px-8">
            <div className="space-y-6 md:space-y-12">
              <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                <div className="bg-white h-15 w-15 md:h-25 md:w-25 rounded-2xl md:rounded-[28px] flex items-center justify-center">
                  <InsureMDIcon
                    width={isMobile ? "" : "49"}
                    height={isMobile ? "33" : "63"}
                  />
                </div>
                <h2 className="text-white text-xl md:text-2xl font-normal text-center">
                  The InsurMD Solution
                </h2>
              </div>
              <div className="space-y-4">
                <h2 className="text-center text-4xl md:text-[54px] leading-[110%] text-white">
                  From application to{" "}
                  <span className="font-playfair relative inline-flex items-center justify-center font-extrabold">
                    clinical clarity
                    <Image
                      alt=""
                      src={images.landingImages.CursorIcon}
                      className="absolute -bottom-6 md:block hidden"
                    />
                  </span>{" "}
                  — instantly
                </h2>
                <h3 className="text-center text-xl md:text-[28px] text-white font-normal">
                  InsurMD transforms underwriting into a physician-led, <br />
                  digitally orchestrated workflow.
                </h3>
              </div>
            </div>

            <div className="  items-center">
              {/* {steps.map((step) => (
                <div
                  key={step.id}
                  className="grid md:grid-cols-2 bg-white p-5 md:p-10 rounded-3xl gap-4 md:gap-6 items-center"
                >
                  <div className="space-y-2.5">
                    <h2 className="text-greenish-cyan font-bold text-4xl md:text-[68px]">
                      {step.id}.
                    </h2>
                    <p className="text-black text-2xl md:text-4xl font-normal">
                      {step.title}
                    </p>
                  </div>

                  <div>
                    <Image
                      alt={`step-${step.id}`}
                      src={step.image}
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              ))} */}

              <HowItWorksAccordion2 />
            </div>

            <div className="space-y-9.5 flex flex-col items-center justify-center">
              <h2 className="text-center text-xl md:text-2xl text-white">
                <span className="font-bold">The result:</span> faster
                underwriting, higher confidence, and dramatically improved
                applicant experience.
              </h2>

              <button
                onClick={() => openModal()}
                className="p-1 md:p-2 flex group cursor-pointer items-center gap-2 rounded-full bg-white border border-[#E6E6E6] "
              >
                <span className="inline-block px-10 py-3 md:py-4 rounded-full bg-linear-[170deg] text-white font-semibold text-lg md:text-xl h-full from-teal to-dark-teal">
                  Get Started
                </span>
                <span className="md:h-16 h-12 w-12 md:w-16 rounded-full  flex items-center  bg-linear-[170deg] from-dark to-light justify-center">
                  <span className="transition-transform duration-600 group-hover:rotate-45">
                    <RightUpArrow />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl py-8 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-10">
          <div className="space-y-8">
            <div className="space-y-4.5">
              <h2 className="text-greenish-cyan text-center md:text-start font-semibold text-lg md:text-xl uppercase">
                How It Works{" "}
              </h2>
              <h3 className="font-extrabold text-4xl md:text-headingfont text-center md:text-start md:leading-[120%]">
                A{" "}
                <span className="font-playfair text-greenish-cyan">modern</span>{" "}
                underwriting layer built for scale
              </h3>
            </div>

            <div className="flex items-center justify-center md:w-fit">
              <ThemeButton
                icon={<RightUpArrow />}
                label="Request a Demo"
                onClick={() => {
                  openModal();
                }}
                variant="primary"
                borderClr="border-gray-200"
              />
            </div>
          </div>

          <div className="col-span-2 space-y-4 md:space-y-10">
            {featuresList.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl p-4 md:p-8 space-y-2 md:space-y-7.5"
                style={{ backgroundColor: item.bgColor }}
              >
                <Image alt="" src={item.icon} className="w-12 md:w-18" />

                <div className="space-y-2">
                  <h2 className="text-xl md:text-[28px]  text-neutral-950 font-bold">
                    {item.title}
                  </h2>

                  <p className="text-base md:text-lg font-normal text-neutral-800">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-white-smoke rounded-[30px] w-full py-8 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-4 md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-center text-lg md:text-xl font-semibold uppercase text-greenish-cyan">
                Built for speed. Designed for trust.
              </h2>

              <h3 className="font-extrabold text-center text-4xl md:text-[64px] md:leading-[120%]">
                Why Insurers Choose
                <span className="text-teal font-playfair"> InsurMD </span>
              </h3>
            </div>

            <div className="rounded-[20px] bg-white border border-gray-200">
              <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-15">
                <div className="space-y-2">
                  <h2 className="text-black text-xl md:text-[28px] leading-normal font-bold">
                    Structured delivery to insurance companies
                  </h2>
                  <p className="text-neutral-800 font-normal text-base md:text-xl ">
                    Receive normalized medical records, physician assessments,
                    and risk insights in formats built for underwriting systems.
                  </p>
                </div>

                <div className="md:col-span-2">
                  <Image
                    alt=""
                    src={images.landingImages.totalPatientMockup}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 border-t border-t-gray-200 md:grid-cols-2">
                <div className="p-4 md:p-8 border-b pb-4 md:pb-0 md:border-r space-y-6 md:space-y-12 border-b-gray-200 md:border-r-gray-200">
                  <div>
                    <h2 className="text-greenish-cyan font-bold text-xl md:text-[28px] leading-normal">
                      Instant physician access
                    </h2>
                    <p className="text-neutral-800 font-normal text-base md:text-xl ">
                      Receive normalized medical records, physician assessments,
                      and risk insights in formats built for underwriting
                      systems.
                    </p>
                  </div>

                  <Image alt="" src={images.landingImages.physicianMockup} />
                </div>

                <div className="p-4 md:p-8 border-r space-y-12 border-r-gray-200">
                  <div>
                    <h2 className="text-black font-bold text-xl md:text-[28px] leading-normal">
                      Unified medical record retrieval
                    </h2>
                    <p className="text-neutral-800 font-normal text-base md:text-xl ">
                      We securely query nationwide provider networks, health
                      systems, and data partners to assemble a longitudinal
                      patient record.
                    </p>
                  </div>

                  <Image
                    alt=""
                    src={images.landingImages.medicalRecordListMockup}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 border-t border-t-gray-200 md:grid-cols-2">
                <div className="p-4 md:p-8 border-r space-y-12 border-r-gray-200">
                  <div>
                    <h2 className="text-neutral-800 font-bold text-xl md:text-[28px] leading-normal">
                      Clinical interpretation, not just raw data
                    </h2>
                    <p className="text-neutral-800 font-normal text-base md:text-xl">
                      Our physicians don’t just gather records — they interpret
                      them. Every case includes a structured clinical summary
                      built for underwriting teams.
                    </p>
                  </div>

                  <Image
                    alt=""
                    src={images.landingImages.interpretationMockup}
                  />
                </div>

                <div className="p-4 md:p-8 border-r space-y-12 border-r-gray-200">
                  <div>
                    <h2 className="text-black font-bold text-xl md:text-[28px] leading-normal">
                       Gaps-in-care intelligence
                    </h2>
                    <p className="text-neutral-800 font-normal text-base md:text-xl">
                      We identify missing screenings, unmanaged conditions, and
                      risk signals that traditional APS workflows often miss.
                    </p>
                  </div>

                  <Image
                    alt=""
                    src={images.landingImages.careIntelligenceMockup}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ThemeButton
                label="Request a Demo"
                icon={<RightUpArrow />}
                variant="primary"
                bodyBgClasses="text-white! bg-black/80"
                wrapperClasses=""
                onClick={() => {
                  openModal();
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-white rounded-[30px] w-full pt-6 pb-4 md:py-24 border border-gray-200">
          <div className="container mx-auto max-w-7xl space-y-4 px-4 md:px-8 md:space-y-8">
            <div className="md:space-y-8 flex flex-col items-center justify-center ">
              <h3 className="font-extrabold text-4xl md:text-[64px] md:leading-[120%]">
                InsurMD
                <span className="text-teal font-playfair"> Built </span> For
              </h3>

              <div className="md:block hidden">
                <GroupToggle value={tab} onChange={setTab} />
              </div>
            </div>

            <div className="hidden md:block">
              {tab === "teams" ? (
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                    <Image alt="" src={images.landingImages.teamsMockup} />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-5xl leading-[130%] font-semibold text-black">
                        Finally, underwriting with context
                      </h2>
                      <p className="text-neutral-800 text-[28px]">
                        InsurMD provides more than records — it delivers
                        clinical intelligence.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl text-neutral-800">
                        Each case includes:
                      </h3>
                      <ul className="space-y-2">
                        {teamBulletItems.map((item, index) => (
                          <li
                            key={index}
                            className="rounded-2xl py-3.5 px-5 font-semibold text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                            style={{
                              color: item.color,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ backgroundColor: item.color }}
                            />
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="text-neutral-800 text-2xl">
                      Everything underwriting teams need — without the noise of
                      raw charts.
                    </h3>
                  </div>
                </div>
              ) : tab === "applicants" ? (
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                    <Image alt="" src={images.landingImages.applicantMockup} />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-5xl leading-[130%] font-semibold text-black">
                        The fastest path from application to approval
                      </h2>
                      <p className="text-neutral-800 text-[28px]">
                        Applicants no longer have to wait while insurers chase
                        paperwork across the healthcare system.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl text-neutral-800">
                        With InsurMD:
                      </h3>
                      <ul className="space-y-2">
                        {applicantBulletItems.map((item, index) => (
                          <li
                            key={index}
                            className="rounded-2xl py-3.5 px-5 font-semibold text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                            style={{
                              color: item.color,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ backgroundColor: item.color }}
                            />
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="text-neutral-800 text-2xl">
                      No faxes. No delays. No guesswork.
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                    <Image alt="" src={images.landingImages.securityMockup} />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-5xl leading-[130%] font-semibold text-black">
                        Built for regulated environments
                      </h2>
                      <p className="text-neutral-800 text-[28px]">
                        InsurMD is designed from the ground up for healthcare
                        and insurance compliance.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl text-neutral-800">
                        With InsurMD:
                      </h3>
                      <ul className="space-y-2">
                        {securityBulletItems.map((item, index) => (
                          <li
                            key={index}
                            className="rounded-2xl py-3.5 px-5 font-semibold text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                            style={{
                              color: item.color,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ backgroundColor: item.color }}
                            />
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="text-neutral-800 text-2xl">
                      Because trust is non-negotiable.
                    </h3>
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden block space-y-4">
              <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-5xl md:leading-[130%] font-semibold text-black">
                      Finally, underwriting with context
                    </h2>
                    <p className="text-neutral-800 text-lg md:text-[28px]">
                      InsurMD provides more than records — it delivers clinical
                      intelligence.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-2xl text-neutral-800">
                      Each case includes:
                    </h3>
                    <ul className="space-y-2">
                      {teamBulletItems.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-2xl py-2.5 md:py-3.5 px-3 md:px-5 font-semibold text-sm md:text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                          style={{
                            color: item.color,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full hidden md:inline-block"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="text-neutral-800 text-lg md:text-2xl">
                    Everything underwriting teams need — without the noise of
                    raw charts.
                  </h3>
                </div>
                <div>
                  <Image alt="" src={images.landingImages.teamsMockup} />
                </div>
              </div>
              <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-5xl md:leading-[130%] font-semibold text-black">
                      The fastest path from application to approval
                    </h2>
                    <p className="text-neutral-800 text-lg md:text-[28px]">
                      Applicants no longer have to wait while insurers chase
                      paperwork across the healthcare system.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-2xl text-neutral-800">
                      With InsurMD:
                    </h3>
                    <ul className="space-y-2">
                      {applicantBulletItems.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-2xl py-2.5 md:py-3.5 px-3 md:px-5 font-semibold text-sm md:text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                          style={{
                            color: item.color,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="text-neutral-800 text-lg md:text-2xl">
                    No faxes. No delays. No guesswork.
                  </h3>
                </div>

                <div>
                  <Image alt="" src={images.landingImages.applicantMockup} />
                </div>
              </div>
              <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-5xl md:leading-[130%] font-semibold text-black">
                      Built for regulated environments
                    </h2>
                    <p className="text-neutral-800 text-lg md:text-[28px]">
                      InsurMD is designed from the ground up for healthcare and
                      insurance compliance.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-2xl text-neutral-800">
                      With InsurMD:
                    </h3>
                    <ul className="space-y-2">
                      {securityBulletItems.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-2xl py-2.5 md:py-3.5 px-3 md:px-5 font-semibold text-sm md:text-lg flex items-center gap-2 from-[#E9FFF9] to-white bg-linear-to-r"
                          style={{
                            color: item.color,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="text-neutral-800 text-lg md:text-2xl">
                    Because trust is non-negotiable.
                  </h3>
                </div>
                <div>
                  <Image alt="" src={images.landingImages.securityMockup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-[url('/images/intergrationMockup.png')] min-h-[85dvh] max-h-300 bg-no-repeat flex flex-col items-center justify-end bg-cover rounded-[30px] w-full py-8 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-3">
                <h2 className="font-semibold text-4xl md:text-[84px] text-white">
                  Integrations
                </h2>
                <p className="text-white text-xl md:text-2xl font-semibold ">
                  Designed to plug into your underwriting stack.
                </p>
              </div>

              <div className="w-fit">
                <ThemeButton
                  label="Request a Demo"
                  icon={<RightUpArrow />}
                  variant="primary"
                  onClick={() => {
                    openModal();
                  }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="py-1.5 px-5 rounded-3xl bg-black/40 backdrop-blur-lg">
                <ul>
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      className="border-b flex items-center gap-3 md:gap-6 border-b-white/20 last:border-b-0 py-4.5 px-2 md:px-5 text-white text-lg md:text-xl"
                    >
                      {item.icon}
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-white text-lg md:text-xl md:text-start text-center">
                We fit into your workflow — not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-linear-to-t from-[#FAFAFA] to-white-smoke rounded-[30px] w-full py-8 md:py-24 ">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-5 md:space-y-8">
            <div className="space-y-4">
              <h3 className="font-extrabold text-4xl md:text-[64px] text-center leading-[120%]">
                Use
                <span className="text-greenish-cyan font-playfair ">
                  {" "}
                  Cases.
                </span>
              </h3>

              <h4 className="text-gray-800 text-xl md:text-2xl text-center">
                Where InsurMD creates immediate impact
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-0 justify-center">
              {highlightCards.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-3 md:gap-5 rounded-3xl md:rounded-[40px] p-5 md:p-8 max-w-225 w-full ${index !== 0 && !isMobile && "-mt-4"}`}
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="h-15 w-15 md:w-25 md:h-25 rounded-full bg-white flex items-center justify-center">
                    <Image alt="" src={item.icon} className="w-12 md:w-15" />
                  </div>

                  <div className="space-y-3 text-center md:text-start">
                    <h2 className="text-white font-semibold text-xl  md:text-[28px] md:leading-[120%]">
                      {item.title}
                    </h2>

                    <p className="text-base md:text-xl text-white md:leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-5">
        <div className="bg-linear-to-t from-ceramic to-[#F0FDF9] rounded-[30px] w-full py-8 md:py-24 ">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-5 md:space-y-10 relative">
            <Image
              alt=""
              src={images.landingImages.designMockup}
              className="absolute -inset-e-20 md:block hidden"
            />
            <div className="space-y-2">
              <h2 className="text-gray-800 text-xl">
                Not a records vendor. A clinical infrastructure layer.
              </h2>
              <h3 className="font-extrabold text-4xl md:text-[64px] leading-[120%]">
                Different By{" "}
                <span className="text-teal font-playfair ">Design</span>
              </h3>
            </div>
            <div className="space-y-5">
              <h2 className="text-gray-800 text-2xl">
                InsurMD sits at the intersection of healthcare <br /> delivery
                and insurance intelligence.
              </h2>

              <h3 className="text-xl text-gray-800 font-semibold">
                We combine:
              </h3>

              <div className="flex gap-3 md:gap-5 flex-col md:flex-row items-stretch">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 min-w-47.5 w-full md:max-w-47.5  rounded-[20px] border flex items-center flex-col justify-start gap-3 border-white backdrop-blur drop-shadow bg-linear-to-b from-white to-white/0"
                  >
                    <Image alt="" src={item.icon} />

                    <h2 className="text-xl text-black text-center">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 mt-24">
        <CTASection
          title="Bring underwriting into real time"
          highlightText="underwriting"
          description1="The future of life insurance isn’t slower, heavier, or more manual. It’s connected, clinical, and instantaneous."
          description2="Partner with InsurMD to deliver faster decisions, stronger data, and a radically better applicant journey."
          primaryBtnLabel="Schedule a Demo"
          secondaryBtnLabel="Request Partnership"
          image={images.landingImages.underWritingMockup}
          onPrimaryClick={() => {
            openModal();
          }}
          onSecondaryClick={() => {
            openModal();
          }}
        />
      </div>
    </main>
  );
}
