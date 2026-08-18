import CuratedSection from "../components/CuratedSection";
import HeroExploreSection from "../components/HeroExploreSection";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";

const HomePage = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <HeroExploreSection />
      <CuratedSection />
      <PhilosophySection />
    </div>
  );
};

export default HomePage;
