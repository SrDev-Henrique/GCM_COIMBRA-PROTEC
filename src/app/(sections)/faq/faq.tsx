import Script from "next/script";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "./data";
import { FaqAccordionItem } from "./faq-accordion-item";

export function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:gap-8">
        <div className="flex w-full items-start justify-between">
          <div className="flex w-fit flex-col">
            <p className="text-muted-foreground text-sm">
              Perguntas frequentes
            </p>
            <h2 className="font-bold uppercase md:text-2xl">FAQ</h2>
          </div>
          <div className="w-fit max-w-56 md:max-w-96">
            <p className="text-muted-foreground text-xs md:text-sm">
              Perguntas frequentes sobre nossos serviços.
            </p>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
        >
          {faqs.map((item, index) => (
            <FaqAccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              id={item.id}
              index={index}
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
