import HeaderSection from "./page-components/headersection";
import ExploreButton from "./page-components/explorebutton";
import FooterSection from "./page-components/footersection";
import AboutSection from "./page-components/aboutsection";
import Hero from "./page-components/hero";
import Features from "./page-components/features";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center p-6 sm:p-24"
      style={{ background: "rgba(255, 255, 0, 0.78)" }}
    >
      <section className="min-h-screen flex items-start justify-center pt-6 sm:pt-12">
        <HeaderSection />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Features />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <AboutSection />
      </section>
      <FooterSection />
    </main>
  );
}
