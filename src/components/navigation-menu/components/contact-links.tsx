import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactLinksProps = {
  label: string;
  Icon: React.ElementType;
  link: string;
  contact: string;
  index: number;
};

export function ContactLinks({
  label,
  Icon,
  link,
  contact,
  index,
}: ContactLinksProps) {
  const navigationContactContainerStyles = [
    "border border-chart-3/60 hover:border-chart-3/80",
    "border border-chart-4/60 hover:border-chart-4/80",
  ];

  const navigationContactLinkStyles = [
    "border border-muted-foreground group-hover:border-none",
    "border border-muted-foreground group-hover:border-none",
  ];

  const navigationContactIconStyles = ["text-chart-3", "text-chart-4"];

  return (
    <div
      className={cn(
        navigationContactContainerStyles[index],
        "group w-full rounded-lg p-2 transition-colors duration-300",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Icon className={cn(navigationContactIconStyles[index], "size-7")} />
          <div className="space-y-0.5">
            <p className="cursor-default font-medium text-muted text-sm">
              {label}
            </p>
            <p className="text-muted-foreground text-xs">{contact}</p>
          </div>
        </div>
        <Button
          asChild
          size="icon"
          variant="ghost"
          className={cn(
            navigationContactLinkStyles[index],
            "size-7 text-muted-foreground transition-colors duration-300",
          )}
        >
          <Link href={link} target="_blank">
            <RiArrowRightUpLine />
          </Link>
        </Button>
      </div>
    </div>
  );
}
