import { RiArrowLeftLine, RiMailFill, RiPhoneFill } from "@remixicon/react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrcamentoForm } from "./components/orcamento-form";

export const metadata: Metadata = {
  title: "Solicitar orçamento | COIMBRA PROTEC",
  description:
    "Peça um orçamento para portões automáticos, cercas elétricas, alarmes e CFTV em Campinas, Valinhos e Vinhedo. Atendimento rápido e especializado.",
  alternates: {
    canonical: "/orcamento",
  },
  keywords: [
    "orçamento portão automático",
    "cercas elétricas orçamento",
    "instalação alarmes",
    "cftv orçamento",
    "campinas segurança",
  ],
};

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen w-full pt-28 md:items-center md:pt-12">
      <div className="mx-auto max-w-3xl space-y-10 px-[6vw] xl:px-12">
        <Button asChild>
          <Link href="/">
            <RiArrowLeftLine className="size-4" />
            Voltar para a página inicial
          </Link>
        </Button>
        <div className="space-y-10">
          <h1 className="text-center font-bold text-2xl uppercase sm:text-left md:text-4xl">
            Solicitar orçamento
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg border border-border bg-card p-2">
                <RiPhoneFill className="text-foreground" />
              </div>
              <p className="font-medium text-sidebar-foreground text-sm">
                WhatsApp: (19) 99275-2708
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg border border-border bg-card p-2">
                <RiMailFill className="text-foreground" />
              </div>
              <p className="font-medium text-sidebar-foreground text-sm">
                Email: contato@coimbraprotec.com.br
              </p>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-2xl">
              Preencha os campos abaixo para solicitar um orçamento.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <OrcamentoForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
