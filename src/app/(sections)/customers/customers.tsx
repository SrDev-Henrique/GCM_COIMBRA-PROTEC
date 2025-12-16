/** biome-ignore-all lint/suspicious/noArrayIndexKey: <because> */
"use client";

import { faker } from "@faker-js/faker";
import { RiStarFill } from "@remixicon/react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { fadeInUpVariants, fadeInVariants } from "../anime";
import { CustomerReviewCard } from "./components/customer-review-card";
import { testimonials } from "./data";

export function Customers() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 py-16 md:gap-8">
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        custom={0}
        ref={containerRef}
        className="h-[90vh] min-h-[500px] w-full"
      >
        <div className="relative size-full overflow-hidden rounded-3xl">
          <Image
            src="/images/customer.webp"
            alt="customer satisfaction"
            width={1224}
            height={1024}
            className="size-full rounded-3xl object-cover object-center brightness-65 grayscale-95"
          />
          <div className="absolute inset-0 flex items-end px-6 lg:px-12">
            <div className="flex h-[70%] w-full flex-col justify-between py-12">
              <motion.h2
                variants={fadeInUpVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                custom={0.3}
                className="font-bold text-4xl text-primary-foreground lg:max-w-[80%] lg:text-6xl"
              >
                <span className="relative text-card-foreground before:absolute before:inset-0 before:rotate-2 before:bg-primary before:content-[''] after:absolute after:inset-0 after:content-['Confiado']">
                  Confiado
                </span>{" "}
                por pessoas como você.
              </motion.h2>
              <motion.p
                variants={fadeInUpVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                custom={0.5}
                className="max-w-96 text-lg text-secondary-foreground lg:max-w-[70%] lg:text-2xl"
              >
                Nossos clientes confiam em nossa equipe para cuidar de suas
                necessidades.
              </motion.p>
              <Badge variant="outline" className="border-none">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  custom={0.7}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Avatar
                        key={index}
                        className={cn(
                          "size-8 lg:size-10",
                          index !== 0 && "-ms-3",
                        )}
                      >
                        <AvatarImage src={faker.image.personPortrait()} />
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-muted lg:text-base">
                        <span className="text-primary-foreground">4.9</span>/5
                      </p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <RiStarFill
                            key={index}
                            className="size-4 text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="font-semibold text-muted text-sm">
                      Mais de 100 avaliações positivas
                    </p>
                  </div>
                </motion.div>
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <CustomerReviewCard
            key={item.id}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
