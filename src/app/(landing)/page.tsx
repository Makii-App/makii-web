import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import RolesSection from "./sections/RolesSection";
import SpacesSection from "./sections/SpacesSection";
import EventsSection from "./sections/EventsSection";
import AppDownloadSection from "./sections/AppDownloadSection";
import DeliveryTeaserSection from "./sections/DeliveryTeaserSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <SpacesSection />
      <EventsSection />
      <AppDownloadSection />
      <DeliveryTeaserSection />
    </div>
  );
}
