import React, { ReactNode } from "react";
import { ThemeButton } from "../buttons/ThemeButton";
import { RightUpArrow, HyphenLine } from "@/public/icons";

interface GridItem {
  icon: ReactNode;
  title?: string;
  label: string;
}
export type VariantType = "A" | "B" | "C" | "custom";

interface RightSection {
  title: string;
  description: string;
  items: GridItem[];
}

interface RightSectionNoTitle {
  description: string;
  items: GridItem[];
}

// ─── Variant A ────────────────────────────────────────────────────────────────
export interface ProcessStepItemVariantA {
  hyphenLineFillColor: string;
  numberText: string;
  leftHeading: string;
  leftSubheading: string;
  buttonBgClass: string;
  rightDivBgClass: string;
  iconBgClass: string;
  rightSideIcon: ReactNode;
  rightAboveDiv: RightSection;
  secondDiv: RightSection;
  onClick: ()=>void;
}

// ─── Variant B ────────────────────────────────────────────────────────────────
export interface ProcessStepItemVariantB {
  hyphenLineFillColor: string;
  numberText: string;
  leftHeading: string;
  leftSubheading: string;
  buttonBgClass: string;
  rightDivBgClass: string;
  iconBgClass: string;
  rightSideIcon: ReactNode;
  sectionTitle: string;
  sectionDescription: string;
  items: GridItem[];
  bottomContent: ReactNode;
  onClick: ()=>void;
}

// ─── Variant C ────────────────────────────────────────────────────────────────
export interface ProcessStepItemVariantC {
  hyphenLineFillColor: string;
  numberText: string;
  leftHeading: string;
  leftSubheading: string;
  buttonBgClass: string;
  rightDivBgClass: string;
  iconBgClass: string;
  rightSideIcon: ReactNode;
  firstSection: RightSection;
  secondSection: RightSectionNoTitle;
  bottomContent: ReactNode;
  onClick: ()=>void;
}

// ─── Variant Custom ───────────────────────────────────────────────────────────
export interface ProcessStepItemVariantCustom {
  hyphenLineFillColor: string;
  numberText: string;
  leftHeading: string;
  leftSubheading: string;
  buttonBgClass: string;
  rightDivBgClass: string;
  iconBgClass: string;
  rightSideIcon: ReactNode;
  rightTitle: string;
  rightSubtitle: string;
  bottomContent: ReactNode;
  onClick: ()=>void;
}

interface ProcessStepComponentProps {
  variant: "A" | "B" | "C" | "custom";
  items:
    | ProcessStepItemVariantA[]
    | ProcessStepItemVariantB[]
    | ProcessStepItemVariantC[]
    | ProcessStepItemVariantCustom[];
}

// ─── GridItems ────────────────────────────────────────────────────────────────
const GridItems = ({
  items,
  gridClass,
}: {
  items: GridItem[];
  gridClass: string;
}) => (
  <div className={`${gridClass} gap-2`}>
    {items.map((item, idx, arr) => (
      <div
        key={idx}
        className={`rounded-2xl flex flex-row items-center gap-4 bg-white py-4  px-4 lg:px-6 ${
  gridClass.includes("lg:grid-cols-2") &&
  arr.length % 2 !== 0 &&
  idx === arr.length - 1
    ? "lg:col-span-2"
    : ""
}`}
      >
        {item.icon}
        <div className="flex flex-col gap-2">
          {item.title && (
            <p className="text-xl font-bold leading-[150%] text-black">
              {item.title}
            </p>
          )}
          <p className="text-lg leading-[150%] font-normal text-black">
            {item.label}
          </p>
        </div>
      </div>
    ))}
  </div>
);

// ─── LeftSide ─────────────────────────────────────────────────────────────────
interface LeftSideProps {
  hyphenLineFillColor: string;
  numberText: string;
  leftHeading: string;
  leftSubheading: string;
  buttonBgClass: string;
  onClick: ()=>void;
}

const LeftSide = ({
  hyphenLineFillColor,
  numberText,
  leftHeading,
  leftSubheading,
  buttonBgClass,
  onClick
}: LeftSideProps) => (
  <div className="flex lg:col-span-5 flex-col items-start gap-8">
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2.5">
        <HyphenLine fill={hyphenLineFillColor} />
        <p
          className="text-2xl font-bold leading-[160%]"
          style={{ color: hyphenLineFillColor }}
        >
          {numberText}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-4xl lg:text-[46px] font-semibold leading-[120%] tracking-[-0.02em]">
          {leftHeading}
        </p>
        <p className="text-black font-normal text-xl lg:text-2xl leading-[160%]">
          {leftSubheading}
        </p>
      </div>
    </div>
    <div>
      <ThemeButton
        label="Request a Demo"
        icon={<RightUpArrow />}
        bgClasses={buttonBgClass}
        wrapperClasses="border border-[#E9EAEB] bg-white backdrop-blur-[36.967px]"
        variant="custom"
        onClick={onClick}
      />
    </div>
  </div>
);

// ─── Variant A Step ───────────────────────────────────────────────────────────
export const VariantAStep = ({
  hyphenLineFillColor,
  numberText,
  leftHeading,
  leftSubheading,
  buttonBgClass,
  rightDivBgClass,
  iconBgClass,
  rightSideIcon,
  rightAboveDiv,
  secondDiv,
  onClick
}: ProcessStepItemVariantA) => (
 
    <div className="container max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-16">
      <LeftSide
            hyphenLineFillColor={hyphenLineFillColor}
            numberText={numberText}
            leftHeading={leftHeading}
            leftSubheading={leftSubheading}
            buttonBgClass={buttonBgClass} onClick={onClick}      />
      <div
        className={` py-5 lg:py-7.5 px-5 lg:px-10 lg:col-span-7 rounded-3xl flex flex-col gap-7.5 ${rightDivBgClass}`}
      >
        <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{ background: iconBgClass }}
          />
          {rightSideIcon}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[28px] text-black leading-[100%]">
              {rightAboveDiv.title}
            </p>
            <p className="text-black font-normal text-lg leading-[160%]">
              {rightAboveDiv.description}
            </p>
          </div>
          <GridItems items={rightAboveDiv.items} gridClass="grid grid-cols-1 lg:grid-cols-2" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[28px] text-black leading-[100%]">
              {secondDiv.title}
            </p>
            <p className="text-black font-normal text-lg leading-[160%]">
              {secondDiv.description}
            </p>
          </div>
          <GridItems items={secondDiv.items} gridClass="grid grid-cols-1 lg:grid-cols-2"  />
        </div>
      </div>
    </div>
);

// ─── Variant B Step ───────────────────────────────────────────────────────────
export const VariantBStep = ({
  hyphenLineFillColor,
  numberText,
  leftHeading,
  leftSubheading,
  buttonBgClass,
  rightDivBgClass,
  iconBgClass,
  rightSideIcon,
  sectionTitle,
  sectionDescription,
  items,
  bottomContent,
  onClick
}: ProcessStepItemVariantB) => (
    <div className="container max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-16">
      <LeftSide
        hyphenLineFillColor={hyphenLineFillColor}
        numberText={numberText}
        leftHeading={leftHeading}
        leftSubheading={leftSubheading}
        buttonBgClass={buttonBgClass}
        onClick={onClick}
      />
      <div
        className={`py-5 lg:py-7.5 px-5 lg:px-10 lg:col-span-7 rounded-3xl flex flex-col gap-7.5 ${rightDivBgClass}`}
      >
        <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{ background: iconBgClass }}
          />
          {rightSideIcon}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[28px] text-black leading-[100%]">
              {sectionTitle}
            </p>
            <p className="text-black font-normal text-lg leading-[160%]">
              {sectionDescription}
            </p>
          </div>
          <GridItems items={items} gridClass="grid grid-cols-1"  />
        </div>

        <div>{bottomContent}</div>
      </div>
    </div>
);

// ─── Variant C Step ───────────────────────────────────────────────────────────
export const VariantCStep = ({
  hyphenLineFillColor,
  numberText,
  leftHeading,
  leftSubheading,
  buttonBgClass,
  rightDivBgClass,
  iconBgClass,
  rightSideIcon,
  firstSection,
  secondSection,
  bottomContent,
  onClick
}: ProcessStepItemVariantC) => (
    <div className="container max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-16">
      <LeftSide
        hyphenLineFillColor={hyphenLineFillColor}
        numberText={numberText}
        leftHeading={leftHeading}
        leftSubheading={leftSubheading}
        buttonBgClass={buttonBgClass}
        onClick={onClick}
      />
      <div
        className={`py-5 lg:py-7.5 px-5 lg:px-10 lg:col-span-7 rounded-3xl flex flex-col gap-7.5 ${rightDivBgClass}`}
      >
        <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{ background: iconBgClass }}
          />
          {rightSideIcon}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[28px] text-black leading-[100%]">
              {firstSection.title}
            </p>
            <p className="text-black font-normal text-lg leading-[160%]">
              {firstSection.description}
            </p>
          </div>
          <GridItems items={firstSection.items} gridClass="grid grid-cols-1 lg:grid-cols-2"  />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-black font-normal text-lg leading-[160%]">
              {secondSection.description}
            </p>
          </div>
          <GridItems items={secondSection.items} gridClass="grid grid-cols-1 lg:grid-cols-2"  />
        </div>

        <div>{bottomContent}</div>
      </div>
    </div>
);

// ─── Variant Custom Step ──────────────────────────────────────────────────────
 const VariantCustomStep = ({
  hyphenLineFillColor,
  numberText,
  leftHeading,
  leftSubheading,
  buttonBgClass,
  rightDivBgClass,
  iconBgClass,
  rightSideIcon,
  rightTitle,
  rightSubtitle,
  bottomContent,
  onClick
}: ProcessStepItemVariantCustom) => (
    <div className="container max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-16">
      <LeftSide
        hyphenLineFillColor={hyphenLineFillColor}
        numberText={numberText}
        leftHeading={leftHeading}
        leftSubheading={leftSubheading}
        buttonBgClass={buttonBgClass}
        onClick={onClick}
      />
      <div
        className={`py-5 lg:py-7.5 px-5 lg:px-10 lg:col-span-7 rounded-3xl flex flex-col gap-7.5 ${rightDivBgClass}`}
      >
        <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{ background: iconBgClass }}
          />
          {rightSideIcon}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-[28px] text-black leading-[100%]">
            {rightTitle}
          </p>
          <p className="text-black font-normal text-lg leading-[160%]">
            {rightSubtitle}
          </p>
        </div>

        <div>{bottomContent}</div>
      </div>
    </div>
);

// ─── ProcessStepList ──────────────────────────────────────────────────────────
export const ProcessStepComponent = ({ variant, items }: ProcessStepComponentProps) => {
  return (
    <div className="flex flex-col">
      {variant === "A"
        ? (items as ProcessStepItemVariantA[]).map((item, idx) => (
            <VariantAStep key={idx} {...item} />
          ))
        : variant === "B"
        ? (items as ProcessStepItemVariantB[]).map((item, idx) => (
            <VariantBStep key={idx} {...item} />
          ))
        : variant === "C"
        ? (items as ProcessStepItemVariantC[]).map((item, idx) => (
            <VariantCStep key={idx} {...item} />
          ))
        : (items as ProcessStepItemVariantCustom[]).map((item, idx) => (
            <VariantCustomStep key={idx} {...item} />
          ))}
    </div>
  );
};