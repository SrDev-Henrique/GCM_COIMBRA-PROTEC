"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { fadeInVariants } from "../anime";

export function FaqAccordionItem({
  question,
  answer,
  id,
  index,
}: {
  question: string;
  answer: string;
  id: number;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });
  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      custom={isMobile ? 0 : index * 0.1}
      ref={itemRef}
    >
      <AccordionItem value={id.toString()}>
        <AccordionTrigger className="font-semibold hover:cursor-pointer hover:no-underline md:text-base lg:text-lg">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm lg:text-base">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
