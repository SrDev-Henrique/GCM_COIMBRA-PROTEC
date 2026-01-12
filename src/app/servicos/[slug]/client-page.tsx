import { RiArrowLeftLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface useCaseProps {
  title: string;
  description: string;
  serviceImage: string;
  clientName: string;
  clientImage?: string;
  price: number;
  href: string;
  videoUrl: string;
  videoThumbnail: string;
  useCase: {
    title: string;
    contact: {
      paragraphs: string[];
    };
    problem: {
      paragraphs: string[];
    };
    service: {
      paragraphs: string[];
    };
    conclusion: {
      paragraphs: string[];
    };
  };
}

export function ClientPage(subject: useCaseProps) {
  const { useCase } = subject;

  const sessions = ["Primeiro contato", "Problema", "Serviço", "Conclusão"];
  const sessionsContent = [
    useCase.contact,
    useCase.problem,
    useCase.service,
    useCase.conclusion,
  ];
  return (
    <div className="min-h-screen w-full pt-28 md:items-center md:pt-12">
      <div className="mx-auto max-w-5xl space-y-15 px-[6vw] xl:px-12">
        <Button
          asChild
          variant="ghost"
          className="text-base text-primary hover:bg-transparent hover:text-primary/80"
        >
          <Link href="/servicos">
            <RiArrowLeftLine />
            Voltar para os serviços
          </Link>
        </Button>
        <div className="w-full space-y-32">
          <div className="space-y-6">
            <h1 className="font-bold text-2xl text-card-foreground lg:text-4xl">
              {useCase.title}
            </h1>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:aspect-video">
              <Image
                src={subject.serviceImage || ""}
                alt={subject.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          {sessions.map((session, index) => (
            <div
              key={session}
              className="flex w-full flex-center flex-col gap-4"
            >
              <p className="max-w-2xl text-center text-foreground leading-relaxed md:text-lg lg:text-2xl">
                <span className="font-bold text-sm lg:text-lg">
                  ({session})
                </span>{" "}
                {sessionsContent[index].paragraphs[0]}
              </p>
              {sessionsContent[index].paragraphs[1] && (
                <p
                  key={index.toString()}
                  className="mx-auto max-w-2xl text-center text-foreground md:text-lg lg:text-2xl"
                >
                  {sessionsContent[index].paragraphs[1]}
                </p>
              )}
            </div>
          ))}
          <div className="w-full space-y-4">
            <h2 className="font-bold text-2xl text-card-foreground lg:text-4xl">
              Resultado:
            </h2>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <video
                src={subject.videoUrl}
                controls
                className="size-full object-cover object-center"
                poster={subject.videoThumbnail}
              >
                <track kind="captions" srcLang="pt-BR" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
