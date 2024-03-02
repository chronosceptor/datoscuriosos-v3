export default interface Tag {
    id: number;
    attributes: {
      title: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }