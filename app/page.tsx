"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Gift, Music, Sparkles, Mail, BookOpen, Clock, Cat } from "lucide-react"
import HeroSection from "./components/hero-section"
import LoveReasonGenerator from "./components/love-reason-generator"
import InteractiveLoveStory from "./components/interactive-love-story"
import AnimatedLoveLetterScroll from "./components/animated-love-letter-scroll"
import PersonalizedPoetry from "./components/personalized-poetry"
import VirtualGiftBox from "./components/virtual-gift-box"
import StarrySkySkyAnimation from "./components/starry-sky-animation"
import MeaningfulPlaylist from "./components/meaningful-playlist"
import MessageInBottle from "./components/message-in-bottle"
import VirtualCatCafe from "./components/virtual-cat-cafe"

const navigationItems = [
  { id: "hero", label: "Home", icon: Heart },
  { id: "reasons", label: "Reasons I Love You", icon: Sparkles },
  { id: "story", label: "Our Story", icon: Clock },
  { id: "letter", label: "Love Letter", icon: Mail },
  { id: "poetry", label: "Poetry", icon: BookOpen },
  { id: "gifts", label: "Gift Box", icon: Gift },
  { id: "bottles", label: "Message Bottles", icon: Mail },
  { id: "cats", label: "Our Cat Café", icon: Cat },
  { id: "playlist", label: "Our Songs", icon: Music, hidden: true },
]

export default function ChafiaLoveWebsite() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNavigation(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection />
      case "reasons":
        return <LoveReasonGenerator />
      case "story":
        return <InteractiveLoveStory />
      case "letter":
        return <AnimatedLoveLetterScroll />
      case "poetry":
        return <PersonalizedPoetry />
      case "gifts":
        return <VirtualGiftBox />
      case "bottles":
        return <MessageInBottle />
      case "cats":
        return <VirtualCatCafe />
      case "playlist":
        return <MeaningfulPlaylist />
      default:
        return <HeroSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Starry Sky Background */}
      <StarrySkySkyAnimation />

      {/* Navigation */}
      <AnimatePresence>
        {showNavigation && (
          <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-4 top-4 bottom-4 z-50 w-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200 flex flex-col"
          >
            {/* Header */}
            <div className="p-3 border-b border-pink-200">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
              <div className="flex flex-col gap-2 px-2">
                {navigationItems.filter(item => !item.hidden).map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`p-3 rounded-xl transition-all duration-300 group relative ${activeSection === item.id
                        ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg"
                        : "hover:bg-pink-100 text-pink-600"
                        }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      <motion.div
                        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        {item.label}
                        {/* Tooltip arrow */}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                      </motion.div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Footer indicator */}
            <div className="p-2 border-t border-pink-200">
              <div className="text-xs text-center text-pink-400">
                {navigationItems.findIndex((item) => item.id === activeSection) + 1}/{navigationItems.length}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
