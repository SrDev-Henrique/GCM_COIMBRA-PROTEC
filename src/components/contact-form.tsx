"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formatPhone, getPhoneDigits } from "@/lib/phone";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RiAtLine, RiUserLine } from "@remixicon/react";
import { PhoneIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.email({ message: "Email é obrigatório" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center rounded-xl border border-input bg-muted-foreground/3 px-4 py-2 shadow-sm">
                  <RiUserLine className="size-4 text-muted-foreground" />
                  <Input
                    {...field}
                    placeholder="Nome"
                    className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center rounded-xl border border-input bg-muted-foreground/3 px-4 py-2 shadow-sm">
                  <RiAtLine className="size-4 text-muted-foreground" />
                  <Input
                    {...field}
                    placeholder="Email"
                    type="email"
                    className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center rounded-xl border border-input bg-muted-foreground/3 px-4 py-2 shadow-sm">
                  <PhoneIcon className="size-4 text-muted-foreground" />
                  <Input
                    inputMode="tel"
                    type="tel"
                    placeholder="Telefone"
                    value={
                      field.value === undefined ? "" : formatPhone(field.value)
                    }
                    onChange={(event) => {
                      const digits = getPhoneDigits(event.target.value).slice(
                        0,
                        11,
                      );
                      field.onChange(
                        digits === "" ? undefined : Number(digits),
                      );
                    }}
                    className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Mensagem"
                  className="bg-muted-foreground/3 shadow-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mx-auto w-full max-w-lg rounded-3xl py-7 font-semibold uppercase"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
