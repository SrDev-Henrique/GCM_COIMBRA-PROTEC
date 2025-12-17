import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactCard() {
  return (
    <Card className="mx-auto w-full max-w-lg rounded-4xl border-4 bg-background shadow-lg">
      <CardHeader>
        <CardTitle className="text-center font-bold text-4xl">
          Contato
        </CardTitle>
        <CardDescription>
          <p className="mx-auto max-w-sm text-center font-semibold text-base text-muted-foreground">
            Entre em contato conosco para solicitar um orçamento ou agendar uma
            visita técnica.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ContactForm />
        </div>
      </CardContent>
    </Card>
  );
}
