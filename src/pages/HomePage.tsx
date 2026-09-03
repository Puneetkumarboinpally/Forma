import CuratedSection from "../components/homepage/CuratedSection";
import HeroExploreSection from "../components/homepage/HeroExploreSection";
import HeroSection from "../components/homepage/HeroSection";
import HighlightSection from "../components/homepage/HighlightSection";
import PhilosophySection from "../components/homepage/PhilosophySection";
import SubscribeSection from "../components/homepage/SubscribeSection";

const HomePage = () => {
  return (
    <div className="h-full mt-14">
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
