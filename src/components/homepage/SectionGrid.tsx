"use client";
import Image from "next/image";
import Link from "next/link";
import { CategoryTag, AuthorLine } from "./UI";

interface SectionItem {
  category: string;
  title: string;
  author: string;
  image: string;
  blogSlug?: string;
  postSlug?: string;
}

interface SectionData {
  main: SectionItem;
  list: SectionItem[];
}

interface SectionGridProps {
  title: string;
  data: SectionData;
}

export default function SectionGrid({ title, data }: SectionGridProps) {
  return (
    <section className="pb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4 grow">
          <h2 className="text-2xl font-black uppercase tracking-widest text-(--text-primary) whitespace-nowrap">
            {title}
          </h2>
          <div className="h-0.5 w-full bg-(--accent)"></div>
        </div>
        <Link
          href="/blog"
          className="text-xs font-bold text-(--accent) hover:opacity-80 uppercase tracking-widest ml-6 whitespace-nowrap"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Featured Article */}
        <div className="lg:col-span-8">
          <Link
            href={
              data.main.blogSlug && data.main.postSlug
                ? `/blogs/${data.main.blogSlug}/${data.main.postSlug}`
                : "#"
            }
          >
            <article className="group cursor-pointer h-full flex flex-col">
              <div className="relative w-full grow overflow-hidden rounded-md shadow-sm bg-gray-100 min-h-[400px]">
                <Image
                  src={data.main.image}
                  alt={data.main.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 mt-4">
                <CategoryTag text={data.main.category} />
                <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight group-hover:text-gray-700">
                  {data.main.title}
                </h3>
                <AuthorLine name={data.main.author} />
              </div>
            </article>
          </Link>
        </div>

        {/* List of Articles */}
        <div className="lg:col-span-4">
          <div className="flex flex-col bg-(--bg-secondary) rounded-xl p-6 border border-(--border) shadow-sm h-full">
            {data.list.map((item, index) => (
              <Link
                key={index}
                href={
                  item.blogSlug && item.postSlug
                    ? `/blogs/${item.blogSlug}/${item.postSlug}`
                    : "#"
                }
              >
                <article className="group cursor-pointer flex gap-4 items-start py-4 border-b border-(--border) last:border-0 hover:bg-(--bg-primary) transition-colors p-2 -mx-2 rounded-lg">
                  <div className="w-20 h-20 shrink-0 bg-(--bg-secondary) rounded-md overflow-hidden shadow-sm relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="space-y-1">
                    <CategoryTag text={item.category} />
                    <h4 className="text-sm font-bold leading-snug group-hover:text-(--text-secondary) line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-(--text-secondary) font-bold uppercase pt-1">
                      {item.author}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
