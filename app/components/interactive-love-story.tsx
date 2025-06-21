"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Calendar, MapPin, Star, Lock, Moon, Zap, BookOpen, Laugh, CheckSquare, Globe, Send, Gift } from "lucide-react"

const storyMilestones = [
  {
    date: "The Beginning",
    title: "When I First Saw You",
    description:
      "The first time my eyes found you, we were just friends sharing everyday moments. I didn’t realize then, but something inside me quietly shifted, waiting for the right time to bloom.",
    icon: Star,
    color: "from-pink-400 to-rose-400",
  },
  {
    date: "First Conversation",
    title: "Your Voice Took Over My Heart",
    description:
      "When you spoke, it wasn’t just your words, it was how they reached inside me and stayed. Over time, every sound, every pause, every breath became part of a feeling I couldn’t ignore.",
    icon: Heart,
    color: "from-rose-400 to-red-400",
  },
  {
    date: "Growing Closer",
    title: "You Became My World",
    description:
      "Day after day, moment after moment, I felt myself drowning in you, and I didn’t want to escape. Every second with you became the most important thing in my life.",
    icon: Calendar,
    color: "from-red-400 to-pink-400",
  },
  {
    date: "Realizing My Love",
    title: "I Love you chouuchouutii",
    description:
      "The moment I realized that what I felt wasn't just attraction or admiration, it was pure, deep, unconditional love.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    date: "Every Day Since",
    title: "Falling Deeper Forever",
    description:
      "You became the rhythm of my soul. Every breath, every thought, every dream has your name written on it. Loving you is the only thing that feels true.",
    icon: Star,
    color: "from-rose-500 to-red-500",
  },
  {
    date: "Our Future",
    title: "No Life Without You",
    description:
      "I don’t just dream of a future with you, I breathe it, I live for it. A life without you isn’t a life at all. I only see one road ahead, and it’s with your hand in mine.",
    icon: MapPin,
    color: "from-red-500 to-pink-500",
  },
  {
    date: "First Shared Secret",
    title: "My Soul in Your Hands",
    description:
      "When I opened up to you, it wasn’t just a secret, it was a piece of my heart. And you held it with a care that made me yours even more.",
    icon: Lock,
    color: "from-blue-400 to-cyan-400",
  },
  {
    date: "First Moment of Silence",
    title: "Just You, Just Us",
    description:
      "In the silence, you still spoke to my soul. I never needed words, just your presence was louder than anything else in this world.",
    icon: Moon,
    color: "from-gray-400 to-gray-600",
  },
  {
    date: "First Challenge",
    title: "Unbreakable",
    description:
      "Even when we faced pain or confusion, I never doubted one thing, my place is with you. Through anything. Always. Nothing can tear this away.",
    icon: Zap,
    color: "from-red-500 to-yellow-500",
  },
  {
    date: "Discovering Your Passions",
    title: "All of You Is Sacred",
    description:
      "Everything you care about, everything you dream of, it became sacred to me. Your passions, your thoughts, your soul, they became part of my reason to exist.",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-500",
  },
  {
    date: "Shared Laughter",
    title: "You Make My Heart Laugh",
    description:
      "When you laugh, it’s not just sound, it’s music to my soul. I could live a thousand lives and never get tired of hearing your joy.",
    icon: Laugh,
    color: "from-yellow-400 to-orange-400",
  },
  {
    date: "First Promise",
    title: "I Am Yours",
    description:
      "When I promised you anything, it wasn’t from my lips, it was from my whole being. I am not just in love with you. I *belong* to you.",
    icon: CheckSquare,
    color: "from-teal-400 to-cyan-400",
  },
  {
    date: "Shared Dreams",
    title: "Our Tomorrow, Our Always",
    description:
      "Every future I imagine has you at the center. There is no 'one day', there is only 'us'. You are not just in my plans. You *are* my plan.",
    icon: Globe,
    color: "from-green-400 to-emerald-400",
  },
  {
    date: "First Time Apart",
    title: "Everything Feels Empty Without You",
    description:
      "The world keeps moving, but when you're not there, it means nothing. You’ve become my air, my calm, my need.",
    icon: Send,
    color: "from-blue-300 to-blue-500",
  },
  {
    date: "Small Surprises",
    title: "Your Smile Is My Reward",
    description:
      "Every time I made you smile, I felt something powerful inside me. Your happiness is the most beautiful thing I’ve ever seen.",
    icon: Gift,
    color: "from-pink-300 to-purple-300",
  },
  {
    date: "Everyday Moments",
    title: "You Made Life Magic",
    description:
      "Even the ordinary became unforgettable with you. You turned minutes into memories, and days into poetry. You *are* my meaning.",
    icon: Calendar,
    color: "from-red-400 to-pink-400",
  }
]

export default function InteractiveLoveStory() {
  const [activeStory, setActiveStory] = useState(0)

  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16"
        >
          Our Love Story Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-rose-300 to-red-300 rounded-full" />

          {/* Story Points */}
          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} border-4 border-white shadow-lg z-10 cursor-pointer`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveStory(index)}
                  >
                    <motion.div
                      animate={activeStory === index ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      className="w-full h-full rounded-full"
                    />
                  </motion.div>

                  {/* Story Card */}
                  <motion.div
                    className={`w-full max-w-md ${isLeft ? "mr-auto pr-8" : "ml-auto pl-8"}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-200 ${isLeft ? "text-right" : "text-left"}`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                        <div className={`p-2 rounded-full bg-gradient-to-r ${milestone.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{milestone.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>

                      <AnimatePresence>
                        {activeStory === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-600 leading-relaxed"
                          >
                            {milestone.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {activeStory !== index && (
                        <motion.button
                          onClick={() => setActiveStory(index)}
                          className="text-pink-500 hover:text-pink-600 font-medium text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          Read more...
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 italic">This is just the beginning of our beautiful story chouuchouutii kokojaaatiiii...</p>
        </motion.div>
      </div>
    </div>
  )
}
