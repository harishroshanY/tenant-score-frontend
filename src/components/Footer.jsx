import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] pt-24 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2
                   w-[800px] h-[800px] bg-blue-600/20
                   rounded-full blur-[180px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white">
              Tenant<span className="text-blue-500">Score</span>
            </Link>

            <p className="mt-4 text-gray-400 max-w-sm">
              A modern rental & short-stay management platform helping landlords,
              tenants and admins manage properties smarter with trust and clarity.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-4">
              {["🌐", "🐦", "💼", "📷"].map((icon, i) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/5
                             border border-white/10
                             flex items-center justify-center
                             hover:bg-blue-600/30 transition cursor-pointer"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-white">Tenant Scoring</Link></li>
              <li><Link to="#" className="hover:text-white">Rent Payments</Link></li>
              <li><Link to="#" className="hover:text-white">Short-Stay</Link></li>
              <li><Link to="#" className="hover:text-white">Analytics</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">Terms</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy</Link></li>
              <li><Link to="#" className="hover:text-white">Security</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <span>© 2025 TenantScore. All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            Built with ❤️ for modern rentals
          </span>
        </div>

      </div>
    </footer>
  );
}
