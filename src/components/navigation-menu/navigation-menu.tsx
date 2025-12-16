"use client";

import { EllipsisIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { fadeInVariants } from "@/app/(sections)/anime";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { navVariants } from "./anime";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();

  const containerRef = useRef<HTMLDivElement>(null);

  const closeTabs = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeTabs();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeTabs, isOpen]);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate={isOpen ? "animate" : "initial"}
      ref={containerRef}
      className={cn(
        "-translate-x-1/2 fixed bottom-2 left-1/2 z-50 flex w-[385px] items-end justify-center bg-accent-foreground p-3 shadow-lg backdrop-blur-md backdrop-brightness-75",
        isMobile && "w-[360px]",
      )}
    >
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        custom={0.4}
        className="flex items-center gap-12"
      >
        <Link href="/">
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
        </Link>
        <div>
          <Button onClick={() => setIsOpen(!isOpen)} size="sm">
            <p className="font-semibold text-xs uppercase">Menu</p>
            <EllipsisIcon className="size-4" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
