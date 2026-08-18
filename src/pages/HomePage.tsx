import CuratedSection from "../components/CuratedSection";
import HeroExploreSection from "../components/HeroExploreSection";
import HeroSection from "../components/HeroSection";
import HighlightSection from "../components/HighlightSection";
import PhilosophySection from "../components/PhilosophySection";
import SubscribeSection from "../components/SubscribeSection";

const HomePage = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <HeroExploreSection />
      <CuratedSection />
      <PhilosophySection />
      <HighlightSection />
      <SubscribeSection/>
    </div>
  );
};

export default HomePage;
