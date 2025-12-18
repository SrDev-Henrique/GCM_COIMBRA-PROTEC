import { RiArrowRightFill, RiCalendar2Fill } from "@remixicon/react";
import { Clock10Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogCard({
  image,
  title,
  tags,
  createdAt,
  estimatedTime,
  slug,
}: {
  image: string;
  title: string;
  tags: string[];
  createdAt: string;
  estimatedTime: string;
  slug: string;
}) {
  const colors = [
    "0.6932 0.1974 38.9754",
    "0.6898 0.1581 290.4107",
    "0.7342 0.1295 134.837",
    "0.7073 0.1847 25.9439",
    "0.4539 0.0568 55.6365",
  ];
  return (
    <div className="h-fit w-full">
      <div className="relative size-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={1224}
          height={630}
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-end pt-10 md:p-6">
          <div className="flex w-fit flex-col gap-2 px-4 py-2 backdrop-blur-sm backdrop-brightness-70 backdrop-contrast-125 backdrop-saturate-150">
            <h3 className="line-clamp-2 font-bold text-lg text-primary-foreground md:text-xl">
              {title}
            </h3>
            <div className="mt-2 flex w-full justify-between text-muted">
              <p className="flex items-center gap-2 text-xs">
                <RiCalendar2Fill className="size-4" /> {createdAt}
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Clock10Icon className="size-4" /> {estimatedTime}
              </p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full py-2 backdrop-blur-sm backdrop-brightness-30 backdrop-contrast-125 backdrop-saturate-150">
              {tags.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="outline"
                  style={{
                    backgroundColor: `oklch(${colors[index]}/0.2)`,
                    color: `oklch(${colors[index]})`,
                  }}
                  className="border-none backdrop-brightness-40 sm:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        asChild
        className="group mt-4 h-12 w-full rounded-xl px-5 py-2.5"
      >
        <Link href={`/blog/${slug}`}>
          <div className="flex h-full w-full items-center justify-between">
            <p>Ler artigo</p>
            <div className="relative aspect-square h-full overflow-hidden rounded-full bg-popover-foreground text-primary-foreground">
              <RiArrowRightFill className="-rotate-45 -translate-x-[42.5%] size-4 translate-y-[120%] transition-all duration-300 group-hover:translate-x-1/3 group-hover:translate-y-1/3" />
              <RiArrowRightFill className="-translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover:-translate-y-150 absolute top-1/2 left-1/2 size-4 transition-all duration-300 group-hover:translate-x-150" />
            </div>
          </div>
        </Link>
      </Button>
    </div>
  );
}
