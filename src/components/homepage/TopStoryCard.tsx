import Image from "next/image";
import { CategoryTag, AuthorLine } from "@/components/homepage/UI";

interface TopStoryCardProps {
  image: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
}

export default function TopStoryCard({
  image,
  title,
  category,
  excerpt,
  author,
}: TopStoryCardProps) {
  return (
    <section className="group cursor-pointer flex flex-col gap-4">
      <div className="relative w-full overflow-hidden rounded-md shadow-sm">
        <div className="aspect-video lg:aspect-16/8 w-full bg-gray-200 relative">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="space-y-3 mt-2">
        <CategoryTag text={category} large />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter group-hover:text-gray-700 transition-colors">
          {title}
        </h2>
        <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
          {excerpt}
        </p>
        <div className="pt-2">
          <AuthorLine name={author} />
        </div>
      </div>
    </section>
  );
}
