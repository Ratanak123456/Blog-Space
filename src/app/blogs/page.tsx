"use client";

import { Search } from "lucide-react";
import { useState } from "react";

// Import components
import BlogHeader from "../../components/header/BlogHeader";
import BlogCard from "../../components/card/BlogCard";

// Import types
import { BlogPostWithBlogInfo } from "../../types/blog";

// Import all blog data
import technologyBlog from "../../data/blogs/technology-blog.json";
import designBlog from "../../data/blogs/entertainment-blog.json";
import climateBlog from "../../data/blogs/climate-blog.json";
import lifestyleBlog from "../../data/blogs/lifestyle-blog.json";



export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Combine all posts from all blogs directly here
  const allPosts: BlogPostWithBlogInfo[] = [
    ...technologyBlog.posts.map((post) => ({
      ...post,
      stats: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        views: (post.stats as any)?.views ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        likes: (post.stats as any)?.likes ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments: (post.stats as any)?.comments ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        shares: (post.stats as any)?.shares ?? 0,
      },
      blogSlug: technologyBlog.blog.slug,
      blogName: technologyBlog.blog.name,
      blogColor: technologyBlog.blog.color,
      blogIcon: technologyBlog.blog.icon,
    })),
    ...designBlog.posts.map((post) => ({
      ...post,
      stats: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        views: (post.stats as any)?.views ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        likes: (post.stats as any)?.likes ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments: (post.stats as any)?.comments ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        shares: (post.stats as any)?.shares ?? 0,
      },
      blogSlug: designBlog.blog.slug,
      blogName: designBlog.blog.name,
      blogColor: designBlog.blog.color,
      blogIcon: designBlog.blog.icon,
    })),
    ...climateBlog.posts.map((post) => ({
      ...post,
      stats: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        views: (post.stats as any)?.views ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        likes: (post.stats as any)?.likes ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments: (post.stats as any)?.comments ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        shares: (post.stats as any)?.shares ?? 0,
      },
      blogSlug: climateBlog.blog.slug,
      blogName: climateBlog.blog.name,
      blogColor: climateBlog.blog.color,
      blogIcon: climateBlog.blog.icon,
    })),
    ...lifestyleBlog.posts.map((post) => ({
      ...post,
      stats: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        views: (post.stats as any)?.views ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        likes: (post.stats as any)?.likes ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments: (post.stats as any)?.comments ?? 0,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        shares: (post.stats as any)?.shares ?? 0,
      },
      blogSlug: lifestyleBlog.blog.slug,
      blogName: lifestyleBlog.blog.name,
      blogColor: lifestyleBlog.blog.color,
      blogIcon: lifestyleBlog.blog.icon,
    })),
  ].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Filter posts based on search and category
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || post.blogSlug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-(--bg-primary)">
      <BlogHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="container px-4 mx-auto py-8">
        {/* Header Component */}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-(--text-secondary)">
            {filteredPosts.length === allPosts.length
              ? `Showing all ${filteredPosts.length} articles`
              : `Showing ${filteredPosts.length} of ${allPosts.length} articles`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <BlogCard key={`${post.blogSlug}-${post.id}`} post={post} />
          ))}
        </section>

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-(--bg-secondary) rounded-full flex items-center justify-center">
              <Search size={32} className="text-(--text-secondary)" />
            </div>
            <h3 className="text-xl font-semibold text-(--text-primary) mb-2">
              No articles found
            </h3>
            <p className="text-(--text-secondary) mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2 bg-(--accent) text-white rounded-md hover:bg-(--accent-hover) transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
