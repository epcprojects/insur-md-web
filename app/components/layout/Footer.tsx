"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { images } from "@/app/ui";
import { Logo } from "@/public/icons";
import { defaultTheme, headerThemeByPath } from "@/app/constants/menuItems";
interface MenuItemType {
  label: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ComponentType<any>;
}

interface FooterProps {
  menuItems: MenuItemType[];
  modulesItems: MenuItemType[];
}

const Footer: React.FC<FooterProps> = ({ menuItems, modulesItems }) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const theme = headerThemeByPath[pathname] ?? defaultTheme;

  return (
    <footer className=" mt-auto mb-0">
      <section className="bg-white bg-no-repeat bg-cover bg-center relative  overflow-hidden">
        <div
          className="py-8 sm:py-16 pb-12 space-y-8 sm:space-y-16 container px-4 md:px-8 mx-auto max-w-7xl  relative w-full bg-center bg-no-repeat bg-cover
     "
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-7.5 md:gap-18">
            <div className="space-y-4">
              <Link
                href="/"
                className="relative inline-block order-1 lg:order-0"
              >
                <Logo
                  height={isMobile ? "42" : "80"}
                  width={isMobile ? "160" : "240"}
                  fill1={theme.logo.fill1}
                  fill2={theme.logo.fill2}
                  fill3={theme.logo.fill3}
                  fill4={theme.logo.fill4}
                />
              </Link>
              <h2 className="text-light font-normal text-base md:text-lg">
                Where healthcare meets underwriting intelligence
              </h2>
            </div>

            <div className="space-y-4">
              <h2
                className={`text-[${theme.logo.fill3}] font-semibold text-sm`}
              >
                Quick Links
              </h2>
              <ul className="space-y-3">
                {menuItems.slice(0, 6).map((item) => {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`nav-link cursor-pointer hover:underline underline-offset-2 hover:text-[${theme.logo.fill3}] text-gray-700 font-normal text-base whitespace-nowrap`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <h2
                className={`text-[${theme.logo.fill3}] font-semibold text-sm`}
              >
                Resources
              </h2>

              <ul className="space-y-3">
                {modulesItems.slice(6).map((item) => (
                  <li key={item.label}>
                    <Link
                      href={`${item.href}`}
                      className={`nav-link cursor-pointer hover:underline underline-offset-2 hover:text-[${theme.logo.fill3}] text-gray-700 font-normal text-base whitespace-nowrap`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2
                className={`text-[${theme.logo.fill3}] font-semibold text-sm`}
              >
                Stay up to date
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <input
                  type="email"
                  className="text-base text-[#717680] outline-0 bg-white border border-[#D5D7DA] rounded-lg  py-2.5 px-3.5 "
                  placeholder="Enter your email"
                />
                <button
                  className={`cursor-pointer rounded-full py-2.5 px-6 drop-shadow text-white font-semibold text-lg`}
                  style={{ backgroundColor: theme.logo.fill3 }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t relative py-8 flex-col-reverse sm:flex-row gap-4 container mx-auto max-w-7xl border-t-gray-200 w-full flex items-center justify-between">
          <h2 className="text-[#717680]">
            © {new Date().getFullYear()} InsurMD. All rights reserved.
          </h2>
          <div className="flex items-center gap-4.5">
            <Link href={"/"} className="text-[#717680] hover:text-blue-600">
              Terms
            </Link>
            <Link href={"/"} className="text-[#717680] hover:text-pink-400">
              Privacy
            </Link>
            <Link href={"/"} className="text-[#717680] hover:text-gray-100">
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
