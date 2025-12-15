import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";
import { whyUs } from "./data";

export function WhyUs() {
  return (
    <div className="mt-16 flex min-h-screen w-full flex-col items-center justify-start gap-12 md:gap-8">
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
            <div key={item.id}>
              <Item
                className={cn(index !== whyUs.length - 1 && "pb-6", "px-0")}
              >
                <ItemMedia className="text-3xl">{item.id}</ItemMedia>
                <ItemContent className="flex flex-col justify-between gap-1 xl:flex-row">
                  <ItemTitle className="font-bold text-3xl">
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="w-full font-bold xl:max-w-[500px]">
                    {item.description}
                  </ItemDescription>
                </ItemContent>
              </Item>
              {index !== whyUs.length - 1 && <ItemSeparator />}
            </div>
          ))}
        </ItemGroup>
      </div>
    </div>
  );
}
