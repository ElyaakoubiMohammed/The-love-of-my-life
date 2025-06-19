"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, RefreshCw, Sparkles } from "lucide-react"

const loveReasons = [
  "Your smile lights up my entire world and makes everything better",
  "The way you laugh makes my heart skip a beat every single time",
  "Your kindness and compassion inspire me to be a better person",
  "You have the most beautiful eyes I've ever seen",
  "Your intelligence and wit never cease to amaze me",
  "The way you care for others shows your beautiful soul",
  "Your voice is like music to my ears",
  "You make even the ordinary moments feel magical",
  "Your strength and resilience inspire me every day",
  "The way you see beauty in everything around you",
  "Your gentle touch sends shivers down my spine",
  "You have the most adorable way of concentrating",
  "Your dreams and ambitions make me fall for you more",
  "The way you make me feel safe and loved",
  "Your creativity and imagination blow my mind",
  "You smell like heaven and feel like home",
  "The way you dance when you think no one is watching",
  "Your passion for life is absolutely contagious",
  "You make me want to be the best version of myself",
  "The way you scrunch your nose when you're thinking",
  "Your hugs feel like coming home after a long journey",
  "You have the most beautiful handwriting",
  "The way you get excited about little things",
  "Your empathy and understanding heart",
  "You make me believe in fairy tales and happy endings",
  "The way you bite your lip when you're concentrating",
  "Your love for animals shows your pure heart",
  "You have the most infectious positive energy",
  "The way you make everyone around you feel special",
  "Your courage to chase your dreams inspires me",
  "You have the softest skin I've ever touched",
  "The way you sing in the shower makes me smile",
  "Your ability to find joy in simple moments",
  "You make me feel like the luckiest person alive",
  "The way you play with your hair when you're nervous",
  "Your love for books and stories captivates me",
  "You have the most genuine and pure heart",
  "The way you make me laugh until my stomach hurts",
  "Your determination and perseverance amaze me",
  "You smell like flowers and taste like sunshine",
  "The way you get sleepy and cuddly in the evening",
  "Your ability to make any place feel like home",
  "You have the most expressive and beautiful face",
  "The way you care about your family and friends",
  "Your love for adventure and trying new things",
  "You make me feel understood and accepted",
  "The way you twirl when you're happy",
  "Your wisdom beyond your years astounds me",
  "You have the most melodious laugh",
  "The way you make ordinary days extraordinary",
  // Adding many more reasons...
  "Your morning voice is the sweetest sound",
  "The way you get excited about your favorite foods",
  "Your ability to make me feel calm in chaos",
  "You have the most graceful way of moving",
  "The way you remember little details about everyone",
  "Your love for sunsets and beautiful moments",
  "You make me believe in true love",
  "The way you blush when I compliment you",
  "Your strength in facing challenges head-on",
  "You have the most beautiful soul I've ever known",
  "The way you make me feel like I'm flying",
  "Your love for learning new things",
  "You smell like my favorite memory",
  "The way you get passionate about causes you believe in",
  "Your ability to see the good in everyone",
  "You make me want to write poetry",
  "The way you stretch in the morning like a cat",
  "Your love for cozy blankets and warm drinks",
  "You have the most captivating storytelling voice",
  "The way you make me feel brave and confident",
  "Your appreciation for art and beauty",
  "You make every day feel like a celebration",
  "The way you get lost in your thoughts",
  "Your ability to make me feel completely loved",
  "You have the most enchanting way of speaking",
  "The way you make me believe in magic",
  "Your love for starry nights and moonlit walks",
  "You make me feel like I'm in a romantic movie",
  "The way you get excited about surprises",
  "Your ability to turn any moment into a memory",
  "You have the most beautiful dreams and aspirations",
  "The way you make me feel like I'm enough",
  "Your love for flowers and growing things",
  "You make me want to be romantic and spontaneous",
  "The way you get cozy with your favorite sweater",
  "Your ability to make me smile even when I'm sad",
  "You have the most genuine and warm personality",
  "The way you make me feel like I'm home",
  "Your love for handwritten letters and personal touches",
  "You make me believe in forever",
  "The way you get sleepy after a big meal",
  "Your ability to make any conversation interesting",
  "You have the most beautiful way of expressing yourself",
  "The way you make me feel like I'm dreaming",
  "Your love for meaningful conversations",
  "You make me want to give you the world",
  "The way you get excited about future plans",
  "Your ability to make me feel completely understood",
  "You have the most radiant smile that lights up rooms",
  "The way you make me feel like I'm the only one",
  "Your love for creating beautiful memories",
  "You make me believe in happily ever after",
  "The way you get comfortable in my arms",
  "Your ability to make me feel completely cherished",
  "You have the most beautiful heart full of love",
  "The way you make every moment feel precious",
  "Your love for life and all its possibilities",
  "You make me want to be romantic every single day",
  "The way you get excited about our future together",
  "Your ability to make me feel like I'm flying",
  "You have the most beautiful way of loving",
  "The way you make me feel like I'm in paradise",
]

export default function LoveReasonGenerator() {
  const [currentReason, setCurrentReason] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const generateNewReason = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentReason(Math.floor(Math.random() * loveReasons.length))
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      generateNewReason()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
        >
          Reasons I Love You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-12"
        >
          I have countless reasons why I love you. Here's one of them...
        </motion.p>

        <div className="relative mb-12">
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Heart className="w-6 h-6 text-pink-300" />
            </div>
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-rose-300" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-6 h-6 text-red-300" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Heart className="w-6 h-6 text-pink-300" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReason}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic">
                  "{loveReasons[currentReason]}"
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.button
          onClick={generateNewReason}
          disabled={isAnimating}
          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={isAnimating ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
            <RefreshCw className="w-5 h-5" />
          </motion.div>
          Show Me Another Reason
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>
            Reason #{currentReason + 1} of {loveReasons.length}+ reasons
          </p>
        </motion.div>
      </div>
    </div>
  )
}
