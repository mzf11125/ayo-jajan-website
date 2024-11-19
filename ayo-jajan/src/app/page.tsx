import HeaderSection from "./page-components/headersection";
import ExploreButton from "./page-components/explorebutton";
import FooterSection from "./page-components/footersection";
import AboutSection from "./page-components/aboutsection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24"
      style={{ background: "rgba(255, 255, 0, 0.78)" }}
    >
      <HeaderSection />
      <ExploreButton />
      <AboutSection />
      <FooterSection />
    </main>
    
  );
}
