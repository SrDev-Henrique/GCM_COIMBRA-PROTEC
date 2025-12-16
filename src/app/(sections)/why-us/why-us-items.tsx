"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { fadeInVariants } from "../anime";
import { whyUs } from "./data";

type WhyUsItem = {
  id: number;
  title: string;
  description: string;
};

export function WhyUsItems({
  item,
  index,
}: {
  item: WhyUsItem;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
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
      <Item className={cn(index !== whyUs.length - 1 && "pb-6", "px-0")}>
        <ItemMedia className="text-3xl">{item.id}</ItemMedia>
        <ItemContent className="flex flex-col justify-between gap-1 xl:flex-row">
          <ItemTitle className="font-bold text-3xl">{item.title}</ItemTitle>
          <ItemDescription className="w-full font-bold xl:max-w-[500px]">
            {item.description}
          </ItemDescription>
        </ItemContent>
      </Item>
      {index !== whyUs.length - 1 && <ItemSeparator />}
    </motion.div>
  );
}
