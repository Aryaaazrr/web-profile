import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center text-white"
      animate={{
        background: [
          "linear-gradient(45deg, #ff9a9e, #fad0c4)",
          "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
          "linear-gradient(45deg, #667eea, #764ba2)"
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <h1 className="text-4xl font-bold">Framer Motion Gradient</h1>
    </motion.div>
  );
}
