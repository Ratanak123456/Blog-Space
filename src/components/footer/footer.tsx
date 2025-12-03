"use client";

import Link from "next/link";
import { useState } from "react";
import siteConfig from '../../data/site-config.json';

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-(--border) bg-(--bg-primary)">
      <div className="container px-4 mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-(--accent) rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-(--text-primary)">
                {siteConfig.site.name}
              </span>
            </div>
            <p className="text-(--text-secondary) mb-6 max-w-xs">
              {siteConfig.site.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-(--border) rounded-md flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="font-semibold">
                    {platform === 'twitter' ? '𝕏' : 
                     platform === 'github' ? '⚡' : 
                     platform === 'linkedin' ? 'in' : 
                     platform === 'facebook' ? 'f' : platform.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.header.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.footer.columns[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Newsletter
            </h3>
            <p className="text-(--text-secondary) mb-4">
              {siteConfig.features.newsletter.description}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder={siteConfig.features.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-(--border) rounded-md bg-(--bg-primary) text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent) transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-(--accent) text-white py-2 px-4 rounded-md hover:bg-(--accent-hover) transition-colors font-medium"
              >
                {siteConfig.features.newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-(--border) mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-(--text-secondary) text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.organization.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {siteConfig.navigation.footer.columns[3].links.slice(0, 3).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-(--text-secondary) hover:text-(--accent) transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}