import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
      </div>
    </main>
  );
}
