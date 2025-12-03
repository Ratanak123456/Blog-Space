'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: "75K+", label: "Active Readers" },
  { value: "5.2K+", label: "Writers" },
  { value: "42K+", label: "Articles Published" },
  { value: "189", label: "Countries" },
  { value: "1.2M+", label: "Comments & Conversations" },
  { value: "100%", label: "Ad-Free Forever" },
];

export default function GlobalImpact() {
  return (
    <section className="py-32 px-6 bg-linear-to-r from-(--accent) to-(--accent)/80 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-7xl font-black mb-20"
        >
          Words Have Power
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-6xl md:text-7xl font-black">{s.value}</div>
              <div className="mt-4 text-lg opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}