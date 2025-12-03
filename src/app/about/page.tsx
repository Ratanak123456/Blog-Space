import Hero from '@/components/aboutpage/Hero';
import Story from '@/components/aboutpage/Story';
import Benefits from '@/components/aboutpage/Benefits';
import GlobalImpact from '@/components/aboutpage/GlobalImpact';
import Values from '@/components/aboutpage/Values';
import TeamQuote from '@/components/aboutpage/TeamQuote';
import FinalCTA from '@/components/aboutpage/FinalCTA';
import Contact from '@/components/aboutpage/Contact';

export const metadata = {
  title: 'About • A Global Community of Passionate Learners & Educators',
};

export default function About() {
  return (
    <main>
      <Hero />
      <Story />
      <Benefits />
      <Values />
      <TeamQuote />
      <Contact />
      <FinalCTA />
      <GlobalImpact />
    </main>
  );
}