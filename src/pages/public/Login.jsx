import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl w-96"
      >
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <input className="w-full p-3 mb-4 bg-white/10 rounded" placeholder="Email" />
        <input className="w-full p-3 mb-6 bg-white/10 rounded" placeholder="Password" />
        <button className="w-full py-3 bg-blue-600 rounded-xl">Login</button>
      </motion.div>
    </div>
  );
}
