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
              Where InsurMD creates{" "}
              <span
                className="font-playfair text-white inline-block mr-1 italic rounded-full
                                                            [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                               [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                            before:content-[''] before:pl-3 after:content-[''] after:pr-5"
              >
                immediate
              </span>{" "}
              underwriting leverage
            </>
          }
          descriptionOne={
            "InsurMD is designed as a flexible clinical intelligence layer that supports a wide range of underwriting models. While the platform is unified at its core, its impact varies depending on how and where it is deployed."
          }
          descriptionTwo={
            "This page outlines the most common ways carriers, MGAs, and reinsurers use InsurMD to unlock speed, clarity, and confidence."
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
