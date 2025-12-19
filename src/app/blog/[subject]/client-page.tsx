"use client";

import {
  PortableText,
  type PortableTextBlock,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { RiArrowLeftFill } from "@remixicon/react";
import { Clock10Icon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ContactCardsContainer } from "@/app/(sections)/contact/contact-cards-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogCard } from "../components/blog-card";
import { ContactCard } from "../components/contact-card";
import { TagsBadge } from "../components/tags-badge";

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  createdAt: string;
  estimatedTime: string;
  article: PortableTextBlock[];
};

type StructuredData = {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
};

const PortableComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 font-semibold text-2xl text-card-foreground md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 font-semibold text-card-foreground text-xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-base text-sidebar-foreground leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-inside list-disc text-popover-foreground marker:text-[oklch(0.6863_0.2095_40.3789)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
  },
};

export function ClientPage({
  article,
  structuredData,
  subject,
  articles,
}: {
  article: Article;
  structuredData: StructuredData;
  subject: string;
  articles: Article[];
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scrollbar-gutter-stable both-edges w-full px-4 py-28 md:px-10 md:py-20">
      <div className="mx-auto max-w-xl space-y-10 px-4 lg:max-w-2xl">
        <div className="flex w-full items-center justify-between gap-2">
          <Button
            asChild
            variant="ghost"
            className="text-base text-primary hover:bg-transparent hover:text-primary/80"
          >
            <Link href="/blog">
              <RiArrowLeftFill className="size-4" />
              Voltar para o blog
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={600}
              className="size-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-2">
            {article.tags.map((tag, index) => (
              <TagsBadge key={tag} index={index}>
                {tag}
              </TagsBadge>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-3xl text-card-foreground lg:text-4xl">
              {article.title}
            </h1>
            <p className="text-base text-popover-foreground lg:text-lg">
              {article.description}
            </p>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/srdev-henrique.png" />
                  <AvatarFallback>HA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium text-card-foreground text-sm">
                    Henrique Albuquerque
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {article.createdAt}
                  </p>
                </div>
              </div>
              <p className="flex items-center gap-2 text-popover-foreground text-sm">
                <Clock10Icon className="size-4" />{" "}
                <span className="hidden sm:block">
                  Tempo de leitura estimado:
                </span>
                {article.estimatedTime}
              </p>
            </div>
          </div>
        </div>
        <article className="prose prose-lg prose-slate">
          <PortableText
            value={article.article as PortableTextBlock[]}
            components={PortableComponents}
          />
        </article>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <Separator />
        <div className="mt-10">
          <ContactCard />
        </div>
        <p className="text-center text-muted-foreground text-xl">ou</p>
      </div>
      <div className="mx-auto mt-10 max-w-lg px-4 lg:max-w-7xl">
        <ContactCardsContainer />
      </div>
      <div className="mx-auto mt-10 flex max-w-lg flex-col gap-5 px-4 lg:max-w-7xl">
        <Button
          asChild
          variant="ghost"
          className="self-start text-base text-primary hover:bg-transparent hover:text-primary/80"
        >
          <Link href="/blog">
            <RiArrowLeftFill className="size-4" />
            Voltar para o blog
          </Link>
        </Button>
        <div className="flex w-full items-center justify-between gap-4">
          <h2 className="font-bold text-2xl text-card-foreground">
            Mais artigos
          </h2>
          <div className="flex h-fit gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <PlusIcon key={index.toString()} className="size-3" />
            ))}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {articles
            .filter((article) => article.slug !== subject)
            .map((article) => (
              <BlogCard key={article.slug} {...article} />
            ))}
        </div>
      </div>
    </div>
  );
}
