import Image from "next/image";
import Link from "next/link";
import technologyBlog from "@/data/blogs/technology-blog.json";
import entertainmentBlog from "@/data/blogs/entertainment-blog.json";
import lifestyleBlog from "@/data/blogs/lifestyle-blog.json";
import climateBlog from "@/data/blogs/climate-blog.json";
import authorsData from "@/data/authors.json";



export const metadata = {
  title: 'Home • Stories That Connect Us All - Share & Discover Meaningful Conversations',
};


import {
  SectionHeader,
  CategoryTag,
  AuthorLine,
  ArrowLink,
} from "@/components/homepage/UI";
import SectionGrid from "@/components/homepage/SectionGrid";
import TopStoryCard from "@/components/homepage/TopStoryCard";
import SubStoryCard from "@/components/card/SubCard";

const authors = authorsData.authors;

// Helper function to transform blog data into section format
const transformBlogData = (blog: any) => ({
  main: blog.posts[0]
    ? {
        category: blog.blog.name,
        title: blog.posts[0].title,
        author:
          authors.find((a) => a.id === blog.posts[0].authorId)?.name ||
          "Unknown",
        image:
          blog.posts[0].featuredImage?.url ||
          "https://placehold.co/1000x600/333/fff?text=" + blog.blog.name,
        blogSlug: blog.blog.slug,
        postSlug: blog.posts[0].slug,
      }
    : {
        category: blog.blog.name,
        title: "Latest " + blog.blog.name,
        author: "BlogSpace",
        image: "https://placehold.co/1000x600/333/fff?text=" + blog.blog.name,
        blogSlug: blog.blog.slug,
      },
  list: blog.posts.slice(1, 7).map((post: any) => ({
    category: post.tags?.[0]?.toUpperCase() || blog.blog.name,
    title: post.title,
    author: authors.find((a) => a.id === post.authorId)?.name || "Unknown",
    image:
      post.featuredImage?.url ||
      "https://placehold.co/200x200/333/fff?text=" + post.title.slice(0, 10),
    blogSlug: blog.blog.slug,
    postSlug: post.slug,
  })),
});

// Combine all blog data
const allBlogs = [
  technologyBlog,
  entertainmentBlog,
  lifestyleBlog,
  climateBlog,
];
const allPosts = allBlogs.flatMap((blog) =>
  blog.posts.map((post) => ({
    ...post,
    blogSlug: blog.blog.slug,
    blogName: blog.blog.name,
    blogColor: blog.blog.color,
  }))
);

// Get top stories from technology blog
const techPosts = technologyBlog.posts.slice(0, 3);
const topStories = {
  main: techPosts[0]
    ? {
        category: technologyBlog.blog.name,
        title: techPosts[0].title,
        excerpt: techPosts[0].excerpt,
        author:
          authors.find((a) => a.id === techPosts[0].authorId)?.name ||
          "Unknown",
        image:
          techPosts[0].featuredImage?.url ||
          "https://placehold.co/1200x800/222/3b82f6?text=Blog+Post",
        blogSlug: technologyBlog.blog.slug,
        postSlug: techPosts[0].slug,
      }
    : {
        category: "TECH",
        title: "Latest Technology Posts",
        excerpt: "Check out the latest from our technology blog",
        author: "BlogSpace",
        image: "https://placehold.co/1200x800/222/3b82f6?text=Technology",
        blogSlug: technologyBlog.blog.slug,
        postSlug: "", // or a sensible default
      },
  sub: techPosts.slice(1, 3).map((post) => ({
    id: post.id,
    slug: post.slug,
    blogSlug: technologyBlog.blog.slug,
    category: technologyBlog.blog.name,
    title: post.title,
    author: authors.find((a) => a.id === post.authorId)?.name || "Unknown",
    image:
      post.featuredImage?.url ||
      "https://placehold.co/800x500/333/8b5cf6?text=Post",
  })),
};

// Get latest stories from all blogs
const latestStories = allPosts.slice(0, 6).map((post) => ({
  category: post.tags?.[0]?.toUpperCase() || "NEWS",
  title: post.title,
  date: new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  image:
    post.featuredImage?.url ||
    "https://placehold.co/200x200/333/3b82f6?text=Story",
  blogSlug: post.blogSlug,
  postSlug: post.slug,
}));

// Get trending news - top 5 posts with highest views from all blogs
const trendingNews = allPosts
  .sort((a, b) => (b.stats?.views || 0) - (a.stats?.views || 0))
  .slice(0, 5)
  .map((post) => ({
    category: post.tags?.[0]?.toUpperCase() || "NEWS",
    title: post.title,
    author: authors.find((a) => a.id === post.authorId)?.name || "Unknown",
    image:
      post.featuredImage?.url ||
      "https://placehold.co/600x400/111/fff?text=Trending",
    blogSlug: post.blogSlug,
    postSlug: post.slug,
  }));

// Dynamic blog sections
const sections = [
  { title: "ENTERTAINMENT", data: transformBlogData(entertainmentBlog) },
  { title: "TECHNOLOGY", data: transformBlogData(technologyBlog) },
  { title: "LIFESTYLE", data: transformBlogData(lifestyleBlog) },
  { title: "CLIMATE", data: transformBlogData(climateBlog) },
];




export default function Home() {
  return (
    <main className="min-h-screen bg-(--bg-primary) text-(--text-primary) font-sans selection:bg-(--accent)/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* MAIN LAYOUT - TOP STORIES + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24">
          {/* LEFT COLUMN: Top Stories */}
          <section className="lg:col-span-8 flex flex-col gap-10">
            <SectionHeader title="TOP STORIES" />

            {/* Hero Story */}
            <Link
              href={`/blogs/${topStories.main.blogSlug}/${topStories.main.postSlug}`}
            >
              <TopStoryCard
                image={topStories.main.image}
                title={topStories.main.title}
                category={topStories.main.category}
                excerpt={topStories.main.excerpt}
                author={topStories.main.author}
              />
            </Link>

            <hr className="border--(border)" />

            {/* Sub Stories */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {topStories.sub.map((story, index) => (
                <SubStoryCard
                  key={index}
                  id={story.id}
                  slug={story.slug}
                  blogSlug={story.blogSlug}
                  image={story.image}
                  title={story.title}
                  category={story.category}
                  author={story.author}
                />
              ))}
            </section>
          </section>

          

          {/* RIGHT COLUMN: Sidebar Latest */}
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
                    href={`/blogs/${item.blogSlug}/${item.postSlug}`}
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
        </div>

        {/* TRENDING NEWS SECTION */}
        <section className="mb-24">
          <SectionHeader title="TRENDING NEWS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {trendingNews.map((news, index) => (
              <Link
                key={index}
                href={`/blogs/${news.blogSlug}/${news.postSlug}`}
              >
                <article className="group cursor-pointer">
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
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-(--text-primary) mb-4">
              ABOUT US
            </h2>
            <div className="h-1.5 w-24 bg-(--accent) rounded-full"></div>
          </div>

          <div className="border border-(--border) bg-(--bg-secondary)/50 rounded-3xl p-8 md:p-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-(--text-secondary)/20 pb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-(--text-primary)">
                    Our Mission
                  </h3>
                  <ArrowLink href="/about" />
                </div>
                <p className="text-xl md:text-2xl text-(--text-secondary) font-medium leading-relaxed">
                  We are building a blog post website where creativity flows
                  freely. This is a space where people can share anything and
                  say anything they want. Our vision is to empower every voice.
                </p>
              </div>

              {/* Team */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-(--text-secondary)/20 pb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-(--text-primary)">
                    Our Team
                  </h3>
                  <ArrowLink href="/profile" />
                </div>
                <p className="text-xl md:text-2xl text-(--text-secondary) font-medium leading-relaxed">
                  Our team is driven by a passion for connection and quality. We
                  work tirelessly to ensure we earn your trust every single day.
                  We are dedicated to making this your go-to destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC CATEGORY SECTIONS */}
        {sections.map((section) => (
          <SectionGrid
            key={section.title}
            title={section.title}
            data={section.data}
          />
        ))}
      </div>
    </main>
  );
}
