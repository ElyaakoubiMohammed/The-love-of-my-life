"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Sparkles, Lock, Unlock } from "lucide-react"

const gifts = [
  {
    id: 1,
    name: "A Virtual Rose",
    description: "A beautiful red rose that will never wilt, just like my love for you",
    emoji: "🌹",
    message: "This rose represents the eternal beauty I see in you every day",
    color: "from-red-400 to-pink-400",
  },
  {
    id: 2,
    name: "Love Letter",
    description: "A handwritten letter expressing my deepest feelings",
    emoji: "💌",
    message: "Every word in this letter comes straight from my heart to yours",
    color: "from-pink-400 to-rose-400",
  },
  {
    id: 3,
    name: "Promise Ring",
    description: "A symbol of my commitment and eternal love",
    emoji: "💍",
    message: "This ring represents my promise to love you forever and always",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 4,
    name: "Chocolate Hearts",
    description: "Sweet treats as sweet as you are",
    emoji: "🍫",
    message: "These chocolates are sweet, but not as sweet as your smile",
    color: "from-amber-400 to-orange-400",
  },
  {
    id: 5,
    name: "Teddy Bear",
    description: "A cuddly companion to keep you company",
    emoji: "🧸",
    message: "This teddy bear will hug you when I can't be there",
    color: "from-yellow-400 to-amber-400",
  },
  {
    id: 6,
    name: "Love Song",
    description: "A melody that captures how you make me feel",
    emoji: "🎵",
    message: "This song plays the rhythm of my heart beating for you",
    color: "from-blue-400 to-purple-400",
  },
  {
    id: 7,
    name: "Candlelight Dinner",
    description: "A cozy dinner lit by candlelight",
    emoji: "🕯️",
    message: "Let’s pretend we’re having dinner under the stars, just you and me.",
    color: "from-amber-300 to-red-400",
  },
  {
    id: 8,
    name: "Moonlit Walk",
    description: "A peaceful evening stroll beneath the stars",
    emoji: "🌙",
    message: "Walking hand-in-hand under the moon is one of life's greatest joys.",
    color: "from-indigo-400 to-blue-400",
  },
  {
    id: 9,
    name: "Movie Night",
    description: "A cinematic experience right at home",
    emoji: "🎬",
    message: "Popcorn ready, movie queued up – let’s watch something magical together.",
    color: "from-gray-700 to-gray-500",
  },
  {
    id: 10,
    name: "Sunset View",
    description: "A breathtaking view of a perfect sunset",
    emoji: "🌇",
    message: "Evening skies remind me of how beautiful our moments are together.",
    color: "from-orange-300 to-pink-400",
  },
  {
    id: 11,
    name: "Hot Cocoa",
    description: "Warmth in a mug on a chilly day",
    emoji: "☕",
    message: "Sip by sip, this cocoa brings comfort just like your hugs.",
    color: "from-brown-600 to-amber-800",
  },
  {
    id: 12,
    name: "Rainbow Surprise",
    description: "Colorful joy after the storm",
    emoji: "🌈",
    message: "Like a rainbow after rain, you bring light into my life.",
    color: "from-indigo-400 via-pink-400 to-yellow-300",
  },
  {
    id: 13,
    name: "Fireworks Show",
    description: "A dazzling display of lights",
    emoji: "🎆",
    message: "You're the spark that sets off fireworks in my heart.",
    color: "from-purple-700 to-pink-600",
  },
  {
    id: 14,
    name: "Balloon Flight",
    description: "Soaring high above the clouds",
    emoji: "🎈",
    message: "With you, I feel like I'm floating on air.",
    color: "from-cyan-400 to-teal-400",
  },
  {
    id: 15,
    name: "Star Gazing",
    description: "Countless stars lighting up the night",
    emoji: "✨",
    message: "The stars shine bright because they know how special you are.",
    color: "from-sky-600 to-indigo-800",
  },
  {
    id: 16,
    name: "Dance Party",
    description: "Groove to your favorite tunes",
    emoji: "💃",
    message: "Dancing with you is pure happiness wrapped in music.",
    color: "from-green-400 to-lime-400",
  },
  {
    id: 17,
    name: "Adventure Map",
    description: "Journey through memories and dreams",
    emoji: "🗺️",
    message: "Let’s explore the world together – one adventure at a time.",
    color: "from-emerald-400 to-amber-500",
  },
  {
    id: 18,
    name: "Treasure Chest",
    description: "A box full of precious memories",
    emoji: "🪙",
    message: "Every moment with you feels like discovering hidden treasure.",
    color: "from-yellow-400 to-amber-600",
  },
  {
    id: 19,
    name: "Wishing Star",
    description: "Make a wish that comes true",
    emoji: "🌟",
    message: "If I could make only one wish, it would be to spend forever with you.",
    color: "from-blue-300 to-purple-500",
  },
  {
    id: 20,
    name: "Butterfly Kisses",
    description: "Soft and gentle flutter of affection",
    emoji: "🦋",
    message: "Your presence gives my heart those butterfly feelings every time.",
    color: "from-violet-300 to-fuchsia-400",
  },
  {
    id: 21,
    name: "Ocean Breeze",
    description: "Fresh waves and sea air",
    emoji: "🌊",
    message: "Just like the ocean, my love for you is deep and endless.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 22,
    name: "Campfire Stories",
    description: "Tales told by the firelight",
    emoji: "🔥",
    message: "Gather 'round – I’ll tell stories of how amazing you make my life.",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 23,
    name: "Puzzle of Love",
    description: "Each piece fits perfectly with you",
    emoji: "🧩",
    message: "You complete me like the final piece of a puzzle.",
    color: "from-teal-400 to-blue-400",
  },
  {
    id: 24,
    name: "Time Machine",
    description: "Reliving our best moments",
    emoji: "⏳",
    message: "I’d rewind time just to fall in love with you all over again.",
    color: "from-slate-500 to-indigo-500",
  },
  {
    id: 25,
    name: "Garden of Memories",
    description: "A place where happy times bloom forever",
    emoji: "🌸",
    message: "Every petal here reminds me of a beautiful memory with you.",
    color: "from-lime-300 to-pink-300",
  },
  {
    id: 26,
    name: "Sky Lantern",
    description: "Lighting up the night sky",
    emoji: "🏮",
    message: "This lantern carries my hopes and dreams for us both.",
    color: "from-orange-300 to-rose-400",
  },
  {
    id: 27,
    name: "Memory Album",
    description: "Pages filled with joyful moments",
    emoji: "📷",
    message: "Flipping through these pages makes me smile – just like seeing you.",
    color: "from-amber-400 to-red-500",
  },
  {
    id: 28,
    name: "Tea for Two",
    description: "A warm cup shared with someone special",
    emoji: "🍵",
    message: "There’s no better way to start the day than with you and tea.",
    color: "from-rose-300 to-amber-400",
  },
  {
    id: 29,
    name: "Fairy Tale Ending",
    description: "A happily ever after moment",
    emoji: "👑",
    message: "You're my prince/princess, and I wouldn’t want any other ending.",
    color: "from-pink-400 to-purple-400",
  },
  {
    id: 30,
    name: "Confetti Explosion",
    description: "Celebration bursting with joy",
    emoji: "🎉",
    message: "You bring celebration into my life every single day!",
    color: "from-indigo-400 to-pink-500",
  },
]

export default function VirtualGiftBox() {
  const [openedGifts, setOpenedGifts] = useState<number[]>([])
  const [selectedGift, setSelectedGift] = useState<number | null>(null)

  const openGift = (giftId: number) => {
    if (!openedGifts.includes(giftId)) {
      setOpenedGifts([...openedGifts, giftId])
    }
    setSelectedGift(giftId)
  }

  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Virtual Gift Box</h2>
          <p className="text-lg text-gray-600">Special surprises and messages, wrapped with love just for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gifts.map((gift, index) => {
            const isOpened = openedGifts.includes(gift.id)
            return (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className={`bg-gradient-to-br ${gift.color} p-6 rounded-2xl shadow-xl cursor-pointer relative overflow-hidden`}
                  whileHover={{ scale: 1.05, rotate: isOpened ? 0 : 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openGift(gift.id)}
                >
                  {/* Gift wrapping effect */}
                  <AnimatePresence>
                    {!isOpened && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center"
                      >
                        <div className="text-center text-white">
                          <Gift className="w-12 h-12 mx-auto mb-2" />
                          <Lock className="w-6 h-6 mx-auto" />
                        </div>
                        {/* Ribbon effect */}
                        <div className="absolute inset-x-0 top-1/2 h-4 bg-yellow-400 transform -translate-y-1/2" />
                        <div className="absolute inset-y-0 left-1/2 w-4 bg-yellow-400 transform -translate-x-1/2" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Gift content */}
                  <AnimatePresence>
                    {isOpened && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-center text-white"
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="text-6xl mb-4"
                        >
                          {gift.emoji}
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">{gift.name}</h3>
                        <p className="text-sm opacity-90">{gift.description}</p>
                        <Unlock className="w-6 h-6 mx-auto mt-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Sparkle effects */}
                  {isOpened && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        >
                          <Sparkles className="w-4 h-4 text-white" />
                        </motion.div>
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Gift message display */}
        <AnimatePresence>
          {selectedGift && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-pink-200 text-center"
            >
              {(() => {
                const gift = gifts.find((g) => g.id === selectedGift)!
                return (
                  <>
                    <div className="text-6xl mb-4">{gift.emoji}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{gift.name}</h3>
                    <p className="text-lg text-gray-600 italic leading-relaxed max-w-2xl mx-auto">"{gift.message}"</p>
                    <motion.button
                      onClick={() => setSelectedGift(null)}
                      className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close Message
                    </motion.button>
                  </>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            Click on each gift to unwrap a special surprise made with love for you my sweetheart!
          </p>
        </motion.div>
      </div>
    </div>
  )
}