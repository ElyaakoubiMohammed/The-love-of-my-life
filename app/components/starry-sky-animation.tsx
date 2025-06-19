"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function StarrySkySkyAnimation() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-pink-200 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Chafia constellation */}
      <div className="absolute top-1/4 right-1/4">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="relative"
        >
          {/* C */}
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "0px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "0px", top: "20px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "0px", top: "40px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "20px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "20px", top: "40px" }} />

          {/* H */}
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "40px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "40px", top: "20px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "40px", top: "40px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "60px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "60px", top: "20px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "60px", top: "40px" }} />

          {/* A */}
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "80px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "80px", top: "20px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "80px", top: "40px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "100px", top: "0px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "100px", top: "20px" }} />
          <div className="absolute w-2 h-2 bg-pink-300 rounded-full" style={{ left: "100px", top: "40px" }} />
        </motion.div>
      </div>
    </div>
  )
}
