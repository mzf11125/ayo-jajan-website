export default function SocialProof() {
  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 md:text-4xl">
          Loved By Food Explorers
          <span className="block text-xl text-gray-600 mt-2 md:text-2xl">
            Join 500,000+ Adventurous Eaters
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex items-center justify-center text-2xl font-bold text-gray-700">
            LP
          </div>
          <div className="flex items-center justify-center text-2xl font-bold text-gray-700">
            NG
          </div>
          <div className="flex items-center justify-center text-2xl font-bold text-gray-700">
            TA
          </div>
          <div className="flex items-center justify-center text-2xl font-bold text-gray-700">
            TO
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <p className="text-gray-600 mb-4">
              &quot;The live GPS tracking helped me find amazing street food
              spots I never would have discovered on my own. Completed 3
              challenges in Bangkok alone!&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white">
                ES
              </div>
              <div>
                <p className="font-medium text-gray-900">Emma S.</p>
                <p className="text-sm text-gray-600">Travel Blogger</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <p className="text-gray-600 mb-4">
              &quot;Earning eco rewards for using my reusable container added an
              extra layer of purpose to my food adventures. Love the
              sustainability focus!&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white">
                TJ
              </div>
              <div>
                <p className="font-medium text-gray-900">Tomás J.</p>
                <p className="text-sm text-gray-600">Digital Nomad</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <p className="text-gray-600 mb-4">
              &quot;The community features connected me with fellow foodies. We
              now plan group challenges whenever we&apos;re in the same
              city!&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                AK
              </div>
              <div>
                <p className="font-medium text-gray-900">Aisha K.</p>
                <p className="text-sm text-gray-600">Backpacker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
