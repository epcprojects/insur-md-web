"use client";
import { HeroSection } from "@/app/components";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  return (
    <div className=" min-h-dvh p-4">
      <div className="rounded-[30px]  bg-light-purple w-full">
        <HeroSection
          heading={
            <>
              Built for environments where{" "}
              <span
                className="font-playfair text-white inline-block  rounded-full
                 [background:linear-gradient(170deg,#B692F6_41.33%,#53389E_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.50)]
                  px-5 pb-2 w-fit mt-2"
              >
                trust
              </span>{" "}
              is non-negotiable
            </>
          }
          descriptionOne={
            "InsurMD operates at the intersection of healthcare data and insurance risk — two of the most regulated domains in the modern economy. Security and compliance are not layered on top of the platform; they are foundational to its architecture."
          }
          descriptionTwo={
            "From patient authorization to data delivery, every layer of InsurMD is designed to meet the expectations of enterprise carriers, regulated partners, and clinical stakeholders."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "custom",
              bgClass:
                "[background:linear-gradient(170deg,#B692F6_41.33%,#53389E_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#B692F6,0_1.441px_24.649px_0_rgba(182,146,246,0.70)]",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.securityandcomplianceimages.NegotiationImage}
          imageAlt={"negotiation handshake"}
        />
      </div>
    </div>
  );
};

export default Page;
