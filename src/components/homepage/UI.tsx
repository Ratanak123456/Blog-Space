import Image from "next/image";
import Link from "next/link";

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xl font-black uppercase tracking-widest text-(--text-primary) whitespace-nowrap">
        {title}
      </h2>
      <div className="h-0.5 w-full bg-(--text-secondary)/20"></div>
    </div>
  );
}

export function CategoryTag({
  text,
  large = false,
}: {
  text: string;
  large?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className={`text-(--accent) ${large ? "scale-110" : ""}`}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </span>
      <span
        className={`font-bold text-(--accent) uppercase tracking-widest ${
          large ? "text-sm" : "text-xs"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export function AuthorLine({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-(--text-secondary) font-bold uppercase tracking-wide">
      <span className="w-6 h-6 rounded-full bg-(--bg-secondary) flex items-center justify-center text-xs border border-(--border)">
        👤
      </span>
      {name}
    </div>
  );
}

export function ArrowLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center w-10 h-10 rounded-full border-2 border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-white transition-all"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:-rotate-45 transition-transform duration-300"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </Link>
  );
}

export default null as unknown as void;
