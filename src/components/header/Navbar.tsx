"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeButton from "./ThemeButton";
import siteConfig from '../../data/site-config.json';
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-(--border) bg-(--bg-primary)/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="w-10 h-10 bg-(--accent) rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-(--text-primary)">
              {siteConfig.site.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
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

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <ThemeButton/>
            {session ? (
              <>
                <Link href="/profile" className="py-2 px-4 border border-(--border) text-(--text-primary) rounded-md hover:bg-(--bg-secondary) transition-colors">
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-(--accent) text-white py-2 px-4 rounded-md hover:bg-(--accent-hover) transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => signIn()}
                  className="py-2 px-4 border border-(--border) text-(--text-primary) rounded-md hover:bg-(--bg-secondary) transition-colors"
                >
                  Sign In
                </button>
                <Link
                  href="/login?register=true"
                  className="bg-(--accent) text-white py-2 px-4 rounded-md hover:bg-(--accent-hover) transition-colors"
                >
                  Create an account
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-(--text-primary) hover:bg-(--bg-secondary) transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-(--border) mt-4">
            {/* Mobile Navigation Items */}
            {siteConfig.navigation.header.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-(--text-secondary) hover:text-(--accent) hover:bg-(--bg-secondary) transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-3 border-t border-(--border) mt-2 space-y-3">
              <ThemeButton />
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="block w-full text-center px-3 py-2 border border-(--border) text-(--text-primary) rounded-md hover:bg-(--bg-secondary) transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      closeMobileMenu();
                    }}
                    className="block w-full text-center px-3 py-2 bg-(--accent) text-white rounded-md hover:bg-(--accent-hover) transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      signIn();
                      closeMobileMenu();
                    }}
                    className="block w-full text-center px-3 py-2 border border-(--border) text-(--text-primary) rounded-md hover:bg-(--bg-secondary) transition-colors"
                  >
                    Sign In
                  </button>
                  <Link
                    href="/login?register=true"
                    className="block w-full text-center px-3 py-2 bg-(--accent) text-white rounded-md hover:bg-(--accent-hover) transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Create an account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}