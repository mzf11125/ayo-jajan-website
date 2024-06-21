import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ background: "rgba(255, 255, 0, 0.7)" }}
    >
      <section>
        <h1 className="text-center font-bold text-4xl">
          This is Ayo Jajan, an app to track local street vendors
        </h1>
      </section>
    </main>
  );
}
