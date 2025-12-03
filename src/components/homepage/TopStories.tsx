"use client";
import Image from "next/image";
import { SectionHeader, CategoryTag, AuthorLine } from "./UI";

export default function TopStories({ topStories }: { topStories: any }) {
  return (
    <section className="lg:col-span-8 flex flex-col gap-10">
      <SectionHeader title="TOP STORIES" />

      <article className="group cursor-pointer flex flex-col gap-4">
        <div className="relative w-full overflow-hidden rounded-md shadow-sm">
          <div className="aspect-video lg:aspect-16/8 w-full bg-gray-200 relative">
            <Image
              src={topStories.main.image}
              alt={topStories.main.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
        <div className="space-y-3 mt-2">
          <CategoryTag text={topStories.main.category} large />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter group-hover:text-gray-700 transition-colors">
            {topStories.main.title}
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
            {topStories.main.excerpt}
          </p>
          <div className="pt-2">
            <AuthorLine name={topStories.main.author} />
          </div>
        </div>
      </article>

      <hr className="border--(border)" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {topStories.sub.map((story: any, index: number) => (
          <article
            key={index}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative w-full aspect-3/2 overflow-hidden rounded-md bg-gray-200 mb-4 shadow-sm">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col grow space-y-2">
              <CategoryTag text={story.category} />
              <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight group-hover:text-gray-700">
                {story.title}
              </h3>
              <div className="mt-auto pt-2">
                <AuthorLine name={story.author} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
