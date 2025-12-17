import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { Footer } from "../(sections)/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-screen">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
}
