"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItem {
  label: string;
  href: string;
}

interface HeaderMenuNavItemsProps {
  items: MenuItem[];
}

function HeaderMenuNavItems({ items }: HeaderMenuNavItemsProps) {
  const pathname = usePathname();

  return (
    <ul className="flex-row items-center justify-center grow hidden gap-3 sm:gap-4 rtl:flex-row-reverse md:flex ">
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`nav-link ${isActive ? "text-[#109383]   before:content-[''] before:bg-[#109383] before:mr-2 before:h-1.5 before:w-[6.5px] before:mb-0.5  before:rounded-full before:inline-block" : "text-black"} hover:text-[#109383] font-medium cursor-pointer w-fit overflow-hidden  whitespace-nowrap text-base`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderMenuNavItems;
