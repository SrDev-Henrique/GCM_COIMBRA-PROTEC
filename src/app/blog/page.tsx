import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { getArticles } from "./[subject]/use-get-article";
import { BlogClientPage } from "./client-page";

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <div className="min-h-screen w-full px-4">
      <Suspense
        fallback={
          <div className="h-screen w-full flex-center flex-col gap-4">
            <p>Carregando post...</p>
            <Spinner />
          </div>
        }
      >
        <BlogClientPage articles={articles} />
      </Suspense>
    </div>
  );
}
