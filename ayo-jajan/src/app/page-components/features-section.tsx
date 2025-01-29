import { LeafIcon, MapPin, Trophy, GlobeIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm md:py-24">
      <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center">
          <MapPin className="h-12 w-12 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Live GPS Tracking</h3>
          <p className="text-gray-600">
            Real-time vendor locations on our interactive map - never miss your favorite street food spots
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Trophy className="h-12 w-12 text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Food Challenges</h3>
          <p className="text-gray-600">
            Complete tasty missions to unlock rewards and local experiences
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <LeafIcon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco Rewards</h3>
          <p className="text-gray-600">
            Earn points for sustainable practices like using reusable containers
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <GlobeIcon className="h-12 w-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Traveler Community</h3>
          <p className="text-gray-600">
            Connect with fellow food explorers and share authentic culinary finds
          </p>
        </div>
      </div>
    </section>
  );
}
