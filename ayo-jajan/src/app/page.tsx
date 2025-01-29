import HeroSection from "./page-components/hero-section";
import FeaturesSection from "./page-components/features-section";
import AboutSection from "./page-components/aboutsection";
import HowItWorks from "./page-components/how-it-works";
import SocialProof from "./page-components/social-proof";
import FooterSection from "./page-components/footersection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-400 to-amber-300 pt-0 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="mt-8">
          <HeroSection />
        </div>

        <div className="mt-12">
          <FeaturesSection />
        </div>

        <div className="mt-12">
          <AboutSection />
        </div>

        <div className="mt-12">
          <HowItWorks />
        </div>

        <div className="mt-12">
          <SocialProof />
        </div>

        <div className="mt-24">
          {" "}
          {/* Increased margin before footer */}
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
