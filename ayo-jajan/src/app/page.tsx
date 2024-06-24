import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400", // Add the required weight property
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ background: "rgba(255, 255, 0, 0.78)" }}
    >
      <section>
        <h1
          className={`${pressStart2P.className} text-center font-bold text-5xl`}
        >
          This is Ayo Jajan, an app to track local street vendors
        </h1>
      </section>
      <section></section>
    </main>
  );
}
