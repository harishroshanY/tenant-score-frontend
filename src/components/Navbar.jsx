import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50"
    >
      {/* OUTER SAFE SPACE */}
      <div className="px-4 md:px-6">
        {/* WIDTH CONTAINER */}
        <div className="mx-auto max-w-7xl">
          {/* GLASS CARD */}
          <div
            className="mt-4 flex items-center justify-between
                       rounded-2xl
                       bg-white/10 backdrop-blur-xl
                       border border-white/10
                       px-6 py-4
                       shadow-xl"
          >
            {/* LOGO */}
            <Link to="/" className="text-2xl font-bold text-white">
              Tenant<span className="text-blue-400">Score</span>
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden md:flex gap-8 text-gray-300">
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
              <NavLink to="/properties" className="hover:text-white transition">
                Properties
              </NavLink>
              <NavLink to="/login" className="hover:text-white transition">
                Login
              </NavLink>
            </nav>

            {/* CTA */}
            <Link
              to="/signup"
              className="bg-blue-600 px-5 py-2.5 rounded-xl
                         text-white font-semibold
                         hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
