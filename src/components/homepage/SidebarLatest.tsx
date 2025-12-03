"use client";
import Image from "next/image";
import Link from "next/link";

export default function SidebarLatest({
  latestStories,
}: {
  latestStories: any[];
}) {
  return (
    <aside className="lg:col-span-4 relative">
      <div className="sticky top-8">
        <div className="flex items-center justify-between mb-6 border-b-[3px] border-(--text-primary) pb-2">
          <h2 className="text-xl font-black uppercase tracking-widest text-(--text-primary)">
            LATEST
          </h2>
          <Link
            href="/about"
            className="text-xs font-bold text-(--accent) hover:opacity-80 uppercase tracking-widest"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="flex flex-col bg-(--bg-secondary) rounded-xl p-6 border border-(--border) shadow-sm">
          {latestStories.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="group flex gap-5 py-5 border-b border-(--border) last:border-0 hover:bg-(--bg-primary) transition-colors p-2 -mx-2 rounded-lg"
            >
              <div className="flex-1 flex flex-col justify-center space-y-1.5">
                <span className="text-[10px] font-bold text-(--accent) uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-base font-bold leading-snug group-hover:text-(--text-secondary) transition-colors line-clamp-3">
                  {item.title}
                </h4>
                <p className="text-[10px] text-(--text-secondary) font-semibold uppercase tracking-wide">
                  {item.date}
                </p>
              </div>
              <div className="w-24 h-24 shrink-0 bg-(--bg-secondary) rounded-lg overflow-hidden shadow-sm relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
