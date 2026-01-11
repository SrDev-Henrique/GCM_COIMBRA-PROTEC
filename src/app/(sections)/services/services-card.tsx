"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { fadeInUpVariants } from "../anime";

export function ServicesCard({
  title,
  description,
  Icon,
  index,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      custom={isMobile ? 0 : index * 0.1}
      className="size-full"
      ref={cardRef}
    >
      <Card className="size-full border-border/40 bg-background">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Icon />
            <h2>{title}</h2>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
