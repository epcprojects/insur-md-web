"use client";
import { images } from "./ui";
import { HeroSection } from "./components";
import { RightUpArrow } from "@/public/icons";

export default function Home() {
  return (
    <main>
      <HeroSection
        bgColor="bg-ceramic"
        heading={
          <>
            From referral to{" "}
            <span
              className="font-playfair text-white inline-block mr-1 italic rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
          before:content-[''] before:pl-5 after:content-[''] after:pr-5"
            >
              clinical
            </span>
            <span
              className="font-playfair text-white inline-block italic rounded-full
          [background:linear-gradient(170deg,#15B79E_41.33%,#125D56_102.06%)]
          [box-shadow:inset_0_-1.441px_7.351px_0_#2ED3B7,0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
          before:content-[''] before:pl-5 after:content-[''] after:pr-5"
            >
              intelligence
            </span>{" "}
            — a fully orchestrated pipeline
          </>
        }
        descriptionOne="InsurMD replaces fragmented underwriting workflows with a single, physician-led orchestration layer..."
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

    </main>
  );
}
