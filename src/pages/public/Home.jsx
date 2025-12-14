import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white bg-[#020617] overflow-hidden">

  {/* GLOBAL BACKGROUND GLOW */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-64 left-1/2 -translate-x-1/2
                    w-[1200px] h-[1200px]
                    bg-blue-600/20 rounded-full blur-[220px]" />

    <div className="absolute top-[40%] left-0
                    w-[600px] h-[600px]
                    bg-indigo-600/15 rounded-full blur-[180px]" />

    <div className="absolute bottom-0 right-0
                    w-[600px] h-[600px]
                    bg-sky-500/10 rounded-full blur-[200px]" />
  </div>


{/* HERO */}
<section className="relative min-h-screen -mt-1 pt-32 sm:pt-40 md:pt-48 flex items-center">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/65"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-white">
    <div className="max-w-4xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                   bg-white/10 backdrop-blur border border-white/20
                   text-sm text-gray-200 mb-6"
      >
        ⭐ Trusted by 10,000+ users
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
      >
        Rental & Short-Stay <br />
        <span className="text-blue-400">Management</span> Made Simple
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.8 }}
        className="mt-6 text-lg text-gray-300 max-w-2xl"
      >
        Manage properties, tenants, rent payments and bookings effortlessly
        from one powerful and secure dashboard.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
      >
        <a
          href="/signup"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-xl font-semibold
                     hover:bg-blue-700 transition text-center"
        >
          Get Started Free
        </a>

        <a
          href="/login"
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/30
                     backdrop-blur hover:bg-white/10 transition text-center"
        >
          Login
        </a>
      </motion.div>

      {/* RATINGS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="mt-10 flex items-center gap-4 text-sm text-gray-300"
      >
        <div className="text-yellow-400">★★★★★</div>
        <span>4.8/5 rating from 2,000+ reviews</span>
      </motion.div>

    </div>
  </div>
</section>




{/* ABOUT TENANTSCORE */}
<section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">

  {/* Smoke / Glow Background */}
  <div className="absolute -top-40 -left-40 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
  <div className="absolute top-40 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-indigo-600/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      <span className="inline-block mb-4 text-blue-400 font-semibold tracking-wide">
        ABOUT TENANTSCORE
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        Smart Platform Built For <br className="hidden sm:block" />
        <span className="text-blue-500">Modern Rentals</span>
      </h2>

      <p className="mt-6 text-lg text-gray-400 max-w-xl">
        TenantScore helps landlords, tenants and property managers
        manage rentals, payments, trust and short-stays
        from one powerful and secure platform.
      </p>

      {/* ICON BOXES */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl">

        {/* BOX 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-4 items-start bg-white/5 p-5 rounded-xl border border-white/10"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
            ★
          </div>
          <div>
            <h4 className="text-white font-semibold">Tenant Scoring</h4>
            <p className="text-sm text-gray-400">
              Build trust using verified tenant scores.
            </p>
          </div>
        </motion.div>

        {/* BOX 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4 items-start bg-white/5 p-5 rounded-xl border border-white/10"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
            👤
          </div>
          <div>
            <h4 className="text-white font-semibold">User Management</h4>
            <p className="text-sm text-gray-400">
              Manage tenants and landlords easily.
            </p>
          </div>
        </motion.div>

      </div>

      {/* BUTTON */}
      <a
        href="/signup"
        className="inline-block mt-10 px-8 py-4 rounded-xl
                   bg-blue-600 text-white font-semibold
                   hover:bg-blue-700 transition"
      >
        Know More
      </a>

    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >

      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Building"
        className="rounded-2xl shadow-2xl"
      />

      {/* Floating Star */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 bg-white/10 backdrop-blur
                   px-4 py-3 rounded-xl border border-white/20 text-white text-sm"
      >
        ⭐ 4.8 Rated Platform
      </motion.div>

      {/* Floating Users */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 -right-6 bg-white/10 backdrop-blur
                   px-4 py-3 rounded-xl border border-white/20 text-white text-sm"
      >
        👥 10,000+ Users
      </motion.div>

    </motion.div>

  </div>
</section>

<div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />


{/* OUR SERVICES */}
<section className="relative py-16 sm:py-24 md:py-32">

  {/* Background Glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-blue-600/20 rounded-full blur-[160px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto px-4 sm:px-0"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Our <span className="text-blue-500">Services</span>
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        Everything you need to manage rentals, tenants and short-stays —
        built with performance, security and simplicity.
      </p>
    </motion.div>

    {/* SERVICES GRID */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
          }
        }
      }}
      className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >

      {[
        "Tenant Scoring",
        "Rent Payments",
        "Short-Stay Bookings",
        "Property Management",
        "Landlord Dashboard",
        "Admin Controls",
        "Wallet System",
        "Analytics & Reports",
        "User Verification"
      ].map((service, index) => (

        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
          className="group bg-white/5 backdrop-blur-xl
                     border border-white/10 rounded-2xl
                     p-8 flex flex-col justify-between
                     hover:border-blue-500 transition-all duration-500"
        >

          {/* CONTENT */}
          <div className="transition-transform duration-500 group-hover:-translate-y-2">

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center
                            rounded-xl bg-blue-600/20 text-blue-400 text-xl">
              ★
            </div>

            {/* TITLE */}
            <h3 className="mt-6 text-xl font-semibold text-white">
              {service}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Powerful tools designed to simplify rental operations
              and enhance tenant trust.
            </p>
          </div>

          {/* BUTTON AREA */}
          <div className="mt-6 overflow-hidden">
            <a
              href="/signup"
              className="inline-block px-6 py-3 bg-blue-600 rounded-lg
                         text-white text-sm font-semibold
                         translate-y-6 opacity-0
                         group-hover:translate-y-0
                         group-hover:opacity-100
                         transition-all duration-500"
            >
              Learn More
            </a>
          </div>

        </motion.div>
      ))}

    </motion.div>
  </div>
</section>


<div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />


{/* WORKFLOW SECTION */}
<section className="relative py-16 sm:py-24 md:py-32">

  {/* Glow Background */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-blue-600/20 rounded-full blur-[160px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto px-4 sm:px-0"
    >
      <span className="text-blue-400 font-semibold tracking-wide text-sm">
        HOW IT WORKS
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Simple Workflow, <span className="text-blue-500">Powerful Results</span>
      </h2>
      <p className="mt-6 text-lg text-gray-400">
        Follow a seamless process that takes you from onboarding
        to successful rental management.
      </p>
    </motion.div>

    {/* WORKFLOW GRID */}
    <div className="mt-12 sm:mt-16 md:mt-24 space-y-12 sm:space-y-16 md:space-y-20">

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10"></div>

        {[
          { title: "Create Account", icon: "👤" },
          { title: "Add Property", icon: "🏠" },
          { title: "Verify Tenants", icon: "✅" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl
                       border border-white/10 rounded-2xl p-8 text-center"
          >
            {/* ICON */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2
                            w-12 h-12 rounded-xl bg-blue-600/30
                            flex items-center justify-center text-2xl">
              {step.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Complete this step to move forward in the rental lifecycle.
            </p>
          </motion.div>
        ))}
      </div>

      {/* ROW CONNECTOR */}
      <div className="hidden md:flex justify-center">
        <div className="w-[2px] h-16 bg-white/10"></div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10"></div>

        {[
          { title: "Manage Payments", icon: "💳" },
          { title: "Track Performance", icon: "📊" },
          { title: "Grow Confidently", icon: "🚀" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl
                       border border-white/10 rounded-2xl p-8 text-center"
          >
            {/* ICON */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2
                            w-12 h-12 rounded-xl bg-blue-600/30
                            flex items-center justify-center text-2xl">
              {step.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Monitor, optimize and scale your rental operations.
            </p>
          </motion.div>
        ))}
      </div>

    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-20 md:mt-24 text-center"
    >
      <a
        href="/signup"
        className="inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-xl
                   bg-blue-600 text-white font-semibold
                   hover:bg-blue-700 transition"
      >
        Start Your Journey
      </a>
    </motion.div>

  </div>
</section>

<div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />


{/* TESTIMONIALS */}
<section className="relative py-16 sm:py-24 md:py-32">

  {/* Glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-blue-600/20 rounded-full blur-[180px]" />

  {/* HEADER (CENTERED) */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
    <span className="text-blue-400 font-semibold tracking-wide">
      TESTIMONIALS
    </span>

    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      Loved by <span className="text-blue-500">Landlords & Tenants</span>
    </h2>

    <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
      Hear what our users say about managing rentals smarter with TenantScore.
    </p>
  </div>

  {/* FULL WIDTH MARQUEE */}
  <div className="relative mt-12 sm:mt-16 md:mt-24 w-screen">

    {/* EDGE FADE */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

    {/* ROW 1 */}
    <div className="overflow-hidden py-6">
      <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loop) =>
          [
            { name: "Sneha R", role: "Tenant", text: "The tenant score system builds real trust. Renting has never felt this transparent." },
            { name: "Rohit S", role: "Property Manager", text: "One dashboard for everything — properties, tenants, and analytics. Love the UI!" },
            { name: "Divya K", role: "Landlord", text: "Short-stay bookings and long-term rentals in one platform is a game changer." },
            { name: "Arun K", role: "Landlord", text: "TenantScore simplified my rental business completely. Payments are effortless." },
          ].map((t, i) => (
            <div
              key={`${loop}-${i}`}
              className="min-w-[280px] sm:min-w-[340px] max-w-[280px] sm:max-w-[340px]
                         bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl
                         p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                  👤
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold truncate">{t.name}</h4>
                  <p className="text-xs text-gray-400 truncate">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-4 text-yellow-400">★★★★★</div>
            </div>
          ))
        )}
      </div>
    </div>

    {/* ROW 2 (REVERSE) */}
    <div className="overflow-hidden py-6">
      <div className="flex gap-8 animate-marquee-reverse hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loop) =>
          [
            { name: "Meena L", role: "Tenant", text: "Wallet system and rent payments are smooth and secure." },
            { name: "Karthik M", role: "Landlord", text: "Finally a platform that feels modern and easy to use." },
            { name: "Aishwarya", role: "Property Owner", text: "The UI and animations give confidence to both tenants and owners." },
            { name: "Vikram P", role: "Admin", text: "Admin controls and score management are super intuitive and powerful." },
          ].map((t, i) => (
            <div
              key={`${loop}-${i}`}
              className="min-w-[280px] sm:min-w-[340px] max-w-[280px] sm:max-w-[340px]
                         bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl
                         p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600/30 flex items-center justify-center flex-shrink-0">
                  👤
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold truncate">{t.name}</h4>
                  <p className="text-xs text-gray-400 truncate">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-4 text-yellow-400">★★★★★</div>
            </div>
          ))
        )}
      </div>
    </div>

  </div>
</section>

<div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />


{/* STATS SECTION */}
<section className="relative py-16 sm:py-24 md:py-32">

  {/* Glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2
                  w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-blue-600/20
                  rounded-full blur-[160px]" />

  {/* Counter Hook */}
  {(() => {
    const Counter = ({ end }) => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
      }, [end]);

      return <>{count.toLocaleString()}+</>;
    };

    const stats = [
      { label: "Active Properties", value: 12500, icon: "🏠" },
      { label: "Verified Tenants", value: 48000, icon: "👤" },
      { label: "Monthly Transactions", value: 320000, icon: "💳" },
      { label: "Cities Covered", value: 120, icon: "🌍" },
    ];

    return (
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold tracking-wide"
        >
          PLATFORM STATS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Trusted at Scale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
        >
          Numbers that prove our impact across rentals, short-stays and tenant trust.
        </motion.p>

        {/* Stats Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl
                         p-8 hover:border-blue-500 transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-xl
                              bg-blue-600/20 text-blue-400
                              flex items-center justify-center text-2xl
                              group-hover:scale-110 transition">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mt-6 text-4xl font-bold text-white">
                <Counter end={stat.value} />
              </div>

              {/* Label */}
              <p className="mt-3 text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  })()}
</section>

<div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />


{/* CTA SECTION */}
<section className="relative py-16 sm:py-24 md:py-32">

  {/* Glow Effects */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                  w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-blue-600/25 
                  rounded-full blur-[180px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl
                 border border-white/10 rounded-3xl
                 px-6 sm:px-10 py-12 sm:py-20 text-center"
    >

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2
                   px-4 py-2 rounded-full
                   bg-blue-600/20 text-blue-400
                   text-xs sm:text-sm font-semibold mb-6"
      >
        🚀 Get Started Today
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
      >
        Manage Rentals Smarter with{" "}
        <span className="text-blue-500">TenantScore</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
      >
        Join thousands of landlords, tenants and property managers
        using TenantScore to manage rentals, payments and bookings
        effortlessly.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
      >
        <a
          href="/signup"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-xl
                     font-semibold text-white
                     hover:bg-blue-700 transition text-center"
        >
          Create Free Account
        </a>

        <a
          href="/login"
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                     border border-white/20
                     text-white backdrop-blur
                     hover:bg-white/10 transition text-center"
        >
          Login
        </a>
      </motion.div>

    </motion.div>
  </div>
</section>

    </div>
  );
}
