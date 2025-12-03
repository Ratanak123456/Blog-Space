'use client';
import { motion } from 'framer-motion';
import { PenSquare, Mic, MessageCircle, BookOpen, Ban, Home } from 'lucide-react';

const benefits = [
  { icon: PenSquare, title: "Write Anything, For Everyone", desc: "From personal essays to cultural analysis — all writing is welcomed and celebrated here." },
  { icon: Mic, title: "Share Your Unique Voice", desc: "No credentials required. If you have a story to tell, you're a writer." },
  { icon: MessageCircle, title: "Real Reader Connection", desc: "Thoughtful comments, writing circles, feedback sessions — not just passive views." },
  { icon: BookOpen, title: "Build Your Writing Portfolio", desc: "Create a beautiful portfolio of your work, recognized by publishers and readers alike." },
  { icon: Ban, title: "Zero Ads, Zero Algorithms", desc: "We're funded by community support only. Your attention is sacred." },
  { icon: Home, title: "Lifetime Home For Your Words", desc: "Once you publish here, your stories stay forever — no deletions, no paywalls." },
];

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-linear-to-b from-(--bg-secondary) to-(--bg-primary)">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-(--text-primary)"
        >
          Why Writers Love It Here
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group bg-(--bg-secondary) p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-(--border)"
            >
              <div className="flex justify-center mb-6">
                <b.icon className="w-16 h-16 text-(--accent)" />
              </div>
              <h3 className="text-2xl font-bold text-(--text-primary) mb-4">{b.title}</h3>
              <p className="text-(--text-secondary) text-lg leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}