"use client";
import { ArrowLink } from "./UI";

export default function AboutSection() {
  return (
    <section className="mb-32">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-(--text-primary) mb-4">
          ABOUT US
        </h2>
        <div className="h-1.5 w-24 bg-(--accent) rounded-full"></div>
      </div>

      <div className="border border-(--border) bg-(--bg-secondary)/50 rounded-3xl p-8 md:p-16 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-(--text-secondary)/20 pb-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-(--text-primary)">
                Our Mission
              </h3>
              <ArrowLink href="/about" />
            </div>
            <p className="text-xl md:text-2xl text-(--text-secondary) font-medium leading-relaxed">
              We are building a blog post website where creativity flows freely.
              This is a space where people can share anything and say anything
              they want. Our vision is to empower every voice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-(--text-secondary)/20 pb-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-(--text-primary)">
                Our Team
              </h3>
              <ArrowLink href="/about" />
            </div>
            <p className="text-xl md:text-2xl text-(--text-secondary) font-medium leading-relaxed">
              Our team is driven by a passion for connection and quality. We
              work tirelessly to ensure we earn your trust every single day. We
              are dedicated to making this your go-to destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
