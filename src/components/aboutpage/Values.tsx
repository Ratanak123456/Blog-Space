'use client';
import { motion } from 'framer-motion';
import { PenTool, Heart, Globe, Sparkles, Shield, Users } from 'lucide-react';

const values = [
  { icon: PenTool, title: "Authentic Voices", desc: "We celebrate every writer's unique perspective. Your truth matters more than trends." },
  { icon: Heart, title: "Radical Empathy", desc: "We read to understand, not just to respond. Every story has value." },
  { icon: Globe, title: "Diverse Perspectives", desc: "From personal essays to cultural commentary — all voices find a home here." },
  { icon: Sparkles, title: "Joyful Creation", desc: "Writing isn't a chore. It's self-expression. It's discovery. It's magic." },
  { icon: Shield, title: "No Compromise", desc: "Never clickbait. Never algorithms. Never selling your data. Ever." },
  { icon: Users, title: "Community First", desc: "This isn't a platform. It's a conversation. We grow through shared stories." },
];

export default function Values() {
  return (
    <section className="py-40 px-6 bg-(--bg-primary)">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-(--text-primary)"
        >
          Our Writing Philosophy
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="flex justify-center mb-6">
                <v.icon className="w-24 h-24 text-(--accent)" />
              </div>
              <h3 className="text-3xl font-bold text-(--text-primary) mb-4">{v.title}</h3>
              <p className="text-xl text-(--text-secondary) leading-relaxed px-4">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}