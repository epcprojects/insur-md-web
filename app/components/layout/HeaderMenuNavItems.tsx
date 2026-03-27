"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItem {
  label: string;
  href: string;
}

interface HeaderMenuNavItemsProps {
  items: MenuItem[];
  activeColor?: string;
}

function HeaderMenuNavItems({
  items,
  activeColor = "#109383",
}: HeaderMenuNavItemsProps) {
  const pathname = usePathname();
  const moreItems = items.slice(7);
  const isMoreActive = moreItems.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  return (
    <div className="relative flex items-center gap-3 md:gap-4">
      <ul className="flex-row items-center justify-center grow hidden gap-3 sm:gap-3 rtl:flex-row-reverse md:flex">
        {items.slice(0, 7).map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link font-medium cursor-pointer w-fit overflow-hidden whitespace-nowrap text-[15px] text-black"
                style={{
                  color: isActive ? activeColor : "#000000",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = activeColor;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#000000";
                }}
              >
                <span className="inline-flex items-center gap-2 relative ps-3">
                  {/* {isActive && (
                    <span
                      className="inline-block absolute h-1.5 w-1.5 shrink-0 rounded-full left-0"
                      style={{ backgroundColor: activeColor }}
                    />
                  )} */}
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {moreItems.length > 1 && (
        <div className="z-100 flex ">
          <Menu>
            <MenuButton
              className={`nav-link group outline-none cursor-pointer flex items-center gap-1 xl:gap-1.5 font-medium text-[15px] rtl:leading-10 whitespace-nowrap lg:p-2 lg:pe-5 duration-300 rounded-full text-white
    ${isMoreActive ? "bg-primary" : "hover:bg-primary/80"}
  `}
              style={{
                color: isMoreActive ? activeColor : "#000000",
              }}
            >
              More{" "}
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.97656 5.94727C5.68359 6.24023 5.24414 6.24023 4.98047 5.94727L0.292969 1.25977C0 0.996094 0 0.556641 0.292969 0.292969C0.556641 0 0.996094 0 1.25977 0.292969L5.44922 4.48242L9.66797 0.263672C9.93164 0 10.3711 0 10.6348 0.263672C10.9277 0.556641 10.9277 0.996094 10.6348 1.25977L5.97656 5.94727Z"
                  fill="currentColor"
                />
              </svg>
            </MenuButton>

            <MenuItems
              transition
              className={`min-w-44 border p-1 text-sm/6 origin-top-right border-white rounded-xl  top-16 drop-shadow right-0  backdrop-blur-3xl  ${true ? "md:bg-white" : " bg-gray-800"} absolute text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0`}
            >
              {items.slice(7).map((item, index) => {
                // const Icon = item.icon;

                return (
                  <MenuItem key={index}>
                    <Link
                      href={item.href}
                      className="group flex cursor-pointer w-full items-center text-black text-base gap-1.5 hover:bg-gray-100 rounded-lg px-3 py-2.5 data-focus:bg-primary"
                    >
                      {/* <Icon fill={"currentColor"} /> */}
                      {item.label}
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuItems>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default HeaderMenuNavItems;
