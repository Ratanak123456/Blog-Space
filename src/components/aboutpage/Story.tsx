'use client';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-32 px-6 bg-(--bg-primary)">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-xl md:text-2xl leading-relaxed text-(--text-secondary)"
        >
          <p>
            It started with a simple idea: <strong className="text-(--accent)">what if everyone had a platform to share their unique story?</strong>
          </p>
          <p>
            In 2023, a small group of writers and storytellers got tired of algorithms, clickbait, and echo chambers. 
            They asked: "Why can't we just create a space for authentic human connection through writing?"
          </p>
          <p className="text-2xl md:text-3xl font-bold text-(--text-primary) mt-12">
            Two years later, we're now home to over 75,000 readers and 5,200 writers from 189 countries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}