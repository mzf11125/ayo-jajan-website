import { MapPin, Trophy, LeafIcon, UsersIcon } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 md:text-4xl">
          Your Street Food Adventure
          <span className="block text-xl text-gray-600 mt-2 md:text-2xl">
            Track, Explore, Earn Rewards
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Track Vendors
            </h3>
            <p className="text-gray-600">
              Find live locations of your favorite street food carts using
              real-time GPS
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-white">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start Challenges
            </h3>
            <p className="text-gray-600">
              Complete food missions like &quot;Try 5 Street Noodles&quot; to
              earn rewards
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
              <LeafIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Eco Actions
            </h3>
            <p className="text-gray-600">
              Get bonus points for sustainable choices like using reusable
              containers
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
              <UsersIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Share & Connect
            </h3>
            <p className="text-gray-600">
              Post your finds and join a global community of street food
              explorers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
