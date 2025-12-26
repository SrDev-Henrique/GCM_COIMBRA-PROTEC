"use client";

import { EllipsisIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { fadeInVariants } from "@/app/(sections)/anime";
import { useIsMobile } from "@/hooks/use-mobile";
import { navigationContacts } from "@/lib/contact-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { navVariants } from "./anime";
import { ContactLinks } from "./components/contact-links";

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
        "-translate-x-1/2 fixed bottom-2 left-1/2 z-50 flex w-[385px] bg-card/40 p-3 shadow-lg backdrop-blur-md backdrop-brightness-98 transition-colors duration-300",
        isMobile && "top-2 w-[360px]",
        isOpen && "bg-accent-foreground",
      )}
    >
      <div className="relative flex size-full items-start justify-center md:items-end">
        <div
          className={cn(
            "scrollbar-hide pointer-events-none absolute inset-0 top-12 overflow-y-auto px-3 py-5 md:bottom-12",
            isOpen && "pointer-events-auto",
          )}
        >
          <div className="size-full h-fit min-h-[350px] space-y-4">
            <div className="flex w-full xs:flex-row flex-col items-center justify-between gap-4">
              {navigationContacts.map((item, index) => {
                return <ContactLinks key={item.id} {...item} index={index} />;
              })}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4"></div>
          </div>
        </div>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          custom={0.4}
          className={cn(
            "flex w-full max-w-lg items-center justify-between gap-12 transition-all duration-400",
            isOpen && "px-3",
          )}
        >
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/images/setting.png"
                alt="Logo"
                width={isMobile ? 24 : 32}
                height={isMobile ? 24 : 32}
              />
              <h2
                className={cn(
                  "text-nowrap font-bold text-accent-foreground text-lg transition-colors duration-300",
                  isOpen && "text-background",
                )}
              >
                COIMBRA PROTEC
              </h2>
            </div>
          </Link>
          <div>
            <Button onClick={() => setIsOpen(!isOpen)} size="sm">
              <p className="font-semibold text-xs uppercase">Menu</p>
              {isOpen ? (
                <XIcon className="size-4" />
              ) : (
                <EllipsisIcon className="size-4" />
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
