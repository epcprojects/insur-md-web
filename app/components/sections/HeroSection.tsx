import Image, { StaticImageData } from "next/image";
import { ThemeButton } from "../buttons/ThemeButton";
import { ReactNode } from "react";

interface SectionButton {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary" | "custom";
  bgClass?: string;
}

interface HeroSectionProps {
  heading: ReactNode;
  descriptionOne: ReactNode;
  descriptionTwo: string;
  descriptionThree?: string;
  buttons: SectionButton[];
  image: StaticImageData | string;
  imageAlt: string;
}

export default function HeroSection({
  heading,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  buttons = [],
  image,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl   mx-auto px-8 pt-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-headingfont font-extrabold leading-[110%] tracking-[-0.03em] text-black">
            {heading}
          </h2>
          {typeof descriptionOne === "string" ? (
            <p className="font-normal text-lg text-black leading-[160%]">
              {descriptionOne}
            </p>
          ) : (
            descriptionOne
          )}
          {descriptionTwo && (
            <p className="font-normal text-lg text-black leading-[160%]">
              {descriptionTwo}
            </p>
          )}
          {descriptionThree && (
            <p className="font-normal text-lg text-black leading-[160%]">
              {descriptionThree}
            </p>
          )}
          {buttons.length > 0 && (
            <div className="flex flex-row gap-3">
              {buttons.map((btn, idx) => (
                <ThemeButton
                  key={idx}
                  label={btn.label}
                  icon={btn.icon}
                  onClick={btn.onClick}
                  variant={btn.variant}
                  bgClasses={btn.bgClass ?? btn.bgClass}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <Image src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}
