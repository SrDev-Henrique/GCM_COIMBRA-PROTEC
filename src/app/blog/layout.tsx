import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <NavigationMenu />
      {children}
    </div>
  );
}
