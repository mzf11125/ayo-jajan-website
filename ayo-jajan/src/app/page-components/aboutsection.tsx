export default function AboutSection() {
  return (
    <>
      {/* Extra spacing to push the "About" section further down */}
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="h-[25vh]"></div>

      <section id="about" className="mt-20">
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
    </>
  );
}
