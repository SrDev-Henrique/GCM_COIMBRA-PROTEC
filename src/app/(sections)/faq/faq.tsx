import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";

export function Faq() {
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:gap-8">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-fit flex-col">
          <p className="text-muted-foreground text-sm">Perguntas frequentes</p>
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
        {faqs.map((item) => (
          <AccordionItem key={item.id} value={item.id.toString()}>
            <AccordionTrigger className="font-semibold hover:cursor-pointer hover:no-underline md:text-base lg:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm lg:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
