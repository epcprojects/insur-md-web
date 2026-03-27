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
              A clearer{" "}
              <span
                className="font-playfair text-white inline-block rounded-full
                          [background:linear-gradient(170deg,#36BFFA_41.33%,#0086C9_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#36BFFA,0_1.441px_24.649px_0_rgba(54,191,250,0.50)]
                            px-5 pb-2 w-fit mt-2"
              >
                clinical layer
              </span>{" "}
              across the risk stack
            </>
          }
          descriptionOne={
            "Reinsurers operate at a unique vantage point — evaluating risk across carriers, products, and underwriting philosophies. Yet despite this elevated perspective, one challenge remains consistent: fragmented clinical inputs."
          }
          descriptionTwo={
            "InsurMD provides a physician-led clinical intelligence layer that helps reinsurers engage with cleaner, more coherent medical context across facultative and treaty workflows."
          }
          buttons={[
            {
              label: "Request a Demo",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "custom",
              bgClass:
                "[background:linear-gradient(170deg,#2970FF_41.33%,#0040C1_102.06%)] [box-shadow:inset_0_-1.441px_7.351px_0_#2970FF,0_1.441px_24.649px_0_rgba(41,112,255,0.50)]",
            },
            {
              label: "Partner with InsurMD",
              icon: <RightUpArrow />,
              onClick: () => {},
              variant: "secondary",
            },
          ]}
          image={images.reinsurersimages.LayersImage}
          imageAlt={"Layers Image"}
        />
      </div>
    </div>
  );
};

export default Page;
