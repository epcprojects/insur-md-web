import React, { ReactNode } from "react";

type ThemeButtonVariant = "primary" | "secondary" | "custom";
type ThemeButtonProps = {
  label: string;
  icon: ReactNode;
  variant: ThemeButtonVariant;
  onClick: () => void;
  bgClasses?: string;
  borderClr?: string;
  bodyBgClasses?: string;
  wrapperClasses?: string;
};
type VariantStyle = {
  button?: string;
  iconWrapper?: string;
};

const baseStyles = {
  button: ` py-2 pr-2 pl-5 hover:cursor-pointer
    text-gray-950 text-base lg:text-lg font-semibold leading-[26px] backdrop-blur-[73.93px]
  `,
  iconWrapper: `
   py-2 lg:py-[13.33px] px-3 lg:px-5 rounded-full
  `,
};

const variantStyles: Record<
  Exclude<ThemeButtonVariant, "custom">,
  VariantStyle
> = {
  primary: {
    iconWrapper: `
      [background:linear-gradient(170deg,theme(colors.teal)_41.33%,theme(colors.dark-teal)_102.06%)]
      [box-shadow:inset_0_-1.441px_7.351px_0_theme(colors.teal),0_1.441px_24.649px_0_rgba(46,211,183,0.50)]
    `,
  },
  secondary: {
    iconWrapper: `
      [background:linear-gradient(45deg,theme(colors.dark)_0%,theme(colors.light)_100%)]
    `,
  },
};

export const ThemeButton = ({
  label,
  icon,
  variant,
  wrapperClasses,
  onClick,
  bgClasses,
  borderClr = "border-white",
  bodyBgClasses = "bg-white",
}: ThemeButtonProps) => {
  const iconWrapperVariantClass =
    variant === "custom"
      ? (bgClasses ?? "")
      : (variantStyles[variant]?.iconWrapper ?? "");
  const wrapperVariantClass =
    variant === "custom" ? (wrapperClasses ?? "") : "";
  return (
    <div
      onClick={onClick}
      className={`flex ${baseStyles.button} ${borderClr} ${bodyBgClasses} border ${wrapperVariantClass} group flex-row items-center justify-between gap-[11.15px] rounded-full`}
    >
      {label}
      <div
        className={`${baseStyles.iconWrapper} ${iconWrapperVariantClass} flex items-center justify-center`}
      >
        <span className="transition-transform duration-600 group-hover:rotate-45">
          {icon}
        </span>
      </div>
    </div>
  );
};
