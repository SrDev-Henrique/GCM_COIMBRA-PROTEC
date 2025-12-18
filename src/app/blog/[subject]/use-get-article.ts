const articleMap = {
  "portoes-eletricos": () => import("../blog-posts/portoes-eletricos"),
  "cercas-eletricas": () => import("../blog-posts/cercas-eletricas"),
  alarmes: () => import("../blog-posts/alarmes"),
};

export async function getArticleBySlug(slug: string) {
  const loader = articleMap[slug as keyof typeof articleMap];
  if (!loader) return null;

  const module = await loader();
  return module.default;
}

export async function getArticles() {
  return Promise.all(
    Object.values(articleMap).map(async (loader) => {
      const module = await loader();
      return module.default;
    }),
  );
}
