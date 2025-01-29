import { HeaderSection } from "../../page-components/headersection";

export default function VendorSignup() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-400 to-amber-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <HeaderSection
          title="Join as User"
          description="Reach new customers and grow your business"
          className="mb-12"
        />

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Business Name
              </label>
              <input
                id="businessName"
                type="text"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your business name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="your@email.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
