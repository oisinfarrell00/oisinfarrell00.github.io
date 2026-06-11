import { HeroSection } from "./home/HeroSection";
import { ProfessionalTimeline } from "./home/ProfessionalTimeline";
import { CoreStackDisplay } from "./home/CoreStackDisplay";
import { InterestChannels } from "./home/InterestChannels";
import { ContactSection } from "./home/ContactSection";

export function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-16 relative flex flex-col gap-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10" />

      <HeroSection />
      <ProfessionalTimeline />
      <CoreStackDisplay />
      <InterestChannels />
      <ContactSection />
    </div>
  );
}
