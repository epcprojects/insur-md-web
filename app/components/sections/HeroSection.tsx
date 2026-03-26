import Image, { StaticImageData } from "next/image";
import { ThemeButton } from "../buttons/ThemeButton";

interface SectionButton {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
}

interface ContentSectionProps {
  bgColor: string;
  heading: React.ReactNode;
  descriptionOne: string;
  descriptionTwo: string;
  buttons: SectionButton[];
  image: StaticImageData | string;
  imageAlt: string;
}

export default function HeroSection({
  bgColor = "bg-ceramic",
  heading,
  descriptionOne,
  descriptionTwo,
  buttons = [],
  image,
  imageAlt,
}: ContentSectionProps) {
  return (
    <section className={`${bgColor} rounded-[30px]  `}>
      <div className="container grid grid-cols-2 items-center max-w-7xl mx-auto px-8 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-headingfont font-extrabold leading-[110%] tracking-[-0.03em] text-black">
            {heading}
          </h2>
          <p className="font-normal text-lg text-black leading-[160%]">
            {descriptionOne}
          </p>
          {descriptionTwo && (
            <p className="font-normal text-lg text-black leading-[160%]">
              {descriptionTwo}
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
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <Image src={image} alt={imageAlt}   />
        </div>
      </div>
    </section>
  );
}