import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div
          className="flex items-center justify-between rounded-2xl
                     bg-white/10 backdrop-blur-xl
                     border border-white/10
                     px-6 py-4 shadow-lg"
        >
          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-white">
            Tenant<span className="text-blue-500">Score</span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex gap-8 text-gray-300">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/properties" className="hover:text-white">Properties</NavLink>
            <NavLink to="/login" className="hover:text-white">Login</NavLink>
          </nav>

          {/* CTA */}
          <Link
            to="/signup"
            className="bg-blue-600 px-5 py-2.5 rounded-xl
                       text-white font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
