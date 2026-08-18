import CuratedSection from "../components/CuratedSection";
import HeroExploreSection from "../components/HeroExploreSection";
import HeroSection from "../components/HeroSection";
import HighlightSection from "../components/HighlightSection";
import PhilosophySection from "../components/PhilosophySection";

const HomePage = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <HeroExploreSection />
      <CuratedSection />
      <PhilosophySection />
      <HighlightSection />
    </div>
  );
};

export default HomePage;
