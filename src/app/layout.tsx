import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { FixedContactButton } from "@/components/fixed-contact-button/fixed-contact-button";
import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { Footer } from "./(sections)/footer/footer";

export const metadata: Metadata = {
  title: "COIMBRA PROTEC",
  description:
    "Serviços de segurança, manutenção e alarmes em Campinas, valinhos, vinhedo e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="relative flex min-h-screen w-full flex-col">
          <NavigationMenu />
          {children}
          <Footer />
          <Toaster position="top-center" />
          <FixedContactButton />
        </div>
      </body>
    </html>
  );
}
