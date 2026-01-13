"use client";

import { RiCloseLine, RiPhoneFill } from "@remixicon/react";
import { motion } from "motion/react";
import { useState } from "react";
import { navigationContacts } from "@/lib/contact-data";
import { cn } from "@/lib/utils";
import { ContactLinks } from "../navigation-menu/components/contact-links";
import { Button } from "../ui/button";
import { fixedContactButtonVariants } from "./anime";

export function FixedContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      variants={fixedContactButtonVariants}
      initial="initial"
      animate={isOpen ? "animate" : "initial"}
      className="fixed right-4 bottom-4 h-[70px] w-[70px] flex-center overflow-hidden rounded-full bg-foreground"
      onClick={() => {
        if (isOpen) return;
        setIsOpen(true);
      }}
    >
      <Button
        variant="ghost"
        className={cn(
          "size-full cursor-pointer opacity-100 transition-opacity duration-300 hover:bg-foreground hover:text-primary-foreground",
          isOpen && "opacity-0",
        )}
      >
        <RiPhoneFill className="size-6 text-primary-foreground sm:size-7" />
      </Button>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-start bg-foreground px-4 pt-3 opacity-0 transition-opacity duration-300",
          isOpen && "pointer-events-auto opacity-100",
        )}
      >
        <div className="w-full space-y-3">
          <div className="flex w-full justify-center">
            <Button
              className="size-7 cursor-pointer bg-chart-4 hover:bg-chart-4/80"
              onClick={() => {
                if (!isOpen) return;
                setIsOpen(false);
              }}
            >
              <RiCloseLine />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {navigationContacts.map((item, index) => {
              return <ContactLinks key={item.id} {...item} index={index} sm />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
