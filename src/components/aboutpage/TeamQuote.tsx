'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const quotes = [
  { text: "I published my first personal essay here with trembling hands. Last week? 847 people from 41 countries read my words. This community gave me courage.", author: "Maria, Personal Essay Writer from Brazil" },
  { text: "I came here to practice my English writing. Now I'm a featured columnist. This platform gave me confidence I never thought possible.", author: "Ahmed, Columnist from Syria" },
  { text: "I'm 72 and just published my first memoir series. Age is just a number here. Thank you for listening to my stories.", author: "Margaret, Memoir Writer from UK" },
  { text: "I was isolated after moving countries. This writing community became my home. I now host a weekly writing circle — and found my people.", author: "Raj, Fiction Writer from India" },
];

export default function TeamQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-(--bg-secondary) to-(--bg-primary)">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black mb-20 text-(--text-primary)"
        >
          Real Writers, Real Stories
        </motion.h2>

        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
            >
              <p className="text-3xl md:text-4xl font-light text-(--text-primary) italic leading-relaxed mb-10">
                "{quotes[index].text}"
              </p>
              <p className="text-2xl font-bold text-(--accent)">— {quotes[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index 
                  ? "bg-(--accent) w-10" 
                  : "bg-(--border) hover:bg-(--accent)/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}