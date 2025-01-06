import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import logo from "../../../public/logo.png";
import { NavigationMenuBar } from "./navbar/navigation-bar";
import ExploreButton from "./explorebutton";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderSection() {
  return (
    <section className="text-center">
      <h1
        className={`${pressStart2P.className} font-bold text-3xl sm:text-5xl mb-8`}
      >
        Welcome to Ayo Jajan App
      </h1>
      <p className="text-3xl mb-8">
        Find and collect street food treats in real-time - your tasty city
        adventure begins!
      </p>
      <div className="flex justify-center">
        <Image src={logo} alt="Ayo Jajan Logo" width={350} height={350} priority />
      </div>
      <ExploreButton />
    </section>
  );
}
