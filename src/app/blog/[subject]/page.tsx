import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { ClientPage } from "./client-page";
import { getArticleBySlug, getArticles } from "./use-get-article";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: { subject: string };
}): Promise<Metadata> {
  const { subject } = await params;
  const article = await getArticleBySlug(subject);

  if (!article) {
    const title = "Artigo não encontrado | Blog";
    return {
      title,
      description: "O conteúdo solicitado não foi encontrado.",
      alternates: { canonical: `/blog/${subject}` },
    };
  }

  const imageUrl = new URL(article.image, siteUrl).href;
  const url = new URL(`/blog/${subject}`, siteUrl).href;

  return {
    title: `${article.title} | Blog GCM`,
    description: article.description,
    alternates: { canonical: `/blog/${subject}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { subject: string };
}) {
  const { subject } = await params;

  const article = await getArticleBySlug(subject);
  const articles = await getArticles();

  if (!article) return notFound();

  const articleUrl = new URL(`/blog/${subject}`, siteUrl).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: new URL(article.image, siteUrl).href,
    url: articleUrl,
    datePublished: article.createdAt,
    author: {
      "@type": "Person",
      name: "Henrique Albuquerque",
      url: "https://github.com/srdev-henrique",
    },
    keywords: article.tags?.join(", "),
    timeRequired: article.estimatedTime,
  };
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex-center flex-col gap-4">
          <p>Carregando post...</p>
          <Spinner />
        </div>
      }
    >
      <ClientPage
        article={article}
        structuredData={structuredData}
        subject={subject}
        articles={articles}
      />
    </Suspense>
  );
}
