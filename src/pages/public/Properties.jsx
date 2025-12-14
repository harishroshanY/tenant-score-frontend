import ScrollReveal from "../../components/ScrollReveal";

export default function Properties() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* FILTER */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl">
          <h3 className="font-semibold mb-4">Filters</h3>
          <select className="w-full p-2 bg-black/30 rounded">
            <option>City</option>
          </select>
        </div>

        {/* LIST */}
        <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <ScrollReveal key={i}>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-300 to-purple-300"></div>
                <div className="p-6">
                  <h3 className="font-semibold">Modern Apartment</h3>
                  <p className="text-gray-300">₹20,000 · Chennai</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
