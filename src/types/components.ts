import { BlogPostWithBlogInfo } from "./posts";

// BlogCard Component Props
export type BlogCardProps = {
  post: BlogPostWithBlogInfo;
};

// TopStoryCard Component Props
export type TopStoryCardProps = {
  image: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
};

// SubStoryCard Component Props
export type SubStoryCardProps = {
  id: number;
  slug: string;
  blogSlug: string;
  image: string;
  title: string;
  category: string;
  author: string;
};

// RelatedPostCard Component Props
export type RelatedPostCardProps = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  blogSlug: string;
  blogColor: string;
};
