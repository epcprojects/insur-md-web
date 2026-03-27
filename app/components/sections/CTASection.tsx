import { RightUpArrow } from "@/public/icons";
import { ThemeButton } from "../buttons/ThemeButton";
import Image from "next/image";

type CTASectionProps = {
  title: string;
  highlightText?: string;
  description1: string;
  description2: string;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

const CTASection = ({
  title,
  highlightText,
  description1,
  description2,
  primaryBtnLabel,
  secondaryBtnLabel,
  image,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) => {
  return (
    <div className="container mx-auto max-w-7xl pt-8 px-4  md:p-16 bg-linear-to-br space-y-4 relative rounded-3xl from-[#F5F7FA] to-[#C3CFE2]">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 space-y-10">
          <div className="space-y-2">
            <h2 className="font-extrabold text-black text-4xl md:text-[64px] leading-[120%]">
              {title.split(highlightText || "").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-greenish-cyan font-playfair">
                      {highlightText}
                    </span>
                  )}
                </span>
              ))}
            </h2>

            <p className="text-base md:text-2xl">{description1}</p>
            <p className="text-base md:text-2xl">{description2}</p>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-4">
            <ThemeButton
              label={primaryBtnLabel}
              icon={<RightUpArrow />}
              onClick={onPrimaryClick}
              variant="primary"
              bodyBgClasses="bg-linear-0 from-[#252B37] to-[#535862] text-white"
            />

            <ThemeButton
              label={secondaryBtnLabel}
              icon={<RightUpArrow />}
              onClick={onSecondaryClick}
              variant="primary"
            />
          </div>
        </div>
      </div>

      <Image
        alt="cta-image"
        src={image}
        className="md:absolute inset-e-0 bottom-0"
      />
    </div>
  );
};

export default CTASection;
