import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  {
    label: "Home",
    iconSrc: "/container-5.svg",
    activeIconSrc: "/container-5.svg",
  },
  {
    label: "Search",
    iconSrc: "/container-11.svg",
    activeIconSrc: "/container-11.svg",
  },
  {
    label: "Map",
    iconSrc: "/container-2.svg",
    activeIconSrc: "/container-2.svg",
  },
  {
    label: "Chat",
    iconSrc: "/container-1.svg",
    activeIconSrc: "/container-1.svg",
  },
  {
    label: "Profile",
    iconSrc: "/container-12.svg",
    activeIconSrc: "/container-12.svg",
  },
];

export const PrimaryBottomNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav
      aria-label="Primary bottom navigation"
      className="w-full bg-white border-t border-[#e1e3e4] shadow-[0px_1px_2px_#0000000d]"
    >
      <ul className="mx-auto grid w-full max-w-[402px] grid-cols-5 items-center gap-[14.1px] px-[15.05px] pt-2">
        {navigationItems.map((item) => {
          const isActive = item.label === activeItem;

          return (
            <li key={item.label} className="flex justify-center">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setActiveItem(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`h-auto w-full rounded-2xl px-2 py-2 hover:bg-transparent ${
                  isActive
                    ? "bg-[#ff5c001a] text-[#a73a00] shadow-[0px_0px_15px_#ff5c0026]"
                    : "text-[#5b4137]"
                }`}
              >
                <span className="flex min-w-0 flex-col items-center justify-center">
                  <img
                    className="relative shrink-0"
                    alt={item.label}
                    src={isActive ? item.activeIconSrc : item.iconSrc}
                  />
                  <span
                    className={`pt-0.5 text-base leading-6 whitespace-nowrap [font-family:'Be_Vietnam_Pro',Helvetica] font-normal ${
                      isActive ? "text-[#a73a00]" : "text-[#5b4137]"
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
