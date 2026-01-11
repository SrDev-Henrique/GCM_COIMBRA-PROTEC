import {
  RiArrowRightFill,
  RiMoneyDollarCircleLine,
  RiUserLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ClientServiceProps {
  title: string;
  description: string;
  serviceImage: string;
  clientName: string;
  clientImage?: string;
  price: number;
  href: string;
}

export function ClientServiceCard({
  title,
  description,
  serviceImage,
  clientName,
  clientImage,
  price,
  href,
}: ClientServiceProps) {
  return (
    <div className="grid w-fit grid-cols-1 gap-4 md:grid-cols-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl md:aspect-square md:max-w-sm">
        <Image
          src={serviceImage}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl text-card-foreground">{title}</h1>
            <p className="line-clamp-5 font-semibold text-muted-foreground text-sm lg:text-base">
              {description}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2 rounded-lg bg-foreground/10 p-2">
              <RiUserLine />
              <div className="flex items-center gap-2">
                {clientImage && (
                  <Avatar className="size-6">
                    <AvatarImage src={clientImage} />
                    <AvatarFallback>??</AvatarFallback>
                  </Avatar>
                )}
                <p className="text-foreground">{clientName}</p>
              </div>
            </div>
            <div className="flex gap-2 rounded-lg bg-chart-3/20 p-2">
              <RiMoneyDollarCircleLine />
              <p className="font-semibold text-foreground">
                {price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </div>
        <Button asChild className="group mt-4 h-12 w-full rounded-xl px-5 py-7">
          <Link href={href}>
            <div className="flex h-full min-h-7 w-full items-center justify-between">
              <p>Ver detalhes</p>
              <div className="relative aspect-square h-full overflow-hidden rounded-full bg-popover-foreground text-primary-foreground">
                <RiArrowRightFill className="-rotate-45 -translate-x-[42.5%] size-4 translate-y-[125%] transition-all duration-300 group-hover:translate-x-1/3 group-hover:translate-y-1/3" />
                <RiArrowRightFill className="-translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover:-translate-y-150 absolute top-1/2 left-1/2 size-4 transition-all duration-300 group-hover:translate-x-150" />
              </div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
