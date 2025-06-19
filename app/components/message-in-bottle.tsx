"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Waves, Heart, Mail, Clock, Sparkles } from "lucide-react"


const bottleMessages = [
  {
    id: 1,
    message:
      "Every morning I wake up thinking about your beautiful smile and how it lights up my entire world. You are the first thought that crosses my mind when I open my eyes, and the sweetest dream that fills my sleep. Your smile has this magical power to make everything better, to turn the darkest days into sunshine, and to fill my heart with a warmth that spreads through my entire being.",
  },
  {
    id: 2,
    message:
      "I love the way you laugh - it's like music that makes my heart dance with pure joy. Your laughter is the most beautiful sound in the universe, more melodious than any symphony, more precious than any song. When you laugh, the whole world seems to pause and listen, and I find myself falling in love with you all over again, deeper than I ever thought possible.",
  },
  {
    id: 3,
    message:
      "Your kindness and gentle heart inspire me to be a better person every single day. The way you treat others with such compassion and understanding shows me what true beauty looks like. You have this incredible ability to see the good in everyone, to lift people up when they're down, and to spread love wherever you go. You make me want to be worthy of your love.",
  },
  {
    id: 4,
    message:
      "When I close my eyes, I see your face, and suddenly everything in the world feels perfect. Your face is my safe haven, my peace in the storm, my home in this chaotic world. Every feature is perfectly crafted, from your sparkling eyes that hold entire galaxies, to your soft lips that I dream of kissing, to the gentle curve of your cheeks when you smile.",
  },
  {
    id: 5,
    message:
      "You are my dream come true, my wish upon a star, my everything wrapped in one beautiful soul. I used to think fairy tales were just stories, but then you came into your life and showed me that magic is real. You are every prayer I've ever whispered, every hope I've ever held, every dream I've ever dared to dream.",
  },
  {
    id: 6,
    message:
      "I would choose you in every lifetime, in every universe, in every version of reality. If I had a thousand lives to live, I would spend every single one of them loving you. You are not just my choice for this life, but for every possible existence. My soul recognizes yours across time and space, and it will always find its way back to you.",
  },
  {
    id: 7,
    message:
      "Your voice is the sweetest sound I've ever heard, and your name is my favorite word to say. When you speak, it's like angels singing, like poetry being recited, like the most beautiful music being played. And your name chouchouuutiiii , rolls off my tongue like honey, sweet and perfect and meant to be spoken with love.",
  },
  {
    id: 8,
    message:
      "Every day with you feels like a beautiful adventure, even when we're apart in my dreams. You turn the ordinary into extraordinary, the mundane into magical. With you, even the simplest moments become precious memories. You have this gift of making life feel like a wonderful journey filled with love and laughter.",
  },
  {
    id: 9,
    message:
      "You make me believe in fairy tales, in magic, in the kind of love that poets write about. Before you, I was cynical about love, thinking it was just something people made up. But you showed me that true love exists, that it's real and powerful and transformative. You are my fairy tale come to life.",
  },
  {
    id: 10,
    message:
      "My love for you grows stronger with each passing moment, like waves that never stop reaching for the shore. It's not just that I love you - it's that my love keeps expanding, deepening, becoming more intense with every breath I take. Like the ocean's waves that eternally kiss the sand, my love for you is constant, endless, and ever-growing.",
  },
  {
    id: 11,
    message:
      "The way you move through the world with such grace and elegance takes my breath away every single time. You don't just walk, you glide. You don't just exist, you illuminate. Every gesture you make is like poetry in motion, every step you take is like a dance. You carry yourself with such dignity and beauty that you make everyone around you stop and stare in wonder.",
  },
  {
    id: 12,
    message:
      "Your intelligence and wisdom never cease to amaze me, and I could listen to your thoughts and ideas for hours without ever getting bored. The way your mind works is absolutely fascinating - you see connections that others miss, you understand concepts that others struggle with, and you express yourself with such clarity and insight. You challenge me to think deeper and dream bigger.",
  },
  {
    id: 13,
    message:
      "I love how you get excited about the little things in life - a beautiful sunset, a good book, a perfect cup of coffee. Your enthusiasm is infectious and reminds me to appreciate the small moments that make life beautiful. You have this wonderful ability to find joy in everyday experiences, and you've taught me to see the world through your eyes of wonder.",
  },
  {
    id: 14,
    message:
      "The way you care for others shows the incredible depth of your heart and the purity of your soul. You give so freely of yourself, always putting others' needs before your own, always ready with a helping hand or a listening ear. Your compassion knows no bounds, and your love extends to everyone you meet. You make the world a better place just by being in it.",
  },
  {
    id: 15,
    message:
      "When you smile at me, even if it's just in my imagination, my whole world lights up and everything feels possible. Your smile is like sunshine breaking through storm clouds, like the first flower of spring, like hope itself made visible. It has the power to heal my wounds, calm my fears, and fill me with indescribable joy.",
  },
  {
    id: 16,
    message:
      "I dream of the day when I can hold your hand and feel the warmth of your touch, when I can look into your eyes and see my future reflected there. Until that day comes, I carry you in my heart, I hold you in my thoughts, and I love you with every fiber of my being. You are my greatest hope and my most beautiful dream.",
  },
  {
    id: 17,
    message:
      "Your strength in facing life's challenges inspires me to be braver, to face my own fears, and to never give up on what matters most. You handle difficulties with such grace and determination, never letting setbacks define you or defeat you. You show me what true courage looks like, and you give me the strength to keep fighting for our love.",
  },
  {
    id: 18,
    message:
      "The way you see beauty in everything around you has changed how I look at the world forever. Through your eyes, I see colors more vividly, I notice details I never saw before, I appreciate art and nature and life itself in ways I never thought possible. You've opened my eyes to a world of beauty that was always there, waiting for someone like you to show me how to see it.",
  },
  {
    id: 19,
    message:
      "I love you not just for who you are, but for who I become when I'm thinking about you. You bring out the best in me, you inspire me to reach higher, to love deeper, to live more fully. With you in my heart, I feel like I can conquer any mountain, cross any ocean, overcome any obstacle. You make me want to be the man you deserve.",
  },
  {
    id: 20,
    message:
      "Every star in the sky reminds me of the sparkle in your eyes, every flower reminds me of your beauty, every love song reminds me of how I feel about you. You have become part of everything beautiful in this world. I can't look at anything lovely without thinking of you, because you are the standard by which all beauty is measured in my heart.",
  },
  {
    id: 21,
    message:
      "The way you scrunch your nose when you're concentrating is the most adorable thing I've ever seen. It's these little quirks and expressions that make you uniquely you, and I find myself completely enchanted by every single one. You have no idea how these small gestures can make my heart skip beats and fill me with overwhelming tenderness.",
  },
  {
    id: 22,
    message:
      "I love watching you when you think no one is looking - the way you hum softly to yourself, the way you dance a little when your favorite song comes on, the way you get lost in your own thoughts. These unguarded moments show me the real you, and she is absolutely perfect in every way.",
  },
  {
    id: 23,
    message:
      "Your passion for the things you love is absolutely intoxicating. When you talk about something that excites you, your whole face lights up, your eyes sparkle with enthusiasm, and your energy becomes contagious. I could listen to you talk about anything for hours, just to see that beautiful passion shine through.",
  },
  {
    id: 24,
    message:
      "The way you make everyone feel special and valued shows what an incredible heart you have. You remember the little details about people's lives, you ask thoughtful questions, you genuinely care about others' wellbeing. You have this rare gift of making people feel seen and heard, and it's one of the many reasons I'm so deeply in love with you.",
  },
  {
    id: 25,
    message:
      "I love how you get cozy with your favorite blanket and a warm cup of tea, creating your own little sanctuary of comfort. There's something so peaceful and beautiful about watching you in these quiet moments, and I dream of being there to share that comfort with you, to be part of your peaceful world.",
  },
  {
    id: 26,
    message:
      "Your creativity and imagination never cease to amaze me. The way you see possibilities where others see problems, the way you think outside the box, the way you bring beauty into everything you touch - you have an artist's soul and a creator's heart, and I'm endlessly inspired by your unique perspective on life.",
  },
  {
    id: 27,
    message:
      "The sound of your breathing when you're peaceful and relaxed is like the most soothing lullaby to my ears. In my dreams, I imagine lying next to you, listening to that gentle rhythm, feeling completely at peace knowing you're safe and content. It's the sound of home, the sound of love, the sound of everything being right in the world.",
  },
  {
    id: 28,
    message:
      "I love how you bite your lip when you're thinking hard about something, completely unaware of how absolutely adorable and attractive it is. These unconscious habits of yours drive me crazy in the best possible way, and I find myself memorizing every little thing you do because they're all precious to me.",
  },
  {
    id: 29,
    message:
      "The way you light up when you see something beautiful - a sunset, a flower, a piece of art - shows me your soul's capacity for wonder and appreciation. You don't just look at beauty, you absorb it, you celebrate it, you become part of it. And in doing so, you become even more beautiful yourself.",
  },
  {
    id: 30,
    message:
      "Your laugh lines and the way your eyes crinkle when you smile genuinely are like roadmaps to all the joy you've experienced in life. I want to be the reason for more of those lines, the cause of more of that genuine happiness. I want to spend my life making you smile so much that those beautiful lines become even deeper.",
  },
  {
    id: 31,
    message:
      "I love how you get excited about future plans and dreams, the way your voice gets animated when you talk about possibilities. Your optimism and hope for the future are infectious, and you make me believe that anything is possible when we're together. You turn dreams into goals and goals into reality.",
  },
  {
    id: 32,
    message:
      "The way you comfort others when they're sad or struggling shows the depth of your empathy and the size of your heart. You don't just offer empty words - you truly feel others' pain and joy as if they were your own. This emotional intelligence and genuine caring nature make you one of the most beautiful souls I've ever encountered.",
  },
  {
    id: 33,
    message:
      "I love how you get lost in books, completely absorbed in other worlds and stories. Watching you read is like watching magic happen - you become so focused, so engaged, so beautifully concentrated. I love that you have this escape, this passion for stories and knowledge, and I'd love to share that world with you.",
  },
  {
    id: 34,
    message:
      "Your morning voice, all soft and sleepy, is the sweetest sound in the world. I dream of waking up to that voice every day, of being the first person you talk to when you open your eyes. That gentle, unguarded morning voice would be the perfect way to start every single day of my life.",
  },
  {
    id: 35,
    message:
      "The way you play with your hair when you're nervous or thinking is absolutely endearing. It's such a natural, unconscious gesture, and it makes me want to reach out and gently move your hand away so I can play with your hair instead. These little nervous habits of yours are incredibly cute and make you even more lovable.",
  },
  {
    id: 36,
    message:
      "I love how you get passionate about causes you believe in, how you stand up for what's right even when it's difficult. Your moral compass and your courage to speak up for others show me what true strength looks like. You inspire me to be more brave, more principled, more willing to fight for what matters.",
  },
  {
    id: 37,
    message:
      "The way you appreciate good food, really savoring each bite and getting excited about flavors, makes even simple meals feel special. I love how you experience life through all your senses, how you don't just eat but truly taste, how you find pleasure in life's simple offerings. I want to share countless meals with you, watching you enjoy every bite.",
  },
  {
    id: 38,
    message:
      "Your ability to find humor in difficult situations and make others laugh even when times are tough is a rare and beautiful gift. You have this way of lightening the mood without minimizing people's feelings, of bringing joy without being insensitive. Your sense of humor is one of your most attractive qualities.",
  },
  {
    id: 39,
    message:
      "I love how you get completely absorbed in music, how you close your eyes and let it wash over you, how you move slightly to the rhythm without even realizing it. Music seems to touch your soul in a special way, and I love seeing you in those moments of pure musical bliss. I want to discover new songs with you and create our own soundtrack.",
  },
  {
    id: 40,
    message:
      "The way you remember important dates and details about the people you care about shows how much love you carry in your heart. You don't just remember birthdays - you remember the little things that matter to people, the stories they've shared, the dreams they've mentioned. This thoughtfulness makes everyone feel valued and loved.",
  },
  {
    id: 41,
    message:
      "I love how you get excited about seasonal changes - the first snow, the first spring flowers, the changing leaves in autumn. You celebrate the natural rhythms of life with such joy and appreciation. Through your eyes, I've learned to notice and appreciate these beautiful transitions that I used to take for granted.",
  },
  {
    id: 42,
    message:
      "Your handwriting is like a work of art, each letter carefully formed, each word a small masterpiece. I would treasure any note you wrote to me, any list you made, any doodle you created. There's something so personal and intimate about handwriting, and yours is absolutely beautiful - just like everything else about you.",
  },
  {
    id: 43,
    message:
      "The way you take care of plants and watch them grow shows your nurturing nature and your patience with life's processes. You understand that beautiful things take time, that growth requires care and attention. I see this same nurturing spirit in how you treat people, and I long to be cared for by your gentle hands.",
  },
  {
    id: 44,
    message:
      "I love how you get completely focused when you're working on something important, how you give your full attention and effort to everything you do. Your dedication and work ethic are inspiring, and the way you pursue excellence in everything shows me what true commitment looks like. You approach life with such intentionality and purpose.",
  },
  {
    id: 45,
    message:
      "The way you appreciate art and beauty in all its forms - paintings, music, nature, architecture - shows me your sophisticated and cultured soul. You don't just look at art, you feel it, you understand it, you let it move you. I want to explore museums and galleries with you, seeing the world through your artistic eyes.",
  },
  {
    id: 46,
    message:
      "Your ability to make any space feel warm and welcoming is truly magical. Whether it's arranging flowers, lighting candles, or just organizing things beautifully, you have this gift for creating atmosphere and comfort. You turn houses into homes, spaces into sanctuaries, and I dream of creating that warmth together with you.",
  },
  {
    id: 47,
    message:
      "I love how you get genuinely excited about other people's successes and achievements, how you celebrate their victories as if they were your own. There's no jealousy or competition in your heart, only genuine joy for others' happiness. This generosity of spirit is rare and beautiful, and it makes me love you even more deeply.",
  },
  {
    id: 48,
    message:
      "The way you handle stress and pressure with such grace and composure amazes me constantly. You don't let difficult situations break you or change who you are at your core. Instead, you face challenges head-on while maintaining your kindness, your integrity, and your beautiful spirit. You are stronger than you know.",
  },
  {
    id: 49,
    message:
      "I love how you get lost in thought sometimes, staring out windows or into the distance with that dreamy expression on your face. I wonder what beautiful thoughts are running through your mind in those moments, what dreams you're dreaming, what hopes you're nurturing. I want to know every thought, every dream, every hope that lives in your beautiful mind.",
  },
  {
    id: 50,
    message:
      "Your capacity for forgiveness and your ability to see the good in people, even when they've hurt you, shows the incredible strength and purity of your heart. You choose love over bitterness, understanding over judgment, hope over cynicism. This emotional maturity and spiritual beauty make you absolutely extraordinary, and I am in awe of your beautiful soul every single day.",
  },
]

interface Bottle {
  id: number
  messageId: number
  x: number
  y: number
  isOpened: boolean
}

export default function MessageInBottle() {
  const [bottles, setBottles] = useState<Bottle[]>([])
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [usedMessages, setUsedMessages] = useState<Set<number>>(new Set())
  const [canSpawnNew, setCanSpawnNew] = useState(true)

  const getRandomPosition = () => ({
    x: Math.random() * 90 + 5,  // 5% to 95% → fills left to right, avoiding extreme edges
    y: Math.random() * 90 + 5,  // 5% to 95% → fills top to bottom, avoiding extreme edges
  })

  const spawnNewBottles = () => {
    if (!canSpawnNew) return

    const availableMessages = bottleMessages.filter((msg) => !usedMessages.has(msg.id))
    if (availableMessages.length === 0) return

    // Shuffle available messages to pick unique ones reliably
    const shuffled = [...availableMessages].sort(() => Math.random() - 0.5)

    const numBottles = Math.min(Math.floor(Math.random() * 3) + 1, shuffled.length)

    const newBottles: Bottle[] = []
    const newUsedMessages = new Set(usedMessages)

    for (let i = 0; i < numBottles; i++) {
      const randomMessage = shuffled[i]
      const position = getRandomPosition()

      let attempts = 0
      let validPosition = false
      while (!validPosition && attempts < 10) {
        validPosition = true
        for (const existingBottle of [...bottles, ...newBottles]) {
          const distance = Math.sqrt(
            Math.pow(position.x - existingBottle.x, 2) + Math.pow(position.y - existingBottle.y, 2),
          )
          if (distance < 15) {
            validPosition = false
            break
          }
        }
        if (!validPosition) {
          position.x = Math.random() * 70 + 15
          position.y = Math.random() * 50 + 25
          attempts++
        }
      }

      const newBottle: Bottle = {
        id: Date.now() + Math.random() + i,
        messageId: randomMessage.id,
        x: position.x,
        y: position.y,
        isOpened: false,
      }

      newBottles.push(newBottle)
      newUsedMessages.add(randomMessage.id)
    }

    if (newBottles.length > 0) {
      setBottles((prev) => [...prev, ...newBottles])
      setUsedMessages(newUsedMessages)
      setCanSpawnNew(false)
    }
  }

  useEffect(() => {
    // Spawn initial bottles after a short delay
    const timer = setTimeout(() => {
      spawnNewBottles()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openMessage = (bottleId: number, messageId: number) => {
    // Mark bottle as opened
    setBottles((prev) => prev.map((bottle) => (bottle.id === bottleId ? { ...bottle, isOpened: true } : bottle)))

    setSelectedMessage(messageId)
  }

  const closeMessage = () => {
    setSelectedMessage(null)

    const allOpened = bottles.every((bottle) => bottle.isOpened)

    if (allOpened && usedMessages.size < bottleMessages.length) {
      setBottles([])
      setCanSpawnNew(true)
    }
  }

  useEffect(() => {
    if (canSpawnNew) {
      const cooldown = setTimeout(() => {
        spawnNewBottles()
        setCanSpawnNew(false)
      }, 2000) // 2 seconds cooldown before spawning

      return () => clearTimeout(cooldown)
    }
  }, [canSpawnNew])


  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Messages in Bottles</h2>
          <p className="text-lg text-gray-600">
            Heartfelt letters washing ashore randomly. Open all bottles to discover new ones!
          </p>
        </motion.div>

        {/* Ocean Background */}
        <div className="relative bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 rounded-3xl p-8 h-[600px] overflow-hidden mb-8">
          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 right-0">
            <motion.div
              animate={{
                x: [-100, 0, -100],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex"
            >
              <Waves className="w-full h-16 text-blue-400 opacity-60" />
              <Waves className="w-full h-16 text-blue-400 opacity-60" />
              <Waves className="w-full h-16 text-blue-400 opacity-60" />
            </motion.div>
          </div>

          {/* Random Message Bottles */}
          <div className="relative z-10 h-full w-full">
            <AnimatePresence>
              {bottles.map((bottle) => (
                <motion.div
                  key={bottle.id}
                  initial={{
                    opacity: 0,
                    y: 150,
                    rotate: Math.random() * 60 - 30,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    y: -50,
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${bottle.x}%`,
                    top: `${bottle.y}%`,
                  }}
                  onClick={() => !bottle.isOpened && openMessage(bottle.id, bottle.messageId)}
                >
                  {/* Bottle */}
                  <div
                    className={`relative bg-gradient-to-b from-green-200 to-green-300 rounded-full w-20 h-28 shadow-lg border-2 border-green-400 transition-all duration-300 ${bottle.isOpened ? "opacity-50 scale-90" : "hover:scale-110 hover:shadow-xl"
                      }`}
                  >
                    {/* Cork */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-5 bg-amber-600 rounded-t-lg" />

                    {/* Message inside */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="absolute inset-3 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <Mail className={`w-7 h-7 ${bottle.isOpened ? "text-gray-400" : "text-pink-500"}`} />
                    </motion.div>

                    {/* Sparkle effect for unopened bottles */}
                    {!bottle.isOpened && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute"
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.2, 0],
                              x: [0, (Math.random() - 0.5) * 60],
                              y: [0, (Math.random() - 0.5) * 60],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3 + Math.random(),
                            }}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          >
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                          </motion.div>
                        ))}
                      </>
                    )}

                    {/* Opened indicator */}
                    {bottle.isOpened && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold"
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>

                  {/* Floating animation */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Progress indicator */}
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>
                {usedMessages.size} / {bottleMessages.length} messages discovered
              </span>
            </div>
          </div>

          {/* Current bottles status */}
          {bottles.length > 0 && (
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>
                  {bottles.filter((b) => b.isOpened).length} / {bottles.length} bottles opened
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Message Display */}
        <AnimatePresence>
          {selectedMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={closeMessage}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-pink-200 relative max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Paper texture */}
                <div className="absolute inset-0 opacity-5">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-8 border-b border-pink-300" />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Mail className="w-6 h-6 text-pink-500" />
                      <span className="font-semibold text-gray-800">Message #{selectedMessage}</span>
                    </div>
                    <button onClick={closeMessage} className="text-gray-400 hover:text-gray-600 text-2xl">
                      ×
                    </button>
                  </div>

                  <div className="text-center">
                    <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                    <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
                      "{bottleMessages.find((m) => m.id === selectedMessage)?.message}"
                    </p>
                    <div className="mt-6 text-right">
                      <p className="text-gray-600 font-medium">With all my love,</p>
                      <p className="text-pink-600 font-bold text-lg">Forever yours ❤️</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-center">
          <p className="text-gray-600 italic">
            Click on bottles to read the messages inside. Open all current bottles to discover new ones!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Each bottle carries a piece of my heart across the ocean of time to reach you my sweet lovely queen
          </p>
        </motion.div>
      </div>
    </div>
  )
}
