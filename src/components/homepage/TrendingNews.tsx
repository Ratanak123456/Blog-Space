"use client";
import Image from "next/image";
import { SectionHeader } from "./UI";

export default function TrendingNews({
  trendingNews,
}: {
  trendingNews: any[];
}) {
  return (
    <section className="mb-24">
      <SectionHeader title="TRENDING NEWS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {trendingNews.map((news, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative w-full aspect-4/3 bg-(--bg-secondary) rounded-lg overflow-hidden mb-4 shadow-sm border border-(--border)">
              <Image
                src={news.image}
                alt={news.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-(--accent) uppercase tracking-widest">
                {news.category}
              </div>
              <h3 className="text-lg font-bold leading-snug group-hover:underline decoration-2 decoration-(--accent) underline-offset-4">
                {news.title}
              </h3>
              <p className="text-xs text-(--text-secondary) font-medium">
                By {news.author}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
