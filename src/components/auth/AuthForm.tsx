"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

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
        const res = await signIn("credentials", { redirect: false, email, password });
        if (res?.error) throw new Error(res.error);
        window.location.href = "/";
      }
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left branding side */}
      <Link href="/" className="hidden lg:flex lg:w-1/2 items-center justify-center" style={{ backgroundColor: "#C86B3F" }}>
        <div className="text-center text-white">
          <div className="text-9xl font-extralight mb-8 drop-shadow-lg cursor-pointer">∞</div>
          <h1 className="text-6xl font-bold mb-4 drop-shadow-md cursor-pointer">BlogSpace</h1>
          <p className="text-2xl opacity-90 max-w-xs mx-auto">Your digital blogging hub</p>
        </div>
      </Link>

      {/* Right form side */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-8 md:p-12" style={{ backgroundColor: "#D9C9B5" }}>
        <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.05)] transition-all hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]">
          
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden text-center mb-8">
            <div className="text-5xl mb-2 text-orange-500 cursor-pointer">∞</div>
            <h1 className="text-3xl font-bold text-gray-800 cursor-pointer">BlogSpace</h1>
          </Link>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
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
                className="flex items-center justify-center py-3 text-base rounded-2xl font-medium transition-all shadow-sm hover:shadow-md"
                style={{ backgroundColor: "#F3E2C3", color: "#3A2F27" }}
              >
                <btn.icon className="mr-2" /> {btn.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">Or continue with</span>
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
                className="w-full px-5 py-3 text-base rounded-2xl border focus:outline-none transition-shadow shadow-sm focus:shadow-md"
                style={{ borderColor: "#C86B3F", color: "#3A2F27" }}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 text-base rounded-2xl border focus:outline-none transition-shadow shadow-sm focus:shadow-md"
              style={{ borderColor: "#C86B3F", color: "#3A2F27" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 text-base rounded-2xl border focus:outline-none transition-shadow shadow-sm focus:shadow-md"
              style={{ borderColor: "#C86B3F", color: "#3A2F27" }}
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 text-lg font-semibold text-white rounded-2xl transition-shadow shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#C86B3F" }}
            >
              {loading ? "Processing..." : isRegister ? "Sign Up" : "Log In"}
            </button>
          </div>

          {/* Toggle Login/Register */}
          <p className="mt-5 text-center text-sm text-gray-600">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="font-semibold text-orange-500 hover:underline"
            >
              {isRegister ? "Log In" : "Sign Up"}
            </button>
          </p>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-600">
            © 2024 BlogSpace. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
