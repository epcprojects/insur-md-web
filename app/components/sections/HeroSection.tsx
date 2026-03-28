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
    <section className="lg:pb-24 pt-24 lg:pt-49">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-end gap-10  max-w-7xl   mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl lg:text-start text-center lg:text-headingfont font-extrabold leading-[110%] tracking-[-0.03em] text-black">
            {heading}
          </h2>
          {typeof descriptionOne === "string" ? (
            <p className="font-normal text-base text-center lg:text-start lg:text-lg text-black leading-[160%]">
              {descriptionOne}
            </p>
          ) : (
            descriptionOne
          )}
          {descriptionTwo && (
            <p className="font-normal text-base text-center lg:text-start lg:text-lg text-black leading-[160%]">
              {descriptionTwo}
            </p>
          )}
          {descriptionThree && (
            <p className="font-normal text-base text-center lg:text-start lg:text-lg text-black leading-[160%]">
              {descriptionThree}
            </p>
          )}
          {buttons.length > 0 && (
            <div className="flex flex-col lg:flex-row gap-3">
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
          <Image src={image} alt={imageAlt} className="" />
        </div>
      </div>
    </section>
  );
}
