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
              Clinical credibility{" "}
              <span
                className="font-playfair text-white inline-block mr-1 italic rounded-full
                                                            [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
                               [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
                                                            before:content-[''] before:pl-3 after:content-[''] after:pr-5"
              >
                starts
              </span>{" "}
              with real physicians
            </>
          }
          descriptionOne={
            "At the core of InsurMD is a physician-led operating model. Every clinical workflow on the platform is grounded in licensed medical oversight, ensuring that healthcare data is handled with the rigor, context, and responsibility it demands."
          }
          descriptionTwo={
            "This is not a thin clinical layer placed on top of data workflows. It is a purpose-built physician network supported by structured clinical governance."
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
