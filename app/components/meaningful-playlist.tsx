"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Heart, Music, SkipForward, SkipBack, Volume2 } from "lucide-react"

const playlist = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    reason: "Because you are absolutely perfect in every way",
    duration: "4:23",
    color: "from-pink-400 to-rose-400",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    reason: "You have all of me, my heart, my soul, everything",
    duration: "4:29",
    color: "from-rose-400 to-red-400",
  },
  {
    id: 3,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    reason: "I think about you constantly, you're always on my mind",
    duration: "4:41",
    color: "from-red-400 to-pink-400",
  },
  {
    id: 4,
    title: "A Thousand Years",
    artist: "Christina Perri",
    reason: "I will love you for a thousand years and more",
    duration: "4:45",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 5,
    title: "Make You Feel My Love",
    artist: "Adele",
    reason: "I want you to feel how deeply I love you",
    duration: "3:32",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "At Last",
    artist: "Etta James",
    reason: "At last, I found the love of my life - you",
    duration: "3:01",
    color: "from-amber-400 to-orange-400",
  },
]

export default function MeaningfulPlaylist() {
  const [currentSong, setCurrentSong] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = (songId: number) => {
    if (currentSong === songId) {
      setIsPlaying(!isPlaying)
    } else {
      setCurrentSong(songId)
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Our Love Playlist</h2>
          <p className="text-lg text-gray-600">Songs that remind me of you and capture how you make me feel</p>
        </motion.div>

        <div className="space-y-4">
          {playlist.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${song.color} rounded-2xl p-6 shadow-xl text-white relative overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <Music className="absolute top-4 right-4 w-24 h-24" />
                <Heart className="absolute bottom-4 left-4 w-16 h-16" />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                {/* Play button */}
                <motion.button
                  onClick={() => togglePlay(song.id)}
                  className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {currentSong === song.id && isPlaying ? (
                      <motion.div key="pause" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Pause className="w-8 h-8" />
                      </motion.div>
                    ) : (
                      <motion.div key="play" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Play className="w-8 h-8 ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Song info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{song.title}</h3>
                  <p className="text-white/80 mb-2">{song.artist}</p>
                  <p className="text-sm text-white/70 italic">"{song.reason}"</p>
                </div>

                {/* Duration */}
                <div className="text-right">
                  <span className="text-white/80">{song.duration}</span>
                </div>
              </div>

              {/* Playing animation */}
              <AnimatePresence>
                {currentSong === song.id && isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"
                  >
                    <motion.div
                      className="h-full bg-white"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sound waves animation */}
              <AnimatePresence>
                {currentSong === song.id && isPlaying && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-white rounded-full"
                        animate={{
                          height: [8, 24, 8],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Player controls */}
        <AnimatePresence>
          {currentSong && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-pink-200 flex items-center gap-4"
            >
              <button className="p-2 hover:bg-pink-100 rounded-full transition-colors">
                <SkipBack className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => togglePlay(currentSong)}
                className="p-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </button>
              <button className="p-2 hover:bg-pink-100 rounded-full transition-colors">
                <SkipForward className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-gray-600" />
                <div className="w-20 h-1 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
