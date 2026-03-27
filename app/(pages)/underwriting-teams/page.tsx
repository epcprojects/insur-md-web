"use client";
import { HeroSection } from "@/app/components";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  return (
    <div className=" min-h-dvh  p-4">
      <div className="rounded-[30px]   bg-light-skyblue w-full">
        <HeroSection
          heading={
            <>
              Built for the people who actually{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
          [background:linear-gradient(170deg,#2CE_41.33%,#0E7090_102.06%)]
[box-shadow:inset_0_-1.441px_7.351px_0_#2CE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]
            px-5 pb-2 w-fit mt-2"
              >
                carry
              </span>{" "}
              the{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
          [background:linear-gradient(170deg,#2CE_41.33%,#0E7090_102.06%)]
[box-shadow:inset_0_-1.441px_7.351px_0_#2CE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]
           px-5 pb-2 w-fit "
              >
                risk
              </span>
            </>
          }
          descriptionOne={
            "InsurMD is designed with underwriting reality in mind. Not theoretical workflows. Not surface-level data feeds. Real-world underwriting requires context, defensibility, and speed — often all at once."
          }
          descriptionTwo={
            "This page focuses on how InsurMD supports underwriting teams directly, from frontline underwriters to chief risk officers and reinsurance partners."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "custom",
              bgClass:
                "[background:linear-gradient(170deg,#22CCEE_41.33%,#0E7090_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#22CCEE,0_1.441px_24.649px_0_rgba(34,204,238,0.50)]",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.forunderwritingteamsimages.mackbookimage}
          imageAlt={""}
        />
      </div>
    </div>
  );
};

export default Page;
