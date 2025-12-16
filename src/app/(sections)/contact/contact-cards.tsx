"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { fadeInUpVariants } from "../anime";

type ContactItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  buttonText: string;
  link: string;
};

export function ContactCards({
  item,
  classes,
  index,
}: {
  item: ContactItem;
  classes: string[];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.8 });

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
          <CardTitle>
            <h2>{item.title}</h2>
          </CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex h-full items-end">
          <Button
            asChild
            className={`w-full font-bold ${classes[item.id - 1]}`}
          >
            <Link href={item.link} target="_blank">
              <item.icon /> {item.buttonText}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
