import Link from "next/link";
import { RelatedPostCardProps } from "@/types/blog";

export default function RelatedPostCard({
  id,
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  blogSlug,
  blogColor,
}: RelatedPostCardProps) {
  return (
    <Link
      key={id}
      href={`/blogs/${blogSlug}/${slug}`}
      className="block border border-(--border) rounded-lg overflow-hidden hover:border-(--accent) transition-colors group bg-(--bg-primary)"
    >
      <div className="p-6">
        <span
          className="inline-block px-2 py-1 rounded text-xs font-medium mb-3 text-white"
          style={{ backgroundColor: blogColor }}
        >
          {category}
        </span>
        <h3 className="font-semibold text-(--text-primary) mb-2 group-hover:text-(--accent) transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-(--text-secondary) text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-(--text-secondary) text-xs">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
