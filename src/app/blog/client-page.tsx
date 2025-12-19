import { RiArrowRightFill, RiCalendar2Fill } from "@remixicon/react";
import { ArrowLeftIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactCardsContainer } from "../(sections)/contact/contact-cards-container";
import type { Article } from "./[subject]/client-page";
import { BlogCard } from "./components/blog-card";
import { ContactCard } from "./components/contact-card";
import { TagsBadge } from "./components/tags-badge";

export function BlogClientPage({ articles }: { articles: Article[] }) {
  const firstArticle = articles[0];
  const otherArticles = articles.slice(1);
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl space-y-20 px-4 py-28 md:px-10 md:py-20 lg:max-w-6xl",
        !isMobile && "pe-8",
      )}
    >
      <div className="mx-auto flex flex-col items-center gap-6">
        <Button
          asChild
          variant="ghost"
          className="self-start text-primary hover:bg-transparent hover:text-primary/80"
        >
          <Link href="/">
            <ArrowLeftIcon />
            Voltar para o site
          </Link>
        </Button>
        <Badge className="bg-primary/30 text-primary">
          <h1 className="font-bold text-base md:text-lgs">Blog</h1>
        </Badge>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-2 text-center">
          <p className="text-base text-muted-foreground">Bem vindo</p>
          <h2 className="font-bold text-3xl md:text-4xl">
            Um espaço para compartilhar conhecimento e insights
          </h2>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-center font-bold text-2xl text-card-foreground md:text-3xl">
          Último artigo
        </h2>
        <div className="flex w-full flex-col gap-4 rounded-3xl bg-muted p-4 lg:flex-row">
          <div className="relative w-full overflow-hidden rounded-xl lg:min-w-[450px]">
            <Image
              src={firstArticle.image}
              alt={firstArticle.title}
              width={1200}
              height={600}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4 lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {firstArticle.tags.map((tag, index) => (
                  <TagsBadge key={tag} index={index}>
                    {tag}
                  </TagsBadge>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="line-clamp-2 font-bold text-3xl text-card-foreground">
                  {firstArticle.title}
                </h1>
                <p className="line-clamp-3 text-base text-popover-foreground">
                  {firstArticle.description}
                </p>
              </div>
              <div className="flex w-full justify-between text-popover-foreground">
                <p className="flex items-center gap-2 text-xs">
                  <RiCalendar2Fill className="size-4" />{" "}
                  {firstArticle.createdAt}
                </p>
                <p className="flex items-center gap-2 text-xs">
                  <BookOpenIcon className="size-4" />{" "}
                  {firstArticle.estimatedTime}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="group mt-4 h-12 w-full rounded-xl px-5 py-2.5"
            >
              <Link href={`/blog/${firstArticle.slug}`}>
                <div className="flex h-full w-full items-center justify-between">
                  <p>Ler artigo</p>
                  <div className="relative aspect-square h-full overflow-hidden rounded-full bg-popover-foreground text-primary-foreground">
                    <RiArrowRightFill className="-rotate-45 -translate-x-[45.5%] size-4 translate-y-[125%] transition-all duration-300 group-hover:translate-x-1/3 group-hover:translate-y-1/3" />
                    <RiArrowRightFill className="-translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover:-translate-y-150 absolute top-1/2 left-1/2 size-4 transition-all duration-300 group-hover:translate-x-150" />
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-center font-bold text-2xl text-card-foreground md:text-3xl">
          Mais artigos
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {otherArticles.map((article) => (
            <BlogCard key={article.slug} {...article} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ContactCard />
      </div>
      <p className="text-center text-muted-foreground text-xl">ou</p>
      <div className="mx-auto mt-10 max-w-lg px-4 lg:max-w-7xl">
        <ContactCardsContainer />
      </div>
    </div>
  );
}
