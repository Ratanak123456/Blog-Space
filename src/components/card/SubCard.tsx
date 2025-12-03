import Link from "next/link";
import Image from "next/image";
import { CategoryTag, AuthorLine } from "@/components/homepage/UI";
import { SubStoryCardProps } from "@/types/blog";

export default function SubStoryCard({
  id,
  slug,
  image,
  title,
  category,
  author,
  blogSlug,
}: SubStoryCardProps) {
  return (
    <Link
      key={id}
      href={`/blogs/${blogSlug}/${slug}`} // This is correct for nested routes
      className="group cursor-pointer flex flex-col h-full"
    >
      <article className="flex flex-col h-full">
        <div className="relative w-full aspect-3/2 overflow-hidden rounded-md bg-gray-200 mb-4 shadow-sm">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col grow space-y-2">
          <CategoryTag text={category} />
          <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight group-hover:text-gray-700">
            {title}
          </h3>
          <div className="mt-auto pt-2">
            <AuthorLine name={author} />
          </div>
        </div>
      </article>
    </Link>
  );
}