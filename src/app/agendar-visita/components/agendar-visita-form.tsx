"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiAddCircleLine,
  RiMapPin2Line,
  RiMapPin3Line,
  RiMapPin4Line,
  RiMapPinLine,
  RiNumbersLine,
  RiRoadMapLine,
  RiUserLine,
} from "@remixicon/react";
import { PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import DateTimePicker from "@/components/date-time-picker";
import ImageUploader from "@/components/image-uploader";
import InputWithIcon from "@/components/input-with-icon";
import { Toaster } from "@/components/toaster";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { formatPhone, getPhoneDigits } from "@/lib/phone";

const formSchema = z.object({
  name: z.string().refine((value) => value.split(" ").length > 1, {
    message: "Deve conter nome e sobrenome",
  }),
  phone: z.number().min(1, { message: "Telefone é obrigatório" }),
  service: z.string().min(1, { message: "Serviço é obrigatório" }),
  street: z.string().min(1, { message: "Rua é obrigatória" }),
  number: z.string().min(1, { message: "Número é obrigatório" }),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, { message: "Bairro é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  state: z.string().min(1, { message: "Estado é obrigatório" }),
  zipCode: z.string().min(1, { message: "CEP é obrigatório" }),
  dateAndTime: z.date(),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
  images: z.array(z.instanceof(File)).optional(),
});

export function AgendarVisitaForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      service: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
      dateAndTime: undefined,
      message: "",
      images: [],
    },
  });

  const zipCodeValue = form.watch("zipCode");

  useEffect(() => {
    const digits = (zipCodeValue ?? "").replace(/\D/g, "");
    if (digits.length !== 8) {
      return;
    }

    const controller = new AbortController();

    const fetchAddress = async () => {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${digits}/json/`,
          { signal: controller.signal },
        );
        if (!response.ok) return;
        const data = await response.json();
        if (data?.erro) return;

        form.setValue("street", data.logradouro ?? "", {
          shouldValidate: true,
        });
        form.setValue("neighborhood", data.bairro ?? "", {
          shouldValidate: true,
        });
        form.setValue("city", data.localidade ?? "", { shouldValidate: true });
        form.setValue("state", data.uf ?? "", { shouldValidate: true });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
      }
    };

    fetchAddress();

    return () => controller.abort();
  }, [form, zipCodeValue]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      toast.custom((t) => (
        <Toaster
          message="Visita agendada com sucesso, em até 2 horas entraremos em contato."
          onClick={() => toast.dismiss(t)}
        />
      ));
      setIsLoading(false);
      form.reset();
    }, 1000);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Dados do solicitante</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiUserLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Nome Completo"
                      placeholder="Nome"
                      type="text"
                      required
                    />
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
                    <div className="*:not-first:mt-2">
                      <FormLabel
                        htmlFor={field.name}
                        className="flex items-center gap-1"
                      >
                        Telefone <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="relative">
                        <Input
                          className="peer ps-9"
                          inputMode="tel"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={
                            field.value === undefined
                              ? ""
                              : formatPhone(field.value)
                          }
                          name={field.name}
                          onBlur={field.onBlur}
                          ref={field.ref}
                          onChange={(event) => {
                            const digits = getPhoneDigits(
                              event.target.value,
                            ).slice(0, 11);
                            field.onChange(
                              digits === "" ? undefined : Number(digits),
                            );
                          }}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                          <PhoneIcon className="size-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Endereço</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-4">
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMapPinLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="CEP"
                      placeholder="00000-000"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMapPin4Line className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Estado (UF)"
                      placeholder="SP"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiRoadMapLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Rua"
                      placeholder="Rua"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiNumbersLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Número"
                      placeholder="Número"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiAddCircleLine className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Complemento"
                      placeholder="Apartamento, bloco, referência..."
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      Icon={
                        <RiMapPin2Line className="size-4 text-muted-foreground" />
                      }
                      field={field}
                      label="Bairro"
                      placeholder="Bairro"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcon
                    Icon={
                      <RiMapPin3Line className="size-4 text-muted-foreground" />
                    }
                    field={field}
                    label="Cidade"
                    placeholder="Cidade"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="font-bold text-xl">Dados do Serviço</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-4">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor={field.name}
                    className="flex items-center gap-1"
                  >
                    Serviço <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
                        <SelectItem value="1">
                          Automatização de portões elétricos
                        </SelectItem>
                        <SelectItem value="2">cercas elétricas</SelectItem>
                        <SelectItem value="3">Alarmes</SelectItem>
                        <SelectItem value="4">concertinas</SelectItem>
                        <SelectItem value="5">Câmeras (CFTV / IP)</SelectItem>
                        <SelectItem value="6">Reparos elétricos</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateAndTime"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DateTimePicker
                      field={field}
                      label="Data e hora para a visita"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>
                  Carregue imagens (opcional)
                </FormLabel>
                <FormControl>
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                  />
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
                <FormLabel
                  htmlFor={field.name}
                  className="flex items-center gap-1"
                >
                  Descreva a sua solicitação
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Mensagem" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-3xl py-7 font-semibold uppercase"
        >
          {isLoading ? <Spinner /> : "Agendar visita"}
        </Button>
      </form>
    </Form>
  );
}
