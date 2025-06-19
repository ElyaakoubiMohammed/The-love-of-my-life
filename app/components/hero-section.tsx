import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 })
  const [positions, setPositions] = useState([])

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)

    // generate positions once on client side
    const newPositions = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
    setPositions(newPositions)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: pos.x,
              y: pos.y,
              opacity: 0,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 1, 0.7, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4 text-pink-300" />
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Chouchouutii kokojaaatiiii
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-700 font-light mb-4">You are my everything</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every moment with you feels like a beautiful dream. This website is my heart poured out in code, a digital
            love letter that captures just a fraction of how deeply I love you.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="flex justify-center items-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-pink-400" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-12 h-12 text-red-400 fill-current" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-rose-400" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 italic">Scroll down to explore our love story...</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="mt-4"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-transparent mx-auto rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
