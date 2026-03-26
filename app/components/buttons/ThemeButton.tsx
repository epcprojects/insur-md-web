import React, { ReactNode } from "react";

type ThemeButtonVariant = "primary" | "secondary";
type ThemeButtonProps = {
  label: string;
  icon: ReactNode;
  variant: ThemeButtonVariant;
  onClick: () => void;
};
type VariantStyle = {
  button?: string;
  iconWrapper?: string;
};

const baseStyles = {
  button: `
    bg-white py-2 pr-2 pl-5 hover:cursor-pointer
    text-gray-950 text-lg font-semibold leading-[26px] backdrop-blur-[73.93px]
  `,
  iconWrapper: `
    py-[13.33px] px-5 rounded-full
  `,
};

const variantStyles: Record<ThemeButtonVariant, VariantStyle> = {
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
  onClick,
}: ThemeButtonProps) => {
  const styles = variantStyles[variant];
  return (
    <div
      onClick={onClick}
      className={`flex ${baseStyles.button} group flex-row items-center gap-[11.15px] rounded-full`}
    >
      {label}
      <div
        className={`${baseStyles.iconWrapper} ${styles.iconWrapper}  flex items-center justify-center`}
      >
        <span className="transition-transform duration-600 group-hover:rotate-45">
          {icon}
        </span>
      </div>
    </div>
  );
};
