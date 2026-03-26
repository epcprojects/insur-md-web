"use client";
import { HeroSection } from "@/app/components";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  return (
    <div className=" min-h-dvh p-4">
      <div className="rounded-[30px] bg-white-smoke w-full">
        <HeroSection
          heading={
            <>
              The clinical infrastructure layer for{" "}
              <span
                className="font-playfair text-white inline-block mr-1 italic rounded-full
                                       [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                       before:content-[''] before:pl-3 after:content-[''] after:pr-5"
              >
                modern underwriting
              </span>
            </>
          }
          descriptionOne={
            "InsurMD is a physician-led clinical intelligence platform designed to transform how medical insight enters the life insurance ecosystem. At its core, the platform orchestrates identity, authorization, clinical interpretation, and structured delivery into a single, cohesive infrastructure layer."
          }
          descriptionTwo={
            "Where legacy workflows rely on fragmented record chasing and manual synthesis, InsurMD delivers a unified clinical pipeline built for speed, clarity, and scale."
          }
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
          imageAlt={"Person Standing"}
        />
      </div>
    </div>
  );
};

export default Page;
