export function useContent(pageName: string) {
  return useFetch(`/api/content?pageName=${pageName}`, {
    key: `content-${pageName}`,
    default: () => ({ posts: [] }),
    server: true,
    onResponseError({ error }) {
      console.error('Erro ao buscar posts do blog:', error);
    }
  });
}