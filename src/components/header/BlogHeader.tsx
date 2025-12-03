import {
  Search,
  X,
} from "lucide-react";


type BlogHeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  { id: "all", name: "All Articles" },
  { id: "technology", name: "Technology" },
  { id: "entertainment", name: "Entertainment" },
  { id: "climate", name: "Climate" },
  { id: "lifestyle", name: "Lifestyle" },
];

export default function BlogHeader({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: BlogHeaderProps) {
  return (
      <section className="text-center mb-12 relative overflow-hidden py-16 bg-(--bg-primary)">
      {/* Main Content */}
      <div className="relative">
        {/* Animated Title with Stagger */}
        <div className="mb-6">
          <div className="overflow-hidden">
            <h1 className="text-4xl lg:text-6xl font-bold text-(--text-primary) mb-4 leading-tight animate-slide-up">
              Discover Your Next
            </h1>
          </div>
          <div className="overflow-hidden">
            <span
              className="block mt-2 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="relative inline-block">
                <span className="text-(--accent) relative z-10 animate-pulse-slow">
                  Great Read
                </span>
                {/* Animated underline */}
                <div
                  className="absolute bottom-2 left-0 w-0 h-3 bg-(--accent) opacity-20 z-0 rounded-lg animate-expand-width"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </span>
            </span>
          </div>
        </div>

        {/* Animated Description */}
        <div className="overflow-hidden">
          <p
            className="text-xl lg:text-2xl text-(--text-secondary) max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Explore our collection of{" "}
            <span className="font-semibold text-(--text-primary) animate-color-shift">
              expert-written articles
            </span>{" "}
            across{" "}
            <span className="text-(--accent) font-medium hover:scale-110 transition-transform duration-300 inline-block">
              technology
            </span>
            ,{" "}
            <span
              className="text-(--accent) font-medium hover:scale-110 transition-transform duration-300 inline-block"
              style={{ transitionDelay: "0.1s" }}
            >
              design
            </span>
            ,{" "}
            <span
              className="text-(--accent) font-medium hover:scale-110 transition-transform duration-300 inline-block"
              style={{ transitionDelay: "0.2s" }}
            >
              productivity
            </span>
            , and{" "}
            <span
              className="text-(--accent) font-medium hover:scale-110 transition-transform duration-300 inline-block"
              style={{ transitionDelay: "0.3s" }}
            >
              lifestyle
            </span>
            .
          </p>
        </div>

        {/* Animated Search Bar */}
        <div
          className="max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-(--accent) rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-105"></div>
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-(--text-secondary) z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-(--accent)"
                size={22}
              />
              <input
                type="text"
                placeholder="Search articles, topics, and tags..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-14 pr-6 py-5 border border-(--border) rounded-2xl bg-(--bg-primary) text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-(--accent) transition-all duration-300 text-lg hover:bg-(--bg-secondary) focus:bg-(--bg-secondary) transform group-hover:scale-[1.02] focus:scale-[1.02]"
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-(--text-secondary) hover:text-(--accent) transition-all duration-300 p-1 rounded-full hover:bg-(--accent)/10 hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Animated Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative px-6 py-3 rounded-full border transition-all duration-500 font-medium 
                transform hover:scale-110 active:scale-95 group overflow-hidden animate-fade-in
                ${
                  selectedCategory === category.id
                    ? "bg-(--accent) text-white border-(--accent) shadow-lg shadow-(--accent)/30 hover:shadow-xl hover:shadow-(--accent)/40"
                    : "bg-(--bg-primary) border-(--border) text-(--text-secondary) hover:border-(--accent) hover:text-(--accent) hover:bg-(--bg-secondary) hover:shadow-md"
                }
            `}
              style={{
                animationDelay: `${0.8 + index * 0.1}s`,
                borderWidth: selectedCategory === category.id ? "2px" : "1px",
                animationFillMode: "both",
              }}
            >
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 bg-(--accent) opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-full scale-0 group-hover:scale-100"></div>

              <span className="relative z-10 font-medium tracking-wide transition-all duration-300 group-hover:tracking-wider">
                {category.name}
              </span>

              {/* Animated selection indicator */}
              {selectedCategory === category.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-(--accent) rounded-full opacity-80 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Animated Stats */}
        <div
          className="flex justify-center items-center gap-8 text-(--text-secondary) text-sm animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-2 h-2 bg-(--accent) rounded-full animate-ping-slow"></div>
            <span>1,000+ Articles</span>
          </div>
          <div
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            style={{ transitionDelay: "0.1s" }}
          >
            <div
              className="w-2 h-2 bg-(--accent) opacity-70 rounded-full animate-ping-slow"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <span>Fresh Daily</span>
          </div>
          <div
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
            style={{ transitionDelay: "0.2s" }}
          >
            <div
              className="w-2 h-2 bg-(--accent) opacity-50 rounded-full animate-ping-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <span>Expert Curated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
