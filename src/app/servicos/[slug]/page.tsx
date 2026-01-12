import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { NotFound } from "../components/not-found";
import { clientServices } from "../lib/data";
import { ClientPage } from "./client-page";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const subject = await params;

  const useCase = clientServices.find(
    (service) => service.href === `/servicos/${subject.slug}`,
  );

  if (!useCase)
    return (
      <div>
        <NotFound serviceName={subject.slug} />
      </div>
    );
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex-center flex-col gap-4">
          <p className="md:text-lg">Carregando caso de uso...</p>
          <Spinner className="md:size-6" />
        </div>
      }
    >
      <ClientPage {...useCase} />
    </Suspense>
  );
}
