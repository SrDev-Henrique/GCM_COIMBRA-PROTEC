import { RiAwardFill } from "@remixicon/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function OpeningCard() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:aspect-video">
        <div className="absolute inset-0 z-10 flex-center backdrop-brightness-60">
          <div className="space-y-4 md:space-y-6 lg:max-w-[80%] lg:space-y-8">
            <h2 className="mt-4 font-bold text-4xl text-primary-foreground uppercase sm:mt-0 md:text-5xl lg:text-6xl">
              Serviços
            </h2>
            <h2 className="ps-4 font-bold text-4xl text-primary-foreground uppercase md:text-5xl lg:text-6xl">
              <span className="relative text-card-foreground before:absolute before:inset-0 before:rotate-2 before:bg-primary before:content-[''] after:absolute after:inset-0 after:content-['Realizados']">
                Realizados
              </span>
            </h2>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute top-4 left-1/2 z-20 w-fit">
          <Badge
            variant="outline"
            className="border-none backdrop-blur-sm backdrop-brightness-85 sm:py-2"
          >
            <div className="flex items-center gap-2">
              <RiAwardFill className="size-9 text-primary lg:size-10" />
              <div className="flex max-w-72 flex-col text-wrap">
                <h2 className="font-semibold text-primary-foreground">
                  Serviço de qualidade
                </h2>
                <p className="text-sidebar-ring text-xs lg:text-sm">
                  Garantimos a melhor qualidade de serviço para você
                </p>
              </div>
            </div>
          </Badge>
        </div>
        <Image
          src="/images/servicos.webp"
          alt="Serviços"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
