import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Links } from "@/components/Links";
import { SpotifyCard } from "@/components/SpotifyCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TechStack />
      
      {/* Links and Spotify Section */}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Links />
          <SpotifyCard />
        </div>
      </section>
      
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
