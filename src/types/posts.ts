import { ContentBlock } from "./content";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  authorId: number;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
  stats: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
  featuredImage: {
    url: string;
    alt: string;
    credit?: string;
  };
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  content: ContentBlock[];
};

export type BlogData = {
  blog: {
    id: number;
    slug: string;
    name: string;
    description: string;
    category: string;
    featured: boolean;
    color: string;
    icon: string;
    coverImage: string;
  };
  posts: BlogPost[];
  subcategories: {
    id: number;
    slug: string;
    name: string;
    description: string;
    postCount: number;
  }[];
};

export type BlogPostWithBlogInfo = BlogPost & {
  blogSlug: string;
  blogName: string;
  blogColor: string;
  blogIcon: string;
};

export type BlogIndex = {
  blogs: {
    id: number;
    slug: string;
    name: string;
    description: string;
    category: string;
    postCount: number;
    featured: boolean;
    color: string;
    icon: string;
    latestPost: {
      slug: string;
      title: string;
      publishedAt: string;
    };
  }[];
};
