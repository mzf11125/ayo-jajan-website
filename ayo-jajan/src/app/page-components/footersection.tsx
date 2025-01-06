export default function FooterSection() {
  return (
    <footer className="w-full mt-12 text-center text-sm bg-yellow-300 text-black py-4">
      <div className="flex justify-center space-x-4">
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/mzf11125/" className="text-blue-400">
            Zidan
          </a>
        </p>
        <p>
          Follow us on{" "}
          <a href="https://instagram.com/ayojajanapp" className="text-blue-400">
            @ayojajanapp
          </a>
        </p>
        <p>
          <a href="/partner-signup" className="text-blue-400">
            Become a partner
          </a>
        </p>
      </div>
    </footer>
  );
}
