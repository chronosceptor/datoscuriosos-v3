export default interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    subtitle: string;
    image: string;
    excerpt: string;
    sidebar: string;
    support: string;
    tags: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}