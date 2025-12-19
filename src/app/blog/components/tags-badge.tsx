import { Badge } from "@/components/ui/badge";

const colors = [
  "0.6932 0.1974 38.9754",
  "0.6898 0.1581 290.4107",
  "0.7342 0.1295 134.837",
  "0.7073 0.1847 25.9439",
  "0.4539 0.0568 55.6365",
];

export function TagsBadge({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <Badge
      variant="outline"
      style={{
        backgroundColor: `oklch(${colors[index]}/0.2)`,
        color: `oklch(${colors[index]})`,
      }}
      className="border-none text-sm"
    >
      {children}
    </Badge>
  );
}
