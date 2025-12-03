"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export default function AuthForm({ isRegisterInitially = false }: { isRegisterInitially?: boolean }) {
  const [isRegister, setIsRegister] = useState(isRegisterInitially);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        // Register
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Registration failed");
        alert("Registration successful! You can now log in.");
        setIsRegister(false);
      } else {
        // Login
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        if (res?.error) throw new Error(res.error);
        window.location.href = "/"; // redirect after login
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen w-full bg-(--bg-primary)">
      {/* Left branding side */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-(--accent) via-orange-400 to-amber-300">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-(--accent) rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-white font-bold text-3xl">B</span>
          </div>
          <h1 className="text-7xl font-bold mb-4 text-white drop-shadow-lg">
            BlogSpace
          </h1>
          <p className="text-2xl text-white/90 max-w-xs mx-auto font-light tracking-wide">
            Your digital blogging hub
          </p>
        </div>
      </div>

      {/* Right form side */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-8 md:p-12 bg-(--bg-primary)">
        <div className="w-full max-w-lg p-8 bg-(--bg-secondary) rounded-xl border border-(--border) shadow-lg">
          
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-12 h-12 bg-(--accent) rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <h1 className="text-3xl font-bold text-(--text-primary)">BlogSpace</h1>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center text-(--text-primary)">
            {isRegister ? "Create your account" : "Log into BlogSpace"}
          </h2>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: FaGithub, name: "GitHub", provider: "github" },
              { icon: FaGoogle, name: "Google", provider: "google" },
              { icon: FaFacebook, name: "Facebook", provider: "facebook" },
              { icon: FaTwitter, name: "X", provider: "twitter" },
            ].map((btn) => (
              <button
                key={btn.name}
                onClick={() => handleSocialSignIn(btn.provider)}
                className="flex items-center justify-center py-3 text-sm rounded-lg font-medium transition-colors border border-(--border) text-(--text-secondary) hover:text-(--accent) hover:bg-(--bg-primary)"
              >
                <btn.icon className="mr-2" /> {btn.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-(--border)"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-(--bg-secondary) text-(--text-secondary)">Or continue with</span>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-(--border) bg-(--bg-primary) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)/50 focus:border-(--accent)"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-(--border) bg-(--bg-primary) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)/50 focus:border-(--accent)"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-(--border) bg-(--bg-primary) text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)/50 focus:border-(--accent)"
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 text-base font-semibold text-white rounded-lg bg-(--accent) hover:bg-(--accent-hover) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : isRegister ? "Sign Up" : "Log In"}
            </button>
          </div>

          {/* Toggle Login/Register */}
          <p className="mt-5 text-center text-sm text-(--text-secondary)">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="font-semibold text-(--accent) hover:underline"
            >
              {isRegister ? "Log In" : "Sign Up"}
            </button>
          </p>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-(--text-secondary)">
            © 2024 BlogSpace. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}