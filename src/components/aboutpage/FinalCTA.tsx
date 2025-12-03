'use client';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-(--bg-primary)">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-(--text-primary) mb-12">
          The World Needs More<br />
          <span className="text-(--accent)">
            Reader Like You
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-(--text-secondary) mb-16 max-w-4xl mx-auto">
          Staying informed with the news empowers you to understand the world around you and make more thoughtful decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/blogs"
            className="px-16 py-8 bg-(--accent) text-white text-2xl font-bold rounded-full shadow-2xl hover:bg-(--accent-hover) transition-colors"
          >
            Start Reading
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}