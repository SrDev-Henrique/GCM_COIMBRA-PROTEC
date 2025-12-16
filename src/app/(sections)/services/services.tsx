"use client";

import { RiPhoneFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { services } from "./data";
import { ServicesCard } from "./services-card";

export function Services() {
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:mt-32">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-fit flex-col">
          <p className="text-muted-foreground text-sm">Conheça os</p>
          <h2 className="font-bold text-sm uppercase sm:text-base md:text-2xl">
            Nossos Serviços
          </h2>
        </div>
        <div className="w-fit max-w-48 sm:max-w-56 md:max-w-96">
          <p className="text-muted-foreground text-xs md:text-sm">
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <ServicesCard
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon as React.ElementType}
              index={index}
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">
            Entre outros serviços.
          </p>
          <Button size="lg">
            <RiPhoneFill className="size-4" />
            <p className="font-semibold text-sm uppercase">Entre em contato</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
