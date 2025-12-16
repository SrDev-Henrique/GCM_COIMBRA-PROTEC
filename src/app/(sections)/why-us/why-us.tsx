import { ItemGroup } from "@/components/ui/item";
import { whyUs } from "./data";
import { WhyUsItems } from "./why-us-items";

export function WhyUs() {
  return (
    <div className="mt-16 flex h-fit w-full flex-col items-center justify-start gap-12 md:mt-32">
      <div className="relative flex w-full items-start justify-between">
        <div className="flex w-fit flex-col">
          <p className="text-muted-foreground text-sm">Por que escolher</p>
          <h2 className="font-bold uppercase md:text-3xl">Nós</h2>
        </div>
        <div className="w-fit max-w-56 md:max-w-96">
          <p className="text-muted-foreground text-xs md:text-base">
            Serviços de qualidade realizados da forma certa - sempre.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <ItemGroup className="w-full">
          {whyUs.map((item, index) => (
            <WhyUsItems key={item.id} item={item} index={index} />
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
