import CuratedSection from "../components/CuratedSection";
import HeroExploreSection from "../components/HeroExploreSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <HeroExploreSection />
      <CuratedSection />
    </div>
  );
};

export default HomePage;
