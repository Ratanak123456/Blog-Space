"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { 
  User, Mail, Calendar, Bookmark, 
  History, Eye, Heart, Clock,
  Settings, LogOut, Globe, Bell,
  Moon, Sun, TrendingUp, Filter
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const [activeTab, setActiveTab] = useState("reading-history");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Reading statistics
  const [readingStats, setReadingStats] = useState({
    articlesRead: 156,
    readingTime: "42h 15m",
    categoriesRead: 8,
    streak: 24,
  });

  // Reading history (mock data)
  const [readingHistory, setReadingHistory] = useState([
    { 
      id: 1, 
      title: "The Future of Artificial Intelligence in Healthcare", 
      category: "Technology",
      readTime: "8 min",
      date: "2 hours ago",
      liked: true
    },
    { 
      id: 2, 
      title: "Sustainable Energy Solutions for Urban Areas", 
      category: "Environment",
      readTime: "12 min",
      date: "Yesterday",
      liked: false
    },
    { 
      id: 3, 
      title: "The Psychology of Color in Web Design", 
      category: "Design",
      readTime: "6 min",
      date: "2 days ago",
      liked: true
    },
    { 
      id: 4, 
      title: "Blockchain Technology Beyond Cryptocurrency", 
      category: "Finance",
      readTime: "15 min",
      date: "1 week ago",
      liked: true
    },
  ]);

  // Saved articles (mock data)
  const [savedArticles, setSavedArticles] = useState([
    { 
      id: 1, 
      title: "Machine Learning Algorithms Explained Simply", 
      category: "AI",
      saveDate: "Jan 15"
    },
    { 
      id: 2, 
      title: "The Rise of Remote Work Culture", 
      category: "Business",
      saveDate: "Jan 12"
    },
    { 
      id: 3, 
      title: "Healthy Eating Habits for Programmers", 
      category: "Health",
      saveDate: "Jan 10"
    },
  ]);

  // Preferred categories
  const [preferredCategories, setPreferredCategories] = useState([
    { id: 1, name: "Technology", selected: true },
    { id: 2, name: "Science", selected: true },
    { id: 3, name: "Business", selected: true },
    { id: 4, name: "Health", selected: false },
    { id: 5, name: "Design", selected: true },
    { id: 6, name: "Finance", selected: false },
    { id: 7, name: "Environment", selected: true },
    { id: 8, name: "Education", selected: false },
  ]);

  useEffect(() => {
    if (session?.user) {
      // Initialize user data
    }
  }, [session]);

  const toggleCategory = (id: number) => {
    setPreferredCategories(prev =>
      prev.map(cat =>
        cat.id === id ? { ...cat, selected: !cat.selected } : cat
      )
    );
  };

  const toggleLike = (id: number) => {
    setReadingHistory(prev =>
      prev.map(article =>
        article.id === id ? { ...article, liked: !article.liked } : article
      )
    );
  };

  const removeSavedArticle = (id: number) => {
    setSavedArticles(prev => prev.filter(article => article.id !== id));
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg-primary)">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--accent)"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg-primary)">
        <div className="text-center max-w-md p-8 bg-(--bg-secondary) border border-(--border) rounded-xl">
          <div className="w-16 h-16 bg-(--accent)/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="text-(--accent)" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-(--text-primary) mb-4">Sign In to Continue</h1>
          <p className="text-(--text-secondary) mb-6">
            Sign in to track your reading history, save articles, and personalize your news feed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/login"
              className="inline-block bg-(--accent) text-white py-3 px-6 rounded-lg hover:bg-(--accent-hover) transition-colors text-center"
            >
              Sign In
            </Link>
            <Link 
              href="/"
              className="inline-block border border-(--border) py-3 px-6 rounded-lg hover:bg-(--bg-primary) transition-colors text-center"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      {/* Header */}
      <div className="border-b border-(--border)">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-(--accent) to-amber-300 flex items-center justify-center text-white text-3xl font-bold">
                {session?.user?.name?.charAt(0) || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{session?.user?.name || "Reader"}</h1>
                <div className="flex items-center gap-2 mt-1 text-(--text-secondary)">
                  <Mail size={16} />
                  <span>{session?.user?.email}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-(--text-secondary)">
                  <Calendar size={14} />
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link 
                href="/"
                className="flex items-center gap-2 border border-(--border) py-2 px-4 rounded-lg hover:bg-(--bg-secondary) transition-colors"
              >
                <Eye size={18} />
                Continue Reading
              </Link>
              <button
                onClick={() => {/* Handle sign out */}}
                className="flex items-center gap-2 border border-(--border) py-2 px-4 rounded-lg hover:bg-(--bg-secondary) transition-colors"
              >
                <Settings size={18} />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Reading Stats */}
          <div className="lg:w-1/4 space-y-6">
            {/* Reading Statistics */}
            <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Reading Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-(--bg-primary) rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="text-(--accent)" size={20} />
                    <div>
                      <div className="text-sm text-(--text-secondary)">Articles Read</div>
                      <div className="text-2xl font-bold">{readingStats.articlesRead}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-(--bg-primary) rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="text-(--accent)" size={20} />
                    <div>
                      <div className="text-sm text-(--text-secondary)">Total Reading Time</div>
                      <div className="text-2xl font-bold">{readingStats.readingTime}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-(--bg-primary) rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bookmark className="text-(--accent)" size={20} />
                    <div>
                      <div className="text-sm text-(--text-secondary)">Categories</div>
                      <div className="text-2xl font-bold">{readingStats.categoriesRead}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-(--bg-primary) rounded-lg">
                  <div className="flex items-center gap-3">
                    <History className="text-(--accent)" size={20} />
                    <div>
                      <div className="text-sm text-(--text-secondary)">Day Streak</div>
                      <div className="text-2xl font-bold">{readingStats.streak} days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reading Preferences */}
            <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Filter size={20} />
                Content Preferences
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-(--text-secondary) mb-3">
                  Select categories you're interested in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {preferredCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                        category.selected
                          ? "bg-(--accent) text-white"
                          : "bg-(--bg-primary) border border-(--border) text-(--text-secondary) hover:bg-(--bg-primary)"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link 
                  href="/"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-(--bg-primary) transition-colors text-left"
                >
                  <Eye size={18} />
                  <span>Browse Articles</span>
                </Link>
                <button 
                  onClick={() => setActiveTab("saved")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-(--bg-primary) transition-colors text-left"
                >
                  <Bookmark size={18} />
                  <span>Saved Articles</span>
                </button>
                <button 
                  onClick={() => setActiveTab("preferences")}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-(--bg-primary) transition-colors text-left"
                >
                  <Settings size={18} />
                  <span>Reader Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Tabs */}
            <div className="border-b border-(--border) mb-6">
              <div className="flex space-x-8">
                {[
                  { id: "reading-history", label: "Reading History", icon: History },
                  { id: "saved", label: "Saved Articles", icon: Bookmark },
                  { id: "preferences", label: "Preferences", icon: Settings },
                  { id: "account", label: "Account", icon: User },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-3 px-1 font-medium transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? "border-(--accent) text-(--accent)"
                        : "border-transparent text-(--text-secondary) hover:text-(--text-primary)"
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "reading-history" && (
              <div className="bg-(--bg-secondary) border border-(--border) rounded-xl overflow-hidden">
                <div className="p-6 border-b border-(--border)">
                  <h3 className="text-lg font-semibold">Recently Read Articles</h3>
                  <p className="text-sm text-(--text-secondary) mt-1">
                    Track your reading journey and discover similar content
                  </p>
                </div>
                <div className="divide-y divide-(--border)">
                  {readingHistory.map((article) => (
                    <div key={article.id} className="p-6 hover:bg-(--bg-primary)/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-(--text-secondary) mb-3">
                            <span className="px-2 py-1 bg-(--bg-primary) rounded-md">
                              {article.category}
                            </span>
                            <span>{article.readTime} read</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleLike(article.id)}
                          className="ml-4 p-2 hover:bg-(--bg-primary) rounded-lg transition-colors"
                        >
                          <Heart 
                            size={20} 
                            className={article.liked ? "fill-red-500 text-red-500" : "text-(--text-secondary)"}
                          />
                        </button>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Link 
                          href={`/article/${article.id}`}
                          className="text-(--accent) hover:underline text-sm"
                        >
                          Read Again
                        </Link>
                        <button className="text-(--accent) hover:underline text-sm">
                          Find Similar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-(--border)">
                  <button className="w-full py-3 border border-(--border) rounded-lg hover:bg-(--bg-primary) transition-colors">
                    View All Reading History
                  </button>
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="bg-(--bg-secondary) border border-(--border) rounded-xl overflow-hidden">
                <div className="p-6 border-b border-(--border)">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Saved Articles</h3>
                      <p className="text-sm text-(--text-secondary) mt-1">
                        Articles you've bookmarked for later reading
                      </p>
                    </div>
                    <span className="text-sm text-(--text-secondary)">
                      {savedArticles.length} saved
                    </span>
                  </div>
                </div>
                <div className="divide-y divide-(--border)">
                  {savedArticles.map((article) => (
                    <div key={article.id} className="p-6 hover:bg-(--bg-primary)/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-(--text-secondary)">
                            <span className="px-2 py-1 bg-(--bg-primary) rounded-md">
                              {article.category}
                            </span>
                            <span>Saved on {article.saveDate}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Link 
                            href={`/article/${article.id}`}
                            className="p-2 hover:bg-(--bg-primary) rounded-lg transition-colors text-(--accent)"
                          >
                            Read Now
                          </Link>
                          <button
                            onClick={() => removeSavedArticle(article.id)}
                            className="p-2 hover:bg-(--bg-primary) rounded-lg transition-colors text-(--text-secondary)"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {savedArticles.length === 0 && (
                  <div className="p-12 text-center">
                    <Bookmark className="mx-auto text-(--text-secondary)" size={48} />
                    <h4 className="mt-4 font-semibold text-(--text-secondary)">No saved articles yet</h4>
                    <p className="text-(--text-secondary) mt-2">
                      When you find articles you want to read later, click the bookmark icon to save them here.
                    </p>
                    <Link 
                      href="/"
                      className="inline-block mt-4 bg-(--accent) text-white py-2 px-6 rounded-lg hover:bg-(--accent-hover) transition-colors"
                    >
                      Browse Articles
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Reader Preferences</h3>
                <div className="space-y-6">
                  {/* Theme Preference */}
                  <div className="p-4 border border-(--border) rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
                      Theme Preference
                    </h4>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setTheme("light")}
                        className={`flex-1 py-3 rounded-lg border transition-colors ${
                          theme === "light"
                            ? "border-(--accent) bg-(--accent)/10"
                            : "border-(--border) hover:bg-(--bg-primary)"
                        }`}
                      >
                        <Sun className="mx-auto mb-2" size={24} />
                        <div className="text-center">Light</div>
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`flex-1 py-3 rounded-lg border transition-colors ${
                          theme === "dark"
                            ? "border-(--accent) bg-(--accent)/10"
                            : "border-(--border) hover:bg-(--bg-primary)"
                        }`}
                      >
                        <Moon className="mx-auto mb-2" size={24} />
                        <div className="text-center">Dark</div>
                      </button>
                    </div>
                  </div>

                  {/* Reading Settings */}
                  <div className="p-4 border border-(--border) rounded-lg">
                    <h4 className="font-semibold mb-3">Reading Settings</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" defaultChecked />
                        <span>Auto-save reading progress</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" defaultChecked />
                        <span>Show estimated reading time</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" />
                        <span>Auto-play related articles</span>
                      </label>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="p-4 border border-(--border) rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Bell size={18} />
                      Notification Preferences
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" defaultChecked />
                        <span>Daily digest of top articles</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" />
                        <span>New articles in followed categories</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-(--border)" defaultChecked />
                        <span>Weekly reading statistics</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div className="bg-(--bg-secondary) border border-(--border) rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Account Settings</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-(--border) rounded-lg">
                    <h4 className="font-semibold mb-3">Personal Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-(--text-secondary) mb-2">Name</label>
                        <input
                          type="text"
                          defaultValue={session?.user?.name || ""}
                          className="w-full p-3 border border-(--border) rounded-lg bg-(--bg-primary)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-(--text-secondary) mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={session?.user?.email || ""}
                          className="w-full p-3 border border-(--border) rounded-lg bg-(--bg-primary)"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-(--border) rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <LogOut size={18} />
                      Account Actions
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="py-3 px-6 border border-(--border) rounded-lg hover:bg-(--bg-primary) transition-colors">
                        Export Reading Data
                      </button>
                      <button className="py-3 px-6 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}