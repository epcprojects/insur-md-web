"use client";

import React, {
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, MenuIcon } from "@/public/icons";
import HeaderMenuNavItems from "./HeaderMenuNavItems";
import { defaultTheme, headerThemeByPath } from "@/app/constants/menuItems";
import { useIsMobile } from "@/app/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const theme = headerThemeByPath[pathname] ?? defaultTheme;
  const [isHovered, setIsHovered] = useState(false);
  const [addHeaderStyle, setAddHeaderStyle] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // 80vh scroll threshold
      const threshold = window.innerHeight * 0.4;
      setAddHeaderStyle(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sm:px-4 xl:px-8 w-full fixed top-0 md:top-2  z-100">
      <div
        className={`transition-all duration-300 ${
          addHeaderStyle ? "bg-white rounded-[30px] shadow" : ""
        }`}
      >
        {" "}
        <nav className="flex relative items-center px-4 sm:ps-6 py-2 bg-white md:bg-transparent md:py-3 pe-4 mx-auto justify-between lg:flex-row flex-row-reverse w-full">
          <Link href="/" className="relative order-1 lg:order-0">
            <Logo
              fill1={theme.logo.fill1}
              fill2={theme.logo.fill2}
              fill3={theme.logo.fill3}
              fill4={theme.logo.fill4}
              height={isMobile ? "32" : "50"}
              width={isMobile ? "120" : "194"}
            />
          </Link>

          <div
            className={`px-8 py-4 min-h-14.5 rounded-full xl:flex hidden ${!addHeaderStyle && "bg-white shadow-sm"} `}
          >
            <HeaderMenuNavItems
              items={menuItems}
              activeColor={theme.logo.fill3}
            />
          </div>

          <div className="flex items-center flex-row-reverse xl:flex-row gap-3">
            <button
              className="px-3 md:px-5 md:py-[13.33px] cursor-pointer h-10 md:h-14.5 rounded-full transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleMenuButtonClick}
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

          <div className="fixed inset-y-0 gap-4 flex flex-col left-0 z-20 min-w-xs py-1.5 px-4 overflow-y-auto bg-white md:px-6 md:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between pt-1.5">
              <Link href="/" onClick={closeMenu}>
                <span className="sr-only">Your Company</span>
                <Logo
                  fill1={theme.logo.fill1}
                  fill2={theme.logo.fill2}
                  fill3={theme.logo.fill3}
                  fill4={theme.logo.fill4}
                  height={isMobile ? "32" : "50"}
                  width={isMobile ? "120" : "194"}
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
    </div>
  );
};

export default Header;
