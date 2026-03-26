"use client";

import React, { MouseEvent, ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, MenuIcon } from "@/public/icons";
import HeaderMenuNavItems from "./HeaderMenuNavItems";

interface MenuItemType {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface HeaderProps {
  menuItems: MenuItemType[];
}

type HeaderThemeType = {
  logo: {
    fill1: string;
    fill2: string;
    fill3: string;
    fill4: string;
  };
  menuButton: {
    shadow: string;
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
    iconFill: string;
  };
};

const defaultTheme: HeaderThemeType = {
  logo: {
    fill1: "#107569",
    fill2: "#4BB8B2",
    fill3: "#109383",
    fill4: "#31D3B7",
  },
  menuButton: {
    shadow:
      "inset 0 -1.441px 7.351px 0 #15B79E, 0 1.441px 8.649px 0 rgba(18,93,86,0.50)",
    from: "#15B79E",
    to: "#125D56",
    hoverFrom: "#125D56",
    hoverTo: "#15B79E",
    iconFill: "#FFFFFF",
  },
};

const headerThemeByPath: Record<string, HeaderThemeType> = {
  "/": {
    logo: {
      fill1: "#107569",
      fill2: "#4BB8B2",
      fill3: "#109383",
      fill4: "#31D3B7",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #15B79E, 0 1.441px 8.649px 0 rgba(18, 93, 86, 0.5)",
      from: "#15B79E",
      to: "#125D56",
      hoverFrom: "#125D56",
      hoverTo: "#15B79E",
      iconFill: "#FFFFFF",
    },
  },
  // "/platform-overview": {
  //   logo: {
  //     fill1: "#164C63",
  //     fill2: "#22CCEE",
  //     fill3: "#088AB2",
  //     fill4: "#67E3F9",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #22CCEE, 0 1.441px 8.649px 0 rgba(34,204,238,0.50)",
  //     from: "#22CCEE",
  //     to: "#088AB2",
  //     hoverFrom: "#088AB2",
  //     hoverTo: "#22CCEE",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  // "/why-insur-md": {
  //   logo: {
  //     fill1: "#4C2A63",
  //     fill2: "#C86BFA",
  //     fill3: "#8A3AB2",
  //     fill4: "#E7C4FF",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #C86BFA, 0 1.441px 8.649px 0 rgba(138,58,178,0.45)",
  //     from: "#C86BFA",
  //     to: "#8A3AB2",
  //     hoverFrom: "#8A3AB2",
  //     hoverTo: "#C86BFA",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  // "/how-it-works": {
  //   logo: {
  //     fill1: "#5C4A12",
  //     fill2: "#F5C542",
  //     fill3: "#C99700",
  //     fill4: "#FFE8A3",
  //   },
  //   menuButton: {
  //     shadow:
  //       "inset 0 -1.441px 7.351px 0 #F5C542, 0 1.441px 8.649px 0 rgba(201,151,0,0.40)",
  //     from: "#F5C542",
  //     to: "#C99700",
  //     hoverFrom: "#C99700",
  //     hoverTo: "#F5C542",
  //     iconFill: "#FFFFFF",
  //   },
  // },
  "/integrations-api": {
    logo: {
      fill1: "#89123E",
      fill2: "#FD6F8E",
      fill3: "#E31B54",
      fill4: "#E31B54",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #FD6F8E, 0 1.441px 8.649px 0 rgba(192,16,72,0.45)",
      from: "#FD6F8E",
      to: "#FD6F8E",
      hoverFrom: "#FD6F8E",
      hoverTo: "#FD6F8E",
      iconFill: "#FFFFFF",
    },
  },
  "/underwriting-teams": {
    logo: {
      fill1: "#164C63",
      fill2: "#22CCEE",
      fill3: "#088AB2",
      fill4: "#67E3F9",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #22CCEE, 0 1.441px 24.649px 0 rgba(14,12,144,0.45)",
      from: "#22CCEE",
      to: "#0E7090",
      hoverFrom: "#0E7090",
      hoverTo: "#22CCEE",
      iconFill: "#FFFFFF",
    },
  },
  "/reinsurers": {
    logo: {
      fill1: "#0040C1",
      fill2: "#528BFF",
      fill3: "#155EEF",
      fill4: "#84ADFF",
    },
    menuButton: {
      shadow:
        "inset 0 -1.441px 7.351px 0 #2970FF, 0 1.441px 24.649px 0 rgba(0,64,193,0.45)",
      from: "#2970FF",
      to: "#0040C1",
      hoverFrom: "#0040C1",
      hoverTo: "#2970FF",
      iconFill: "#FFFFFF",
    },
  },
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const theme = headerThemeByPath[pathname] ?? defaultTheme;
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = (): void => setIsMenuOpen((prev: boolean) => !prev);
  const closeMenu = (): void => setIsMenuOpen(false);

  const handleMenuButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggleMenu();
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    closeMenu();
  };

  const handleCloseButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    closeMenu();
  };

  return (
    <div className="sm:px-4 xl:px-8 w-full fixed top-2">
      <nav className="flex relative  sm:mt-4 items-center px-4 sm:ps-6 py-3 pe-4 mx-auto justify-between lg:flex-row flex-row-reverse w-full">
        <Link href="/" className="relative order-1 lg:order-0">
          <Logo
            fill1={theme.logo.fill1}
            fill2={theme.logo.fill2}
            fill3={theme.logo.fill3}
            fill4={theme.logo.fill4}
          />
        </Link>

        <div className="px-8 py-4 min-h-14.5 rounded-full xl:flex hidden bg-white">
          <HeaderMenuNavItems items={menuItems} />
        </div>

        <div className="flex items-center flex-row-reverse xl:flex-row gap-3">
          <div className="flex xl:hidden relative">
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 md:h-11 md:w-11 bg-black/40 rounded-full text-black"
              onClick={handleMenuButtonClick}
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16724 3.66345C2.16724 3.38731 2.39109 3.16345 2.66724 3.16345H10.6672C10.9434 3.16345 11.1672 3.38731 11.1672 3.66345C11.1672 3.9396 10.9434 4.16345 10.6672 4.16345L2.66724 4.16345C2.39109 4.16345 2.16724 3.93959 2.16724 3.66345Z"
                  fill="white"
                />
                <path
                  d="M2.16724 8.33012C2.16724 8.05398 2.39109 7.83012 2.66724 7.83012L13.3339 7.83012C13.61 7.83012 13.8339 8.05398 13.8339 8.33012C13.8339 8.60626 13.61 8.83012 13.3339 8.83012L2.66724 8.83012C2.39109 8.83012 2.16724 8.60626 2.16724 8.33012Z"
                  fill="white"
                />
                <path
                  d="M2.66724 12.4968C2.39109 12.4968 2.16724 12.7206 2.16724 12.9968C2.16724 13.2729 2.39109 13.4968 2.66724 13.4968H8.00057C8.27671 13.4968 8.50057 13.2729 8.50057 12.9968C8.50057 12.7206 8.27671 12.4968 8.00057 12.4968H2.66724Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <button
            className="px-5 py-[13.33px] cursor-pointer h-14.5 rounded-full transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              background: isHovered
                ? `linear-gradient(170deg, ${theme.menuButton.hoverFrom} -70%, ${theme.menuButton.hoverTo} 100%)`
                : `linear-gradient(170deg, ${theme.menuButton.from} 45%, ${theme.menuButton.to} 100%)`,
              boxShadow: theme.menuButton.shadow,
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div
        className={`xl:hidden relative ${isMenuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          className={`fixed inset-0 z-10 bg-black opacity-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={handleBackdropClick}
        />

        <div className="fixed inset-y-0 gap-4 flex flex-col left-0 z-20 min-w-xs p-4 px-4 overflow-y-auto bg-white md:px-6 md:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pt-1.5">
            <Link href="/" onClick={closeMenu}>
              <span className="sr-only">Your Company</span>
              <Logo
                fill1={theme.logo.fill1}
                fill2={theme.logo.fill2}
                fill3={theme.logo.fill3}
                fill4={theme.logo.fill4}
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handleCloseButtonClick}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#A4A7AE"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="border-b-0 flex flex-col gap-2.5">
                <Link
                  onClick={closeMenu}
                  href="/"
                  className="flex items-center gap-1.5 p-1.5 text-base font-normal leading-7 text-neutral-800 hover:bg-gray-100"
                >
                  Home
                </Link>

                {menuItems.map((item) => (
                  <Link
                    onClick={closeMenu}
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-1.5 p-1.5 text-base font-normal leading-7 text-neutral-800 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
