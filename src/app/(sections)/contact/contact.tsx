import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contact } from "./data";

const classes = [
  "bg-chart-3 hover:bg-chart-3/80",
  "bg-chart-4 hover:bg-chart-4/80",
  "bg-chart-2 hover:bg-chart-2/80",
];

export function Contact() {
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:mt-32 md:gap-32">
      <div className="w-full text-center">
        <p className="mx-auto max-w-[500px] font-bold text-lg text-muted-foreground md:text-2xl">
          Serviço de manutenção, automação, monitoramento e serviços elétricos
          para campinas, valinhos, vinhedo e região.
        </p>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {contact.map((item) => (
            <Card
              key={item.id}
              className="w-full border-border/40 bg-background"
            >
              <CardHeader>
                <CardTitle>
                  <h2>{item.title}</h2>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full items-end">
                <Button
                  asChild
                  className={`w-full font-bold ${classes[item.id - 1]}`}
                >
                  <Link href={item.link} target="_blank">
                    <item.icon /> {item.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
