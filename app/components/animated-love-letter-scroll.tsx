"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Feather } from "lucide-react"

const loveLetterText = `My Dearest chouchouutiiiiii,

Where do I even begin to express the depth of my love for you? Every word feels inadequate when trying to capture the way you make me feel, but I'll try anyway because you deserve to know just how much you mean to me.

From the very first moment I saw you, something inside me changed forever. It was as if the universe had been waiting for that exact moment to show me what true beauty looks like. Your smile, your eyes, the way you carry yourself with such grace and elegance - everything about you took my breath away.

But it wasn't just your outer beauty that captivated me. As I got to know you, I discovered the most incredible soul. Your kindness, your intelligence, your passion for life, your way of seeing beauty in the smallest things - all of these qualities made me fall deeper and deeper in love with you.

You have this amazing ability to light up any room you enter. Your laugh is like music to my ears, and your voice is the sweetest sound I've ever heard. When you speak, I hang on every word, not just because of what you're saying, but because of the beautiful way you express yourself.

I love how you get excited about the things you're passionate about. I love how you care so deeply for the people in your life. I love how you dream big and aren't afraid to chase those dreams. I love how you make even the ordinary moments feel extraordinary just by being there.

Every day, I find new reasons to love you. The way you scrunch your nose when you're thinking, the way you play with your hair when you're nervous, the way you get sleepy and cuddly in the evening - these little things that make you uniquely you are what I treasure most.

I want you to know that my love for you isn't just a feeling - it's a choice I make every single day. I choose to love you in your happy moments and your sad ones, in your confident moments and your vulnerable ones, in your silly moments and your serious ones. I love all of you, completely and unconditionally.

I dream of a future with you my beautiful angelic queen. I dream of waking up next to you every morning, of sharing coffee and conversations, of exploring the world together, of creating beautiful memories that we'll cherish forever. I dream of being the person who gets to love you for the rest of my life.

You are my sunshine on cloudy days, my calm in the storm, my hope when things seem impossible. You are my best friend, my greatest love, my everything. I am so grateful that you exist, that our paths crossed, that I get to experience the miracle of loving you.

I know we're not together right now, but that doesn't change how I feel about you. If anything, it makes me love you more because I know that what I feel for you is real, pure, and unconditional. You don't have to love me back for me to love you - I love you simply because you are you.

Thank you for being the incredible person you are. Thank you for inspiring me to be better. Thank you for showing me what true love feels like. Thank you for being my sweet, kind, lovely, pretty and cute chouchouuutiii.

I will love you today, tomorrow, and for all the days that follow.

Forever yours,
With all my love and devotion`

export default function AnimatedLoveLetterScroll() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1])

  useEffect(() => {
    if (currentIndex < loveLetterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + loveLetterText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="min-h-screen p-4 py-20">
      <motion.div className="max-w-4xl mx-auto" style={{ opacity, scale }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">A Love Letter for You</h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Feather className="w-5 h-5" />
            <span>Written with all my heart</span>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          {/* Paper Background */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl border border-pink-200 overflow-hidden">
            {/* Paper Lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="h-8 border-b border-pink-300" />
              ))}
            </div>

            {/* Letter Content */}
            <div className="relative z-10 p-8 md:p-12">
              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="font-serif text-gray-800 leading-relaxed whitespace-pre-line text-lg">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block w-0.5 h-6 bg-pink-500 ml-1"
                  />
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-6 h-6 text-pink-300" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-6 h-6 text-rose-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 italic">Scroll to see the letter unfold as my heart pours out to you...</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
