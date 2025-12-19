"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeInUpVariants } from "../anime";
import { ContactCardsContainer } from "./contact-cards-container";

export function Contact() {
  const introRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(introRef, { once: true, amount: 0.5 });
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:mt-32 md:gap-32">
      <motion.div
        variants={fadeInUpVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        custom={0}
        ref={introRef}
        className="w-full text-center"
      >
        <p className="mx-auto max-w-[500px] font-bold text-lg text-muted-foreground md:text-2xl">
          Serviço de manutenção, automação, monitoramento e serviços elétricos
          para Campinas, Valinhos, Vinhedo e região.
        </p>
      </motion.div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ContactCardsContainer />
      </div>
    </div>
  );
}
