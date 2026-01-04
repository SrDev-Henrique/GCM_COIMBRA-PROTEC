/** biome-ignore-all lint/suspicious/noArrayIndexKey: <because> */
"use client";

import { faker } from "@faker-js/faker";
import { AvatarImage } from "@radix-ui/react-avatar";
import { RiAwardFill, RiPhoneFill, RiStarFill } from "@remixicon/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeInVariants, fadeRightVariants } from "./anime";
import Link from "next/link";

export function Hero() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <div className="flex h-fit items-center justify-center">
      <div className="flex h-fit w-full flex-col items-start gap-12 pt-28 md:items-center md:pt-20">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate={isHeaderInView ? "animate" : "initial"}
          custom={0}
          className="w-fit"
        >
          <Badge variant="outline">
            <div className="flex items-center gap-2">
              <RiAwardFill className="size-10" />
              <div className="flex max-w-72 flex-col text-wrap">
                <h2 className="font-semibold text-muted-foreground">
                  Serviço de qualidade
                </h2>
                <p className="text-sm">
                  Garantimos a melhor qualidade de serviço para você
                </p>
              </div>
            </div>
          </Badge>
        </motion.div>
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={fadeInVariants}
            initial="initial"
            animate={isHeaderInView ? "animate" : "initial"}
            ref={headerRef}
            custom={0.2}
            className="max-w-7xl font-bold text-3xl uppercase lg:text-5xl xl:text-7xl!"
          >
            Precisando de automação, Monitoramento e/ou Serviços Elétricos?
          </motion.h1>
          <div className="flex min-h-32 w-full flex-col items-start justify-between gap-8 py-4 lg:flex-row lg:pe-18">
            <motion.div
              variants={fadeInVariants}
              initial="initial"
              animate={isHeaderInView ? "animate" : "initial"}
              custom={0.4}
              className="w-96 max-w-[460px] md:w-fit"
            >
              <p className="text-lg text-muted-foreground md:text-xl">
                Solucione seus problemas com a nossa equipe de especialistas
                treinados para atender a sua necessidade.
              </p>
            </motion.div>
            <Badge variant="outline" className="border-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                      variants={fadeRightVariants}
                      initial="initial"
                      animate={isHeaderInView ? "animate" : "initial"}
                      className="relative w-fit"
                      key={index}
                      custom={index}
                    >
                      <Avatar
                        className={cn(
                          "size-8 border-3 border-background",
                          index !== 0 && "-ms-3",
                        )}
                      >
                        <AvatarImage src={faker.image.personPortrait()} />
                      </Avatar>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={fadeInVariants}
                  initial="initial"
                  animate={isHeaderInView ? "animate" : "initial"}
                  custom={0.6}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">
                      <span className="text-accent-foreground">4.9</span>/5
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <RiStarFill key={index} className="size-4" />
                      ))}
                    </div>
                  </div>
                  <p className="font-semibold text-muted-foreground text-sm">
                    Mais de 100 avaliações positivas
                  </p>
                </motion.div>
              </div>
            </Badge>
            <motion.div
              variants={fadeInVariants}
              initial="initial"
              animate={isHeaderInView ? "animate" : "initial"}
              custom={0.8}
              className="w-fit"
            >
              <Button size="lg" asChild>
                <Link target="_blank" href="https://wa.me/5519992752708">
                  <RiPhoneFill className="size-4" />
                  <p className="font-semibold text-sm uppercase">
                    Entrar em contato
                  </p>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
