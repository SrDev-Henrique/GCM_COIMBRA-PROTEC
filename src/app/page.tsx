import { Contact } from "./(sections)/contact/contact";
import { Hero } from "./(sections)/hero";
import { Services } from "./(sections)/services/services";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-[6vw] xl:px-12">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
