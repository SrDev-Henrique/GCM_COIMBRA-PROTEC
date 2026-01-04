import { Contact } from "./(sections)/contact/contact";
import { Customers } from "./(sections)/customers/customers";
import { Faq } from "./(sections)/faq/faq";
import { Hero } from "./(sections)/hero";
import { Services } from "./(sections)/services/services";
import { WhyUs } from "./(sections)/why-us/why-us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-[6vw] xl:px-12">
        <Hero />
        <Services />
        <Contact />
        <WhyUs />
        <Customers />
        <Faq />
      </div>
    </main>
  );
}
