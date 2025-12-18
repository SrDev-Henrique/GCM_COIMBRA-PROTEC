import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { Footer } from "../(sections)/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-screen bg-background px-4 py-28 md:px-10 md:py-20">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
}
