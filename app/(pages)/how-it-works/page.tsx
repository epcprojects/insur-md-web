"use client";
import { HeroSection } from "@/app/components";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  return (
    <div className=" min-h-dvh p-4">
      <div className="rounded-[30px]  bg-ceramic w-full ">
        <HeroSection
          heading={
            <>
              From referral to{" "}
              <span
                className="font-playfair text-white inline-block mr-2 rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
            px-5 pb-2 w-fit mt-2"
              >
                clinical
              </span>
              <span
                className="font-playfair text-white inline-block  rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
           px-5 pb-2 w-fit mt-2"
              >
                intelligence
              </span>{" "}
              — a fully orchestrated pipeline
            </>
          }
          descriptionOne="InsurMD replaces fragmented underwriting workflows with a single, physician-led orchestration layer. Instead of relying on disconnected record requests, manual follow-ups, and partial charts, we coordinate identity, authorization, medical data retrieval, clinical interpretation, and structured delivery through one continuous system."
          descriptionTwo="This page walks through the InsurMD lifecycle end-to-end — from carrier referral to underwriting-ready outputs."
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "primary",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.howitworksimages.PersonStandingImage}
          imageAlt="Person Standing"
        />
      </div>
    </div>
  );
};

export default Page;
