export default function FooterSection() {
  return (
    <footer className="w-full mt-12 text-center text-sm bg-gradient-to-b from-amber-500 via-orange-400 to-amber-300 text-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/mzf11125/"
            className="text-blue-600 hover:underline"
          >
            Zidan
          </a>
        </p>
        <p>
          Follow us on{" "}
          <a
            href="https://instagram.com/ayojajanapp"
            className="text-blue-600 hover:underline"
          >
            @ayojajanapp
          </a>
        </p>
        <p>
          <a href="/partner-signup" className="text-blue-600 hover:underline">
            Become a partner
          </a>
        </p>
      </div>
    </footer>
  );
}
