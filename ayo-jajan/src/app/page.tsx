import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import logo from "../../public/logo.png";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24"
      style={{ background: "rgba(255, 255, 0, 0.78)" }}
    >
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
          <Image src={logo} alt="Ayo Logo" width={350} height={350} priority />
        </div>
      </section>
      <section className="mt-12">
        <a
          href="#"
          className={`${pressStart2P.className} bg-black text-white py-5 px-8 rounded-full text-lg hover:bg-gray-800 transition-colors`}
        >
          Start Exploring
        </a>
      </section>
      <section>
        <p className="mt-12 text-center text-sm">
          Made with ❤️ by <a href="https://github.com/mzf11125/">Zidan</a>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">About Ayo Jajan</h2>
        <p>
          Ayo Jajan is on a mission to promote local street food, including food
          carts and food trucks. We believe in supporting small businesses and
          showcasing the diverse culinary experiences that can be found on the
          streets. Through our platform, you can track local street vendors in
          real-time and discover culinary adventures. Join us in celebrating the
          vibrant street food culture and supporting local vendors!
        </p>
      </section>
    </main>
  );
}
