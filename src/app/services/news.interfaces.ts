export interface NewsResponse {
  status: string | null;
  totalResults: number | null;
  articles: Article[] | null;
}

export interface Article {
  source: {
    id: number | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: Date | null;
  content: string | null;
}
