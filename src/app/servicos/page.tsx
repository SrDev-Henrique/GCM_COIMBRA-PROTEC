import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OpeningCard } from "./components/opening-card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full pt-28 md:items-center md:pt-12">
      <div className="mx-auto max-w-5xl space-y-10 px-[6vw] xl:px-12">
        <Button
          asChild
          variant="ghost"
          className="text-base text-primary hover:bg-transparent hover:text-primary/80"
        >
          <Link href="/">
            <RiArrowLeftLine />
            Voltar para a página inicial
          </Link>
        </Button>
        <div className="w-full space-y-6">
          <OpeningCard />
          <div className="space-y-4 text-sm sm:text-base md:text-lg">
            <p className="text-foreground">
              Colocamos em prática nossos serviços para garantir a melhor
              qualidade de vida para você, mas não acredite apenas em nossas
              palavras.
            </p>
            <p className="font-semibold">
              Veja alguns dos nossos serviços realizados para clientes reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
