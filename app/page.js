import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/Services/Services';
import CTA from '@/components/CTA/CTA';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <CTA />
        <Testimonials />
      </div>
    </main>
  );
}
