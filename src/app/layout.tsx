import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";

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
        </div>
      </body>
    </html>
  );
}
