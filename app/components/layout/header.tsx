"use client";

import React, { MouseEvent, ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, MenuIcon } from "@/public/icons";
import HeaderMenuNavItems from "./HeaderMenuNavItems";
import { defaultTheme, headerThemeByPath } from "@/app/constants/menuItems";

interface MenuItemType {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface HeaderProps {
  menuItems: MenuItemType[];
}

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
    <div className="sm:px-4 xl:px-8 w-full fixed top-2 z-100">
      <nav className="flex relative   items-center px-4 sm:ps-6 py-3 pe-4 mx-auto justify-between lg:flex-row flex-row-reverse w-full">
        <Link href="/" className="relative order-1 lg:order-0">
          <Logo
            fill1={theme.logo.fill1}
            fill2={theme.logo.fill2}
            fill3={theme.logo.fill3}
            fill4={theme.logo.fill4}
          />
        </Link>

        <div className="px-8 py-4 min-h-14.5 rounded-full xl:flex hidden bg-white shadow-sm">
          <HeaderMenuNavItems
            items={menuItems}
            activeColor={theme.logo.fill3}
          />
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
