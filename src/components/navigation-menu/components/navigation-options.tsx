import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { navigationOptions } from "../data";

export function NavigationOptions({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {navigationOptions.map((option) => (
        <Link
          href={option.link}
          onClick={() => setIsOpen(false)}
          className="group flex cursor-pointer items-start gap-2 rounded-xl bg-accent/90 p-2 transition-colors duration-300 hover:bg-accent"
          key={option.id}
        >
          <option.Icon className="min-h-6 min-w-6" />
          <div className="space-y-0.5">
            <h3 className="text-nowrap font-medium text-sm">{option.label}</h3>
            <p className="sidebar-foreground text-sm">{option.description}</p>
          </div>
          <RiArrowRightUpLine className="min-h-6 min-w-6 self-start transition-transform duration-300 group-hover:rotate-45" />
        </Link>
      ))}
    </div>
  );
}
