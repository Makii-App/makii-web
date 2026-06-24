import HeroSection from "./sections/HeroSection";
import CategoriesSection from "./sections/CategoriesSection";
import PromotionsSection from "./sections/PromotionsSection";
import AppDownloadSection from "./sections/AppDownloadSection";
import FutureSection from "./sections/FutureSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CategoriesSection />
      <PromotionsSection />
      <AppDownloadSection />
      <FutureSection />
    </div>
  );
}
