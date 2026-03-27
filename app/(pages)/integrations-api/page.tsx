"use client";
import { HeroSection } from "@/app/components";
import { images } from "@/app/ui";
import { RightUpArrow } from "@/public/icons";
import React from "react";

const Page = () => {
  return (
    <div className=" min-h-dvh p-4">
      <div className="rounded-[30px] bg-light-red  w-full ">
        <HeroSection
          heading={
            <>
              Built to{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                          [background:linear-gradient(170deg,#FD6F8E_41.33%,#C01048_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]
                           px-5 ps-6 pb-3 w-fit mt-2"
              >
                plug
              </span>{" "}
              into real underwriting ecosystems
            </>
          }
          descriptionOne={
            "InsurMD is not designed to sit beside your stack — it’s built to integrate into it. Modern carriers operate across a complex mesh of underwriting platforms, policy admin systems, data warehouses, and partner ecosystems. InsurMD is engineered to connect cleanly across that landscape."
          }
          descriptionTwo={
            "Whether deployed as a pilot or scaled across enterprise programs, the platform is built for seamless interoperability."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "custom",
              bgClass:
                "[background:linear-gradient(170deg,#FD6F8E_41.33%,#C01048_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#FD6F8E,0_1.441px_24.649px_0_rgba(253,111,142,0.50)]",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.apiimages.ApiImage}
          imageAlt={"Api Image"}
        />
      </div>
    </div>
  );
};

export default Page;
