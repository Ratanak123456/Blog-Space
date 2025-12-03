'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/about-hero.jpg"
          alt="Community of learners and educators"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto text-white">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight"
        >
          Stories That<br />
          <span className="text-(--accent)">
            Connect Us All
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-2xl md:text-3xl font-light opacity-90 max-w-4xl mx-auto"
        >
          A global community of passionate writers and curious readers — 
          united to share authentic stories, diverse perspectives, and meaningful conversations.
        </motion.p>
      </div>
    </section>
  );
}