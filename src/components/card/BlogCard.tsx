import Link from "next/link";
import { Calendar, Clock, Eye } from "lucide-react";
import { BlogPostWithBlogInfo, BlogCardProps } from "../../types/blog";
import Image from "next/image";

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article className="group border border-(--border) rounded-xl overflow-hidden hover:border-(--accent) transition-all duration-300 hover:shadow-lg bg-(--bg-primary)">
      <Link href={`/blogs/${post.blogSlug}/${post.slug}`}>
        {/* Featured Image - ACTUAL IMAGE */}
        <div className="h-48 relative overflow-hidden bg-(--bg-secondary)">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Blog Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: post.blogColor }}
            >
              {post.blogName}
            </span>
          </div>

          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-white/90 rounded text-xs font-medium text-gray-700">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-(--text-primary) mb-3 group-hover:text-(--accent) transition-colors line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-(--text-secondary) mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-(--text-secondary) text-sm mb-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-(--text-secondary) text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye size={12} />
                <span>{post.stats.views} views</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>❤️</span>
                <span>{post.stats.likes} likes</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-(--bg-secondary) border border-(--border) text-(--text-secondary) rounded text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-(--text-secondary) rounded text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
