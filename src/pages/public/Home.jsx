import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-white">

      {/* HERO */}
      <section
  className="relative min-h-screen -mt-32 pt-48 flex items-center"
>
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Content */}
  <div className="relative z-10 max-w-9xl mx-auto px-6 text-white">


    {/* Welcome Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-white/10 backdrop-blur border border-white/20
                    text-sm text-gray-200 mb-6">
      <span className="text-blue-400">★</span>
      Trusted by 10,000+ users
    </div>

    {/* Main Heading */}
    <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
      Rental & Short-Stay <br />
      <span className="text-blue-400">Management</span> Made Simple
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg text-gray-300 max-w-2xl">
      Manage properties, tenants, rent payments and bookings effortlessly
      from one powerful and secure dashboard.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="/signup"
        className="px-8 py-4 bg-blue-600 rounded-xl font-semibold
                   hover:bg-blue-700 transition"
      >
        Get Started Free
      </a>

      <a
        href="/login"
        className="px-8 py-4 rounded-xl border border-white/30
                   backdrop-blur hover:bg-white/10 transition"
      >
        Login
      </a>
    </div>

    {/* Ratings / Trust */}
    <div className="mt-10 flex items-center gap-4 text-sm text-gray-300">
      <div className="flex text-yellow-400">
        ★★★★★
      </div>
      <span>4.8/5 rating from 2,000+ reviews</span>
    </div>
  </div>
</section>


      {/* FEATURES */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Everything You Need to Manage Rentals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Tenant Scoring",
              "Online Rent Payments",
              "Short-Stay Bookings",
              "Landlord Dashboard",
              "Admin Controls",
              "Real-Time Analytics",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-600 transition"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-gray-400">
                  Built for modern rental businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
        <h2 className="text-4xl font-bold">
          Start Managing Rentals Smarter
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Create your free account today
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold"
        >
          Create Free Account
        </Link>
      </section>
    </div>
  );
}
