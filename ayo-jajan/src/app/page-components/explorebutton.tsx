import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function ExploreButton() {
  return (
    <section className="mt-12">
      <a
        href="#about"
        className={`${pressStart2P.className} bg-black text-white py-5 px-8 rounded-full text-lg hover:bg-gray-800 transition-colors`}
      >
        Start Exploring
      </a>
    </section>
  );
}
