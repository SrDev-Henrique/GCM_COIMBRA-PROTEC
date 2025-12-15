"use client";

import { EllipsisIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { navVariants } from "./anime";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={navVariants}
      initial="initial"
      animate={isOpen ? "animate" : "initial"}
      className={cn(
        "-translate-x-1/2 fixed top-2 left-1/2 z-50 flex w-[385px] items-start justify-center bg-accent-foreground p-3 shadow-lg backdrop-blur-md backdrop-brightness-75",
        isMobile && "w-[360px]",
      )}
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <Image
            src="/images/setting.png"
            alt="Logo"
            width={isMobile ? 24 : 32}
            height={isMobile ? 24 : 32}
          />
          <h2 className="text-nowrap font-bold text-background text-lg">
            COIMBRA PROTEC
          </h2>
        </div>
        <div>
          <Button onClick={() => setIsOpen(!isOpen)} size="sm">
            <p className="font-semibold text-xs uppercase">Menu</p>
            <EllipsisIcon className="size-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
