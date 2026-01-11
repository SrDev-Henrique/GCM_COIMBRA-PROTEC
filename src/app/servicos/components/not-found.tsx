import { RiArrowLeftLine } from "@remixicon/react";
import { BuildingIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function NotFound() {
  return (
    <div className="min-h-screen w-full flex-center pt-28 md:items-center md:pt-0">
      <div className="mx-auto max-w-7xl space-y-4 px-[6vw] xl:px-12">
        <h1 className="text-center font-bold text-2xl">Serviços</h1>
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia>
              <BuildingIcon />
            </EmptyMedia>
            <EmptyTitle>Em breve</EmptyTitle>
            <EmptyDescription>
              Em breve, você poderá conferir aqui todos os serviços que foram
              concluídos.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button asChild>
              <Link href="/">
                <RiArrowLeftLine />
                Voltar para a página inicial
              </Link>
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  );
}
