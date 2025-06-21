"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Zap, Crown, Sparkles, ShoppingCart, Trophy, Gamepad2 } from "lucide-react"

interface Cat {
  id: string
  name: string
  breed: string
  age: number
  personality: string[]
  happiness: number
  hunger: number
  energy: number
  cleanliness: number
  affection: number
  intelligence: number
  playfulness: number
  color: string
  pattern: string
  specialTrait: string
  favoriteFood: string
  favoriteToy: string
  adoptionStory: string
  isAdopted: boolean
  adoptedAt?: Date
  currentActivity: string
  mood:
  | "ecstatic"
  | "happy"
  | "sleepy"
  | "playful"
  | "hungry"
  | "content"
  | "excited"
  | "grumpy"
  | "loving"
  | "mischievous"
  position: { x: number; y: number }
  direction: number
  isMoving: boolean
  level: number
  experience: number
  skills: {
    hunting: number
    climbing: number
    socializing: number
    tricks: number
  }
  accessories: string[]
  achievements: string[]
  lastInteraction: Date
  specialAbility: string
  rarity: "common" | "rare" | "epic" | "legendary"
  animations: string[]
  catType: "tabby" | "siamese" | "persian" | "maine_coon" | "bengal" | "ragdoll" | "scottish_fold" | "british_shorthair"
}

interface GameState {
  coins: number
  gems: number
  reputation: number
  cafeLevel: number
  unlockedFeatures: string[]
  dailyStreak: number
  totalCatsAdopted: number
  achievements: string[]
  photoSessionsCompleted: number
  catsPlayedWithCount: number

}

interface ShopItem {
  id: string
  name: string
  description: string
  price: number
  gemPrice?: number
  category: "food" | "toys" | "accessories" | "upgrades" | "medicine"
  effect: string
  icon: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

interface Achievement {
  id: string
  name: string
  description: string
  requirement: string
  reward: { coins?: number; gems?: number; item?: string }
  unlocked: boolean
  progress: number
  maxProgress: number
  icon: string
}

interface MiniGame {
  id: string
  name: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  reward: { coins: number; experience: number }
  icon: string
  unlocked: boolean
}

const shopItems: ShopItem[] = [
  {
    id: "premium_food",
    name: "Premium Cat Food",
    description: "High-quality food that keeps cats satisfied longer",
    price: 25,
    category: "food",
    effect: "+40 hunger, +10 happiness",
    icon: "🥘",
    rarity: "common",
  },
  {
    id: "gourmet_treats",
    name: "Gourmet Treats",
    description: "Delicious treats that cats absolutely love",
    price: 15,
    category: "food",
    effect: "+30 happiness, +15 affection",
    icon: "🍪",
    rarity: "common",
  },
  {
    id: "laser_pointer",
    name: "Laser Pointer Pro",
    description: "Advanced laser pointer for maximum fun",
    price: 50,
    category: "toys",
    effect: "+25 happiness, +20 energy burn",
    icon: "🔴",
    rarity: "rare",
  },
  {
    id: "cat_tree",
    name: "Luxury Cat Tree",
    description: "Multi-level cat tree for climbing and relaxing",
    price: 150,
    category: "toys",
    effect: "+30 happiness, unlocks climbing activities",
    icon: "🌳",
    rarity: "epic",
  },
  {
    id: "diamond_collar",
    name: "Diamond Collar",
    description: "Sparkling collar that increases coin generation",
    price: 300,
    gemPrice: 15,
    category: "accessories",
    effect: "+20% coin generation",
    icon: "💎",
    rarity: "legendary",
  },
  {
    id: "royal_crown",
    name: "Royal Crown",
    description: "Majestic crown fit for a cat king/queen",
    price: 500,
    gemPrice: 25,
    category: "accessories",
    effect: "+50% visitor attraction, +25% reputation gain",
    icon: "👑",
    rarity: "legendary",
  },
  {
    id: "health_potion",
    name: "Health Potion",
    description: "Magical potion that restores all stats",
    price: 75,
    gemPrice: 5,
    category: "medicine",
    effect: "Restores all stats to 100%",
    icon: "🧪",
    rarity: "rare",
  },
  {
    id: "energy_drink",
    name: "Energy Boost",
    description: "Special drink that gives cats extra energy",
    price: 30,
    category: "medicine",
    effect: "+50 energy, +10 playfulness",
    icon: "⚡",
    rarity: "common",
  },
  {
    id: "spa_upgrade",
    name: "Spa Corner",
    description: "Automatic grooming station for your cafe",
    price: 1000,
    gemPrice: 50,
    category: "upgrades",
    effect: "Cats automatically maintain cleanliness",
    icon: "🛁",
    rarity: "epic",
  },
  {
    id: "music_system",
    name: "Music System",
    description: "Plays soothing music that calms all cats",
    price: 750,
    gemPrice: 35,
    category: "upgrades",
    effect: "+15% happiness for all cats",
    icon: "🎵",
    rarity: "rare",
  },
]

const achievements: Achievement[] = [
  {
    id: "first_adoption",
    name: "First Friend",
    description: "Adopt your first cat",
    requirement: "Adopt 1 cat",
    reward: { coins: 100, gems: 5 },
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    icon: "🐱",
  },
  {
    id: "cat_collector",
    name: "Cat Collector",
    description: "Adopt 10 cats",
    requirement: "Adopt 10 cats",
    reward: { coins: 500, gems: 25 },
    unlocked: false,
    progress: 0,
    maxProgress: 10,
    icon: "🏠",
  },
  {
    id: "legendary_owner",
    name: "Legendary Owner",
    description: "Adopt a legendary cat",
    requirement: "Adopt 1 legendary cat",
    reward: { coins: 1000, gems: 50 },
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    icon: "⭐",
  },
  {
    id: "happiness_master",
    name: "Happiness Master",
    description: "Keep all cats at 100% happiness",
    requirement: "All cats at 100% happiness",
    reward: { coins: 300, gems: 15 },
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    icon: "😸",
  },
  {
    id: "coin_collector",
    name: "Coin Collector",
    description: "Earn 5000 coins total",
    requirement: "Earn 5000 coins",
    reward: { gems: 100 },
    unlocked: false,
    progress: 0,
    maxProgress: 5000,
    icon: "💰",
  },
  {
    id: "daily_devotion",
    name: "Daily Devotion",
    description: "Maintain a 7-day streak",
    requirement: "7 consecutive days",
    reward: { coins: 500, gems: 30 },
    unlocked: false,
    progress: 0,
    maxProgress: 7,
    icon: "🔥",
  },

  {
    id: "playtime_champion",
    name: "Playtime Champion",
    description: "Play with 5 different cats",
    requirement: "Interact with 5 cats via play",
    reward: { coins: 300, gems: 15 },
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    icon: "🔴"
  },
  {
    id: "treasure_finder",
    name: "Treasure Finder",
    description: "Win the Treasure Hunt mini-game",
    requirement: "Complete Treasure Hunt",
    reward: { gems: 25 },
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    icon: "🗺️"
  },
  {
    id: "epic_collector",
    name: "Epic Collector",
    description: "Adopt 3 epic or legendary cats",
    requirement: "Adopt 3 rare/epic/legendary cats",
    reward: { gems: 50 },
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    icon: "⭐"
  },
  {
    id: "photo_master",
    name: "Photo Master",
    description: "Complete 5 photo sessions",
    requirement: "Take photos 5 times",
    reward: { coins: 400, gems: 20 },
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    icon: "📸"
  }
]

const miniGames: MiniGame[] = [
  {
    id: "laser_chase",
    name: "Laser Chase",
    description: "Help cats catch the laser dot!",
    difficulty: "easy",
    reward: { coins: 50, experience: 25 },
    icon: "🔴",
    unlocked: true,
  },
  {
    id: "treat_toss",
    name: "Treat Toss",
    description: "Toss treats into cats' mouths",
    difficulty: "medium",
    reward: { coins: 75, experience: 40 },
    icon: "🍪",
    unlocked: true,
  },
  {
    id: "cat_puzzle",
    name: "Cat Puzzle",
    description: "Solve puzzles to unlock special rewards",
    difficulty: "hard",
    reward: { coins: 150, experience: 75 },
    icon: "🧩",
    unlocked: true,
  },
  {
    id: "dance_party",
    name: "Dance Party",
    description: "Get all cats dancing together",
    difficulty: "medium",
    reward: { coins: 100, experience: 50 },
    icon: "💃",
    unlocked: true,
  },
  {
    id: "treasure_hunt",
    name: "Treasure Hunt",
    description: "Find hidden treasures around the cafe",
    difficulty: "hard",
    reward: { coins: 200, experience: 100 },
    icon: "🗺️",
    unlocked: true,
  },
]

const CatAvatar = ({ cat, size = "w-20 h-20" }: { cat: Cat; size?: string }) => {
  const getMainColor = () => {
    if (cat.pattern.includes("orange")) return "#f97316"
    if (cat.pattern.includes("gray")) return "#6b7280"
    if (cat.pattern.includes("black")) return "#1f2937"
    if (cat.pattern.includes("white")) return "#f8fafc"
    if (cat.pattern.includes("pink")) return "#ec4899"
    if (cat.pattern.includes("purple")) return "#8b5cf6"
    if (cat.pattern.includes("blue")) return "#3b82f6"
    return "#f97316"
  }

  const getSecondaryColor = () => {
    const main = getMainColor()
    if (main === "#f8fafc") return "#e2e8f0"
    if (main === "#1f2937") return "#374151"
    return "#fbbf24"
  }

  const getMoodEmoji = (mood: Cat["mood"]) => {
    const emojis = {
      ecstatic: "🤩",
      happy: "😸",
      sleepy: "😴",
      playful: "😹",
      hungry: "🙀",
      content: "😺",
      excited: "😻",
      grumpy: "😾",
      loving: "🥰",
      mischievous: "😼",
    }
    return emojis[mood] || "😸"
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "from-yellow-400 to-orange-500"
      case "epic":
        return "from-purple-400 to-pink-500"
      case "rare":
        return "from-blue-400 to-cyan-500"
      default:
        return "from-gray-300 to-gray-400"
    }
  }

  return (
    <div className={`${size} relative mx-auto`}>
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
        {/* Cat Body */}
        <ellipse cx="60" cy="80" rx="30" ry="25" fill={getMainColor()} stroke="#fff" strokeWidth="2" />

        {/* Cat Head */}
        <circle cx="60" cy="45" r="28" fill={getMainColor()} stroke="#fff" strokeWidth="2" />

        {/* Ears */}
        <polygon points="40,25 45,8 50,25" fill={getMainColor()} stroke="#fff" strokeWidth="1.5" />
        <polygon points="70,25 75,8 80,25" fill={getMainColor()} stroke="#fff" strokeWidth="1.5" />

        {/* Inner Ears */}
        <polygon points="42,23 45,13 48,23" fill="#fca5a5" />
        <polygon points="72,23 75,13 78,23" fill="#fca5a5" />

        {/* Face Markings */}
        {cat.breed.includes("Siamese") && (
          <>
            <path d="M 35 35 Q 60 30 85 35 Q 85 55 60 60 Q 35 55 35 35" fill={getSecondaryColor()} opacity="0.7" />
            <polygon points="40,25 45,8 50,25" fill={getSecondaryColor()} opacity="0.8" />
            <polygon points="70,25 75,8 80,25" fill={getSecondaryColor()} opacity="0.8" />
          </>
        )}

        {/* Tabby Stripes */}
        {cat.breed.includes("Tabby") && (
          <>
            <path d="M 35 35 Q 60 32 85 35" stroke={getSecondaryColor()} strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M 38 45 Q 60 42 82 45" stroke={getSecondaryColor()} strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M 40 55 Q 60 52 80 55" stroke={getSecondaryColor()} strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M 35 70 Q 60 67 85 70" stroke={getSecondaryColor()} strokeWidth="3" fill="none" opacity="0.8" />
          </>
        )}

        {/* Eyes */}
        <ellipse cx="50" cy="40" rx="6" ry="8" fill="#22c55e" />
        <ellipse cx="70" cy="40" rx="6" ry="8" fill="#22c55e" />

        {/* Eye pupils */}
        <ellipse cx="50" cy="42" rx="2" ry="6" fill="#000" />
        <ellipse cx="70" cy="42" rx="2" ry="6" fill="#000" />

        {/* Eye shine */}
        <circle cx="51" cy="38" r="1.5" fill="#fff" />
        <circle cx="71" cy="38" r="1.5" fill="#fff" />

        {/* Nose */}
        <polygon points="58,50 60,47 62,50 60,52" fill="#f87171" />

        {/* Mouth */}
        <path d="M 60 52 Q 55 55 50 53" stroke="#374151" strokeWidth="2" fill="none" />
        <path d="M 60 52 Q 65 55 70 53" stroke="#374151" strokeWidth="2" fill="none" />

        {/* Whiskers */}
        <line x1="25" y1="45" x2="40" y2="47" stroke="#374151" strokeWidth="1.5" />
        <line x1="25" y1="50" x2="40" y2="50" stroke="#374151" strokeWidth="1.5" />
        <line x1="80" y1="47" x2="95" y2="45" stroke="#374151" strokeWidth="1.5" />
        <line x1="80" y1="50" x2="95" y2="50" stroke="#374151" strokeWidth="1.5" />

        {/* Paws */}
        <ellipse cx="45" cy="100" rx="8" ry="6" fill={getMainColor()} stroke="#fff" strokeWidth="1" />
        <ellipse cx="60" cy="102" rx="8" ry="6" fill={getMainColor()} stroke="#fff" strokeWidth="1" />
        <ellipse cx="75" cy="100" rx="8" ry="6" fill={getMainColor()} stroke="#fff" strokeWidth="1" />

        {/* Tail */}
        <path d="M 90 80 Q 105 70 100 55 Q 95 65 85 75" fill={getMainColor()} stroke="#fff" strokeWidth="1.5" />

        {/* Accessories */}
        {cat.accessories.includes("Diamond Collar") && (
          <>
            <ellipse cx="60" cy="65" rx="20" ry="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="60" cy="65" r="3" fill="#ef4444" />
          </>
        )}
        {cat.accessories.includes("Royal Crown") && (
          <>
            <polygon points="45,20 50,5 60,8 70,5 75,20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="60" cy="8" r="3" fill="#ef4444" />
            <circle cx="52" cy="12" r="2" fill="#3b82f6" />
            <circle cx="68" cy="12" r="2" fill="#3b82f6" />
          </>
        )}
      </svg>

      {/* Mood indicator with better positioning */}
      <motion.div
        className="absolute -top-1 -right-1 text-xl bg-white/80 rounded-full p-1"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {getMoodEmoji(cat.mood)}
      </motion.div>

      {/* Enhanced rarity glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(cat.rarity)} opacity-30 rounded-full blur-md -z-10 animate-pulse`}
      />
    </div>
  )
}

const catBreeds = [
  {
    name: "Persian",
    traits: ["fluffy", "calm", "regal"],
    rarity: "rare",
    specialAbility: "Royal Presence - Attracts more visitors",
    baseStats: { intelligence: 80, playfulness: 60 },
  },
  {
    name: "Siamese",
    traits: ["vocal", "intelligent", "social"],
    rarity: "common",
    specialAbility: "Chatter Master - Earns extra coins when happy",
    baseStats: { intelligence: 90, playfulness: 85 },
  },
  {
    name: "Maine Coon",
    traits: ["gentle giant", "friendly", "playful"],
    rarity: "epic",
    specialAbility: "Gentle Giant - Calms other cats",
    baseStats: { intelligence: 75, playfulness: 90 },
  },
  {
    name: "Bengal",
    traits: ["energetic", "wild-looking", "athletic"],
    rarity: "legendary",
    specialAbility: "Wild Spirit - Performs amazing tricks",
    baseStats: { intelligence: 95, playfulness: 100 },
  },
  {
    name: "Ragdoll",
    traits: ["docile", "affectionate", "relaxed"],
    rarity: "rare",
    specialAbility: "Zen Master - Boosts cafe atmosphere",
    baseStats: { intelligence: 70, playfulness: 50 },
  },
  {
    name: "Scottish Fold",
    traits: ["sweet", "quiet", "adaptable"],
    rarity: "epic",
    specialAbility: "Adorable Ears - Increases visitor tips",
    baseStats: { intelligence: 85, playfulness: 75 },
  },
]

const catColors = [
  { name: "Golden Tabby", class: "from-yellow-400 via-orange-400 to-amber-500", rarity: "rare" },
  { name: "Silver Mist", class: "from-gray-300 via-slate-400 to-gray-500", rarity: "common" },
  { name: "Midnight Black", class: "from-gray-900 via-black to-gray-800", rarity: "epic" },
  { name: "Pure Snow", class: "from-white via-gray-50 to-gray-100", rarity: "common" },
  { name: "Calico Dream", class: "from-orange-300 via-white to-gray-400", rarity: "rare" },
  { name: "Tuxedo Elite", class: "from-black via-white to-black", rarity: "rare" },
  { name: "Cream Delight", class: "from-yellow-100 via-cream to-yellow-200", rarity: "common" },
  { name: "Chocolate Swirl", class: "from-amber-700 via-amber-600 to-amber-800", rarity: "rare" },
  { name: "Rainbow Mystique", class: "from-pink-400 via-purple-400 to-blue-400", rarity: "legendary" },
  { name: "Galaxy Shimmer", class: "from-indigo-500 via-purple-600 to-pink-500", rarity: "legendary" },
]

const activities = [
  { name: "sleeping in a sunbeam", emoji: "😴", mood: "sleepy" },
  { name: "playing with a laser pointer", emoji: "🔴", mood: "playful" },
  { name: "grooming elegantly", emoji: "🧼", mood: "content" },
  { name: "watching birds intently", emoji: "🐦", mood: "excited" },
  { name: "exploring the cafe", emoji: "🔍", mood: "playful" },
  { name: "napping peacefully", emoji: "💤", mood: "sleepy" },
  { name: "stretching gracefully", emoji: "🤸", mood: "content" },
  { name: "purring loudly", emoji: "😸", mood: "happy" },
  { name: "hunting toy mice", emoji: "🐭", mood: "mischievous" },
  { name: "climbing cat towers", emoji: "🏗️", mood: "playful" },
  { name: "socializing with friends", emoji: "👥", mood: "loving" },
  { name: "performing tricks", emoji: "🎪", mood: "excited" },
]

const generateCat = (forceRarity?: string): Cat => {
  const rarityWeights = forceRarity ? { [forceRarity]: 1 } : { common: 0.5, rare: 0.3, epic: 0.15, legendary: 0.05 }

  const rarity = weightedRandom(rarityWeights) as Cat["rarity"]
  const availableBreeds = catBreeds.filter((b) => b.rarity === rarity)
  const breed = availableBreeds[Math.floor(Math.random() * availableBreeds.length)]
  const availableColors = catColors.filter((c) => c.rarity === rarity || Math.random() > 0.7)
  const color = availableColors[Math.floor(Math.random() * availableColors.length)]

  const baseLevel = rarity === "legendary" ? 5 : rarity === "epic" ? 3 : rarity === "rare" ? 2 : 1

  return {
    id: `cat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: generateCatName(),
    breed: breed.name,
    age: Math.floor(Math.random() * 8) + 1,
    personality: breed.traits,
    happiness: Math.floor(Math.random() * 30) + 70,
    hunger: Math.floor(Math.random() * 40) + 30,
    energy: Math.floor(Math.random() * 40) + 60,
    cleanliness: Math.floor(Math.random() * 30) + 70,
    affection: Math.floor(Math.random() * 20) + 10,
    intelligence: breed.baseStats.intelligence + Math.floor(Math.random() * 20) - 10,
    playfulness: breed.baseStats.playfulness + Math.floor(Math.random() * 20) - 10,
    color: color.name,
    pattern: color.class,
    specialTrait: `${breed.traits[0]} and loves ${activities[Math.floor(Math.random() * activities.length)].name}`,
    favoriteFood: ["Premium Salmon", "Gourmet Tuna", "Organic Chicken", "Royal Turkey", "Exotic Beef"][
      Math.floor(Math.random() * 5)
    ],
    favoriteToy: [
      "Enchanted Feather Wand",
      "Laser Pointer Pro",
      "Catnip Mouse Deluxe",
      "Rainbow Yarn Ball",
      "Crystal Ball",
    ][Math.floor(Math.random() * 5)],
    adoptionStory: generateAdoptionStory(),
    isAdopted: false,
    currentActivity: activities[Math.floor(Math.random() * activities.length)].name,
    mood: activities[Math.floor(Math.random() * activities.length)].mood as Cat["mood"],
    position: {
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15,
    },
    direction: Math.random() * 360,
    isMoving: Math.random() > 0.3,
    level: baseLevel,
    experience: 0,
    skills: {
      hunting: Math.floor(Math.random() * 50) + baseLevel * 10,
      climbing: Math.floor(Math.random() * 50) + baseLevel * 10,
      socializing: Math.floor(Math.random() * 50) + baseLevel * 10,
      tricks: Math.floor(Math.random() * 50) + baseLevel * 10,
    },
    accessories: [],
    achievements: [],
    lastInteraction: new Date(),
    specialAbility: breed.specialAbility,
    rarity,
    animations: generateAnimations(rarity),
    catType: "tabby",
  }
}

const weightedRandom = (weights: Record<string, number>) => {
  const items = Object.keys(weights)
  const chances = Object.values(weights)
  const sum = chances.reduce((a, b) => a + b, 0)
  let random = Math.random() * sum

  for (let i = 0; i < items.length; i++) {
    if (random < chances[i]) return items[i]
    random -= chances[i]
  }
  return items[items.length - 1]
}

const generateCatName = () => {
  const prefixes = [
    "Mr",
    "Miss",
    "Sir",
    "Lady",
    "Master",
    "Missy",
    "Captain",
    "Professor",
    "Doctor",
    "King",
    "Queen",
    "Duke",
    "Duchess",
    "Prince",
    "Princess",
  ]

  const names = [
    "Luna",
    "Milo",
    "Oliver",
    "Leo",
    "Bella",
    "Chloe",
    "Simba",
    "Loki",
    "Nala",
    "Shadow",
    "Misty",
    "Smokey",
    "Cleo",
    "Sophie",
    "Tigger",
    "Oscar",
    "Jasper",
    "Felix",
    "Zoe",
    "Gizmo"
  ]

  const suffixes = [
    "",
    "Jr",
    "Sr",
    "II",
    "III",
    "the Brave",
    "the Bold",
    "the Quick",
    "the Clever",
    "the Gentle",
    "the Friendly",
    "the Curious",
    "the Playful",
    "the Loyal",
  ]

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const name = names[Math.floor(Math.random() * names.length)]
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

  return [prefix, name, suffix].filter(Boolean).join(" ")
}


const generateAdoptionStory = () => {
  const stories = [
    "Found as a tiny kitten in a magical garden, surrounded by glowing butterflies.",
    "Rescued from a rainbow after a storm, still shimmering with stardust.",
    "Discovered sleeping in a field of flowers, dreaming of their perfect family.",
    "Found playing with fairy lights in an enchanted forest clearing.",
    "Rescued from a crystal cave where they learned to sparkle and shine.",
    "Discovered dancing in moonbeams on a rooftop garden.",
    "Found napping in a library, surrounded by books about love and friendship.",
    "Rescued from a music box, where they learned to dance gracefully.",
  ]
  return stories[Math.floor(Math.random() * stories.length)]
}

const generateAnimations = (rarity: string) => {
  const common = ["walk", "sit", "stretch", "groom"]
  const rare = [...common, "dance", "jump", "spin"]
  const epic = [...rare, "backflip", "sparkle", "float"]
  const legendary = [...epic, "teleport", "rainbow_trail", "star_shower", "transform"]

  switch (rarity) {
    case "legendary":
      return legendary
    case "epic":
      return epic
    case "rare":
      return rare
    default:
      return common
  }
}

export default function VirtualCatCafe() {
  const [availableCats, setAvailableCats] = useState<Cat[]>([])
  const [adoptedCats, setAdoptedCats] = useState<Cat[]>([])
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null)
  const [gameMode, setGameMode] = useState<"adoption" | "care" | "activities" | "shop" | "achievements">("adoption")
  const [gameState, setGameState] = useState<GameState>({
    coins: 500,
    gems: 10,
    reputation: 0,
    cafeLevel: 1,
    unlockedFeatures: ["basic_care"],
    dailyStreak: 1,
    totalCatsAdopted: 0,
    achievements: [],
    photoSessionsCompleted: 0,
    catsPlayedWithCount: 0,
  })
  const [inventory, setInventory] = useState({
    food: 10,
    toys: 5,
    treats: 15,
    brushes: 3,
    medicine: 2,
    cameras: 1,
  })
  const [notifications, setNotifications] = useState<Array<{ id: string; message: string; type: string }>>([])
  const [achievementsList, setAchievementsList] = useState<Achievement[]>(achievements.map((a) => ({ ...a })))
  const [miniGamesList, setMiniGamesList] = useState<MiniGame[]>(miniGames);


  // Initialize cats with better distribution
  useEffect(() => {
    const initialCats = [
      generateCat("common"),
      generateCat("common"),
      generateCat("rare"),
      generateCat("common"),
      generateCat("epic"),
      generateCat("rare"),
      generateCat("legendary"),
      generateCat("common"),
      generateCat(),
      generateCat(),
      generateCat(),
      generateCat(),
      generateCat(),
      generateCat(),
      generateCat(),
      generateCat(),

    ]
    setAvailableCats(initialCats)
  }, [])

  // Enhanced cat behavior simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Update available cats movement and behavior
      setAvailableCats((prev) =>
        prev.map((cat) => {
          if (!cat.isMoving && Math.random() > 0.8) {
            return { ...cat, isMoving: true }
          }

          if (cat.isMoving) {
            const newX = Math.max(5, Math.min(95, cat.position.x + (Math.random() - 0.5) * 8))
            const newY = Math.max(10, Math.min(85, cat.position.y + (Math.random() - 0.5) * 8))

            return {
              ...cat,
              position: { ...cat.position, x: newX, y: newY }, // ✅ Spread position too

              currentActivity:
                Math.random() > 0.95
                  ? activities[Math.floor(Math.random() * activities.length)].name
                  : cat.currentActivity,
              isMoving: Math.random() > 0.7,
              mood:
                Math.random() > 0.9
                  ? (activities[Math.floor(Math.random() * activities.length)].mood as Cat["mood"])
                  : cat.mood,
            }
          }
          return cat
        }),
      )

      // Update adopted cats stats
      setAdoptedCats((prev) =>
        prev.map((cat) => {
          const timeSinceInteraction = Date.now() - cat.lastInteraction.getTime()
          const hoursSince = timeSinceInteraction / (1000 * 60 * 60)

          return {
            ...cat,
            hunger: Math.max(0, cat.hunger - hoursSince * 2),
            energy: cat.currentActivity.includes("sleeping")
              ? Math.min(100, cat.energy + 3)
              : Math.max(0, cat.energy - 1),
            cleanliness: Math.max(0, cat.cleanliness - 1),
            happiness: cat.hunger < 20 ? Math.max(0, cat.happiness - 2) : Math.min(100, cat.happiness + 0.5),
            experience: cat.experience + (cat.happiness > 80 ? 2 : 1),
          }
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const addNotification = (message: string, type = "info") => {
    const id = Date.now().toString()
    setNotifications((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 4000)
  }

  const adoptCat = (cat: Cat) => {
    const adoptionCost =
      cat.rarity === "legendary" ? 500 : cat.rarity === "epic" ? 300 : cat.rarity === "rare" ? 150 : 75
    if (gameState.coins < adoptionCost) {
      addNotification("Not enough coins!", "error")
      return
    }

    setGameState((prev) => ({
      ...prev,
      coins: prev.coins - adoptionCost,
      totalCatsAdopted: prev.totalCatsAdopted + 1,
      reputation: prev.reputation + (cat.rarity === "legendary" ? 100 : cat.rarity === "epic" ? 50 : 25),
    }))

    setAvailableCats((prev) => prev.filter((c) => c.id !== cat.id))
    setAdoptedCats((prev) => [
      ...prev,
      {
        ...cat,
        isAdopted: true,
        adoptedAt: new Date(),
        affection: 50,
        lastInteraction: new Date(),
      },
    ])

    addNotification(`${cat.name} has been adopted! Welcome to the family! 🎉`, "success")

    // Add a new cat to adoption center
    setTimeout(() => {
      setAvailableCats((prev) => [...prev, generateCat()])
    }, 8000)
  }

  const interactWithCat = (catId: string, action: string) => {
    const costs = {
      feed: { food: 1, coins: 0 },
      play: { toys: 0, coins: 5 },
      groom: { brushes: 1, coins: 0 },
      treat: { treats: 1, coins: 0 },
      medicine: { medicine: 1, coins: 0 },
      photo: { cameras: 1, coins: 10 },
    }

    const cost = costs[action as keyof typeof costs]
    if (!cost) return

    // Check if player has required resources
    for (const [resource, amount] of Object.entries(cost)) {
      if (resource === "coins" && gameState.coins < amount) {
        addNotification("Not enough coins!", "error")
        return
      }
      if (resource !== "coins" && inventory[resource as keyof typeof inventory] < amount) {
        addNotification(`Not enough ${resource}!`, "error")
        return
      }
    }

    // Deduct resources
    if (cost.coins > 0) {
      setGameState((prev) => ({ ...prev, coins: prev.coins - cost.coins }))
    }

    Object.entries(cost).forEach(([resource, amount]) => {
      if (resource !== "coins" && amount > 0) {
        setInventory((prev) => ({
          ...prev,
          [resource]: prev[resource as keyof typeof inventory] - amount,
        }))
      }
    })

    // Apply effects
    setAdoptedCats((prev) =>
      prev.map((cat) => {
        if (cat.id !== catId) return cat

        let updates: Partial<Cat> = { lastInteraction: new Date() }
        let coinReward = 0
        let expReward = 10

        switch (action) {
          case "feed":
            updates = {
              ...updates,
              hunger: Math.min(100, cat.hunger + 40),
              happiness: Math.min(100, cat.happiness + 15),
              affection: Math.min(100, cat.affection + 8),
            }
            coinReward = 15
            break
          case "play":
            updates = {
              ...updates,
              happiness: Math.min(100, cat.happiness + 25),

              energy: Math.max(0, cat.energy - 20),
              affection: Math.min(100, cat.affection + 12),
              mood: "playful" as Cat["mood"],
            }
            coinReward = 20
            expReward = 15
            setGameState((prev) => ({
              ...prev,
              catsPlayedWithCount: (prev.catsPlayedWithCount || 0) + 1
            }))
            break
          case "groom":
            updates = {
              ...updates,
              cleanliness: 100,
              happiness: Math.min(100, cat.happiness + 20),
              affection: Math.min(100, cat.affection + 10),
              mood: "content" as Cat["mood"],
            }
            coinReward = 12
            break
          case "treat":
            updates = {
              ...updates,
              happiness: Math.min(100, cat.happiness + 30),
              affection: Math.min(100, cat.affection + 20),
              mood: "ecstatic" as Cat["mood"],
            }
            coinReward = 8
            expReward = 20
            break
          case "medicine":
            updates = {
              ...updates,
              happiness: Math.min(100, cat.happiness + 10),
              energy: Math.min(100, cat.energy + 30),
              cleanliness: Math.min(100, cat.cleanliness + 20),
            }
            coinReward = 25
            break
          case "photo":
            coinReward = 50 + (cat.rarity === "legendary" ? 100 : cat.rarity === "epic" ? 50 : 25)
            expReward = 25
            addNotification(`📸 Beautiful photo of ${cat.name}! +${coinReward} coins!`, "success")
            setGameState((prev) => ({
              ...prev,
              photoSessionsCompleted: (prev.photoSessionsCompleted || 0) + 1
            }))
            break
        }

        setGameState((prev) => ({ ...prev, coins: prev.coins + coinReward }))

        return {
          ...cat,
          ...updates,
          experience: cat.experience + expReward,
          level: Math.floor((cat.experience + expReward) / 100) + 1,
        }
      }),
    )

    addNotification(`${action} completed! Great job! 🎉`, "success")
  }

  // Add all helper functions here, BEFORE the return statement:

  const buyItem = (item: ShopItem, currency: "coins" | "gems") => {
    const cost = currency === "coins" ? item.price : item.gemPrice || 0
    const currentAmount = currency === "coins" ? gameState.coins : gameState.gems

    if (currentAmount < cost) {
      addNotification(`Not enough ${currency}!`, "error")
      return
    }

    setGameState((prev) => ({
      ...prev,
      [currency]: prev[currency] - cost,
    }))

    // Add item to inventory
    if (item.category === "food" || item.category === "toys" || item.category === "medicine") {
      const itemKey = item.category === "food" ? "food" : item.category === "toys" ? "toys" : "medicine"
      setInventory((prev) => ({
        ...prev,
        [itemKey]: prev[itemKey] + 1,
      }))
    }

    addNotification(`Purchased ${item.name}!`, "success")
  }

  const playMiniGame = (gameId: string) => {
    const game = miniGamesList.find((g) => g.id === gameId)
    if (!game || !game.unlocked) return

    // Create a simple skill-based challenge
    const playerSkill = Math.random()
    const difficultyThreshold = game.difficulty === "easy" ? 0.3 : game.difficulty === "medium" ? 0.5 : 0.7
    const success = playerSkill > difficultyThreshold

    if (success) {
      const coinReward = game.reward.coins + Math.floor(Math.random() * 20)
      setGameState((prev) => ({
        ...prev,
        coins: prev.coins + coinReward,
      }))

      // Give experience to all adopted cats
      setAdoptedCats((prev) =>
        prev.map((cat) => ({
          ...cat,
          experience: cat.experience + game.reward.experience,
          happiness: Math.min(100, cat.happiness + 5),
        })),
      )

      addNotification(
        `🎮 ${game.name} completed! +${coinReward} coins! All cats gained ${game.reward.experience} XP!`,
        "success",
      )

      // Unlock new games based on progress
      if (gameState.totalCatsAdopted >= 3 && gameId === "treat_toss") {
        setMiniGamesList((prev) => prev.map((g) => (g.id === "cat_puzzle" ? { ...g, unlocked: true } : g)))
        addNotification("🎉 New mini-game unlocked: Cat Puzzle!", "success")
      }

      if (gameState.totalCatsAdopted >= 5 && gameId === "cat_puzzle") {
        setMiniGamesList((prev) => prev.map((g) => (g.id === "dance_party" ? { ...g, unlocked: true } : g)))
        addNotification("🎉 New mini-game unlocked: Dance Party!", "success")
      }
    } else {
      addNotification(`😿 ${game.name} failed! Try again! (Difficulty: ${game.difficulty})`, "info")
    }
  }

  const startSpecialActivity = (activityType: string) => {
    const rewards = {
      photo_session: {
        coins: 100 + adoptedCats.length * 10,
        message: `📸 Beautiful photos taken! Cats love the attention! (+${100 + adoptedCats.length * 10} coins)`,
      },
      training: {
        coins: 75 + adoptedCats.length * 8,
        message: `🎯 Training session complete! Cats learned new tricks! (+${75 + adoptedCats.length * 8} coins)`,
      },
      grooming_party: {
        coins: 50 + adoptedCats.length * 5,
        message: `🛁 All cats are now sparkling clean! (+${50 + adoptedCats.length * 5} coins)`,
      },
      talent_show: {
        coins: 150 + adoptedCats.length * 15,
        message: `🎪 Amazing talent show! Visitors were impressed! (+${150 + adoptedCats.length * 15} coins)`,
      },
    }

    const reward = rewards[activityType as keyof typeof rewards]
    if (reward) {
      setGameState((prev) => ({
        ...prev,
        coins: prev.coins + reward.coins,
        reputation: prev.reputation + 10,
      }))

      // Apply activity effects to cats
      setAdoptedCats((prev) =>
        prev.map((cat) => ({
          ...cat,
          happiness:
            activityType === "talent_show" ? Math.min(100, cat.happiness + 20) : Math.min(100, cat.happiness + 10),
          cleanliness: activityType === "grooming_party" ? 100 : cat.cleanliness,
          experience: cat.experience + 15,
        })),
      )

      addNotification(reward.message, "success")

      // Unlock treasure hunt if reputation is high enough
      if (gameState.reputation >= 200 && activityType === "talent_show") {
        setMiniGamesList((prev) => prev.map((g) => (g.id === "treasure_hunt" ? { ...g, unlocked: true } : g)))
        addNotification("🗺️ New mini-game unlocked: Treasure Hunt!", "success")
      }
    }
  }

  const checkAchievements = () => {
    setAchievementsList((prev) =>
      prev.map((achievement) => {
        let newProgress = achievement.progress

        switch (achievement.id) {
          case "first_adoption":
            newProgress = gameState.totalCatsAdopted >= 1 ? 1 : 0
            break

          case "cat_collector":
            newProgress = gameState.totalCatsAdopted
            break

          case "legendary_owner":
            newProgress = adoptedCats.filter((cat) => cat.rarity === "legendary").length
            break

          case "happiness_master":
            newProgress = adoptedCats.length > 0 && adoptedCats.every((cat) => cat.happiness >= 100) ? 1 : 0
            break

          case "coin_collector":
            newProgress = gameState.coins
            break

          case "daily_devotion":
            newProgress = gameState.dailyStreak
            break


          case "photo_master":
            // Complete 5 photo sessions
            newProgress = gameState.photoSessionsCompleted || 0
            break

          case "playtime_champion":
            // Play with 5 different cats
            newProgress = gameState.catsPlayedWithCount || 0
            break

          case "epic_collector":
            // Adopt 3 rare/epic/legendary cats
            newProgress = adoptedCats.filter((cat) =>
              ["rare", "epic", "legendary"].includes(cat.rarity)
            ).length
            break

          default:
            break
        }
        const wasUnlocked = achievement.unlocked
        const isNowUnlocked = newProgress >= achievement.maxProgress

        // Award rewards when achievement is first unlocked
        if (!wasUnlocked && isNowUnlocked) {
          setGameState((prev) => ({
            ...prev,
            coins: prev.coins + (achievement.reward.coins || 0),
            gems: prev.gems + (achievement.reward.gems || 0),
          }))
          addNotification(`🏆 Achievement Unlocked: ${achievement.name}!`, "success")
        }

        return {
          ...achievement,
          progress: newProgress,
          unlocked: isNowUnlocked,
        }
      }),
    )
  }

  useEffect(() => {
    checkAchievements()
  }, [
    gameState.totalCatsAdopted,
    gameState.coins,
    gameState.dailyStreak,
    gameState.photoSessionsCompleted, // ✅ Add this
    gameState.catsPlayedWithCount,     // ✅ Add this
    adoptedCats
  ])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "from-yellow-400 to-orange-500"
      case "epic":
        return "from-purple-400 to-pink-500"
      case "rare":
        return "from-blue-400 to-cyan-500"
      default:
        return "from-gray-300 to-gray-400"
    }
  }

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "border-yellow-400 shadow-yellow-400/50"
      case "epic":
        return "border-purple-400 shadow-purple-400/50"
      case "rare":
        return "border-blue-400 shadow-blue-400/50"
      default:
        return "border-gray-300"
    }
  }

  const getMoodEmoji = (mood: Cat["mood"]) => {
    const emojis = {
      ecstatic: "🤩",
      happy: "😸",
      sleepy: "😴",
      playful: "😹",
      hungry: "🙀",
      content: "😺",
      excited: "😻",
      grumpy: "😾",
      loving: "🥰",
      mischievous: "😼",
    }
    return emojis[mood] || "😸"
  }

  // NOW the return statement starts here:
  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Notifications */}
        <div className="fixed top-20 right-4 z-50 space-y-2">
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className={`px-4 py-2 rounded-lg shadow-lg ${notification.type === "success"
                  ? "bg-green-500 text-white"
                  : notification.type === "error"
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                  }`}
              >
                {notification.message}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            ✨ Chouchouutiii's Magical Cat Kingdom ✨
          </h2>
          <p className="text-lg text-gray-600 mb-6">The most enchanting cat sanctuary in the universe! 🌟🐱💖</p>

          {/* Enhanced Game Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-white font-bold text-lg">💰 {gameState.coins}</div>
              <div className="text-yellow-100 text-xs">Coins</div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-white font-bold text-lg">💎 {gameState.gems}</div>
              <div className="text-purple-100 text-xs">Gems</div>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-white font-bold text-lg">⭐ {gameState.reputation}</div>
              <div className="text-green-100 text-xs">Reputation</div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-white font-bold text-lg">🏠 {adoptedCats.length}</div>
              <div className="text-blue-100 text-xs">My Cats</div>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-red-500 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-white font-bold text-lg">🔥 {gameState.dailyStreak}</div>
              <div className="text-pink-100 text-xs">Daily Streak</div>
            </div>
          </div>

          {/* Enhanced Mode Toggle */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {[
              { id: "adoption", label: "🏠 Adoption Center", color: "from-pink-500 to-rose-500" },
              { id: "care", label: "💕 My Cats", color: "from-purple-500 to-indigo-500" },
              { id: "activities", label: "🎮 Activities", color: "from-blue-500 to-cyan-500" },
              { id: "shop", label: "🛒 Shop", color: "from-green-500 to-emerald-500" },
              { id: "achievements", label: "🏆 Achievements", color: "from-yellow-500 to-orange-500" },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setGameMode(mode.id as any)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${gameMode === mode.id
                  ? `bg-gradient-to-r ${mode.color} text-white shadow-lg scale-105`
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Game Area */}
        <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8 min-h-[700px] overflow-hidden border-4 border-gradient-to-r from-pink-300 to-purple-300 shadow-2xl">
          {/* Magical Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 4,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
              </motion.div>
            ))}
          </div>

          {gameMode === "adoption" && (
            <div className="relative h-full">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-yellow-500" />
                Royal Adoption Center
                <Crown className="w-8 h-8 text-yellow-500" />
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
                {availableCats.map((cat, index) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border-4 ${getRarityBorder(cat.rarity)} cursor-pointer group hover:scale-105 transition-all duration-300`}
                    onClick={() => adoptCat(cat)}
                  >
                    {/* Rarity Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(cat.rarity)} opacity-20 rounded-2xl blur-sm`}
                    />

                    {/* Cat Visual */}
                    <div className="relative z-10">
                      <CatAvatar cat={cat} size="w-20 h-20" />

                      {/* Cat Info */}
                      <div className="text-center">
                        <h4 className="font-bold text-lg text-gray-800 mb-1">{cat.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {cat.breed} • Level {cat.level}
                        </p>

                        {/* Stats Preview */}
                        <div className="flex justify-center gap-1 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs">{cat.intelligence}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="w-3 h-3 text-blue-500" />
                            <span className="text-xs">{cat.playfulness}</span>
                          </div>
                        </div>

                        {/* Adoption Price */}
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          💰{" "}
                          {cat.rarity === "legendary"
                            ? 500
                            : cat.rarity === "epic"
                              ? 300
                              : cat.rarity === "rare"
                                ? 150
                                : 75}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {gameMode === "care" && (
            <div className="relative h-full">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
                <Heart className="w-8 h-8 text-pink-500" />
                My Beloved Cats
                <Heart className="w-8 h-8 text-pink-500" />
              </h3>

              {adoptedCats.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🐱
                  </motion.div>
                  <p className="text-2xl font-bold mb-2">No cats adopted yet!</p>
                  <p className="text-lg">Visit the adoption center to find your first magical companion.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adoptedCats.map((cat, index) => (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-4 ${getRarityBorder(cat.rarity)} relative overflow-hidden`}
                    >
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(cat.rarity)} opacity-10`} />

                      <div className="relative z-10">
                        {/* Cat Header */}
                        <div className="text-center mb-4">
                          <CatAvatar cat={cat} size="w-24 h-24" />
                          <h4 className="font-bold text-xl text-gray-800">{cat.name}</h4>
                          <p className="text-sm text-gray-600">
                            {cat.breed} • {cat.age} years old
                          </p>
                          <p className="text-xs text-purple-600 font-semibold">{cat.specialAbility}</p>
                        </div>

                        {/* Enhanced Stats with Visual Bars */}
                        <div className="space-y-3 mb-4">
                          {[
                            { label: "❤️ Happiness", value: cat.happiness, color: "bg-red-400" },
                            { label: "🍽️ Hunger", value: cat.hunger, color: "bg-orange-400" },
                            { label: "⚡ Energy", value: cat.energy, color: "bg-yellow-400" },
                            { label: "🛁 Cleanliness", value: cat.cleanliness, color: "bg-blue-400" },
                            { label: "💕 Affection", value: cat.affection, color: "bg-pink-400" },
                          ].map((stat) => (
                            <div key={stat.label} className="flex items-center justify-between">
                              <span className="text-sm font-medium">{stat.label}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full ${stat.color} rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.value}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                  />
                                </div>
                                <span className="text-xs font-bold w-8">{Math.round(stat.value)}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Current Activity */}
                        <div className="text-center mb-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                          <p className="text-sm text-purple-700 font-medium">
                            Currently: {cat.currentActivity}{" "}
                            {activities.find((a) => a.name === cat.currentActivity)?.emoji}
                          </p>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => interactWithCat(cat.id, "feed")}
                            disabled={inventory.food <= 0}
                            className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            🍖 Feed
                            <br />({inventory.food})
                          </button>
                          <button
                            onClick={() => interactWithCat(cat.id, "play")}
                            disabled={cat.energy < 20}
                            className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            🧸 Play
                            <br />
                            (5💰)
                          </button>
                          <button
                            onClick={() => interactWithCat(cat.id, "groom")}
                            disabled={inventory.brushes <= 0}
                            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            🪮 Groom
                            <br />({inventory.brushes})
                          </button>
                          <button
                            onClick={() => interactWithCat(cat.id, "treat")}
                            disabled={inventory.treats <= 0}
                            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            🍪 Treat
                            <br />({inventory.treats})
                          </button>
                          <button
                            onClick={() => interactWithCat(cat.id, "medicine")}
                            disabled={inventory.medicine <= 0}
                            className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 disabled:from-gray-300 disabled:to-gray-400 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            💊 Heal
                            <br />({inventory.medicine})
                          </button>
                          <button
                            onClick={() => interactWithCat(cat.id, "photo")}
                            className="bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 text-white text-xs py-2 px-2 rounded-lg transition-all duration-300 font-semibold"
                          >
                            📸 Photo
                            <br />
                            (10💰)
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {gameMode === "shop" && (
            <div className="relative h-full">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
                <ShoppingCart className="w-8 h-8 text-green-500" />
                Magical Cat Shop
                <ShoppingCart className="w-8 h-8 text-green-500" />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-4 ${getRarityBorder(item.rarity)} relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(item.rarity)} opacity-10`} />

                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                        <div
                          className={`inline-block px-2 py-1 bg-gradient-to-r ${getRarityColor(item.rarity)} text-white text-xs font-bold rounded-full mb-2`}
                        >
                          {item.rarity.toUpperCase()}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <p className="text-xs text-purple-600 font-semibold mb-4">{item.effect}</p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => buyItem(item, "coins")}
                          disabled={gameState.coins < item.price}
                          className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 disabled:from-gray-300 disabled:to-gray-400 text-white py-2 px-4 rounded-lg transition-all duration-300 font-semibold text-sm"
                        >
                          💰 {item.price}
                        </button>
                        {item.gemPrice && (
                          <button
                            onClick={() => buyItem(item, "gems")}
                            disabled={gameState.gems < item.gemPrice}
                            className="flex-1 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 text-white py-2 px-4 rounded-lg transition-all duration-300 font-semibold text-sm"
                          >
                            💎 {item.gemPrice}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {gameMode === "activities" && (
            <div className="relative h-full">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
                <Gamepad2 className="w-8 h-8 text-blue-500" />
                Fun Activities & Mini-Games
                <Gamepad2 className="w-8 h-8 text-blue-500" />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {miniGamesList.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-4 ${game.unlocked ? "border-blue-400" : "border-gray-300"} relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{game.icon}</div>
                        <h4 className="font-bold text-lg text-gray-800">{game.name}</h4>
                        <div
                          className={`inline-block px-2 py-1 ${game.difficulty === "easy" ? "bg-green-500" : game.difficulty === "medium" ? "bg-yellow-500" : "bg-red-500"} text-white text-xs font-bold rounded-full mb-2`}
                        >
                          {game.difficulty.toUpperCase()}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{game.description}</p>
                      <p className="text-xs text-blue-600 font-semibold mb-4">
                        Reward: {game.reward.coins} coins, {game.reward.experience} XP
                      </p>

                      <button
                        onClick={() => playMiniGame(game.id)}
                        disabled={!game.unlocked}
                        className={`w-full py-3 px-4 rounded-lg transition-all duration-300 font-semibold ${game.unlocked
                          ? "bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                      >
                        {game.unlocked ? "Play Game" : "Locked"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Special Activities */}
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-center mb-4">Special Activities</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => startSpecialActivity("photo_session")}
                    className="bg-gradient-to-r from-pink-400 to-rose-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    📸 Photo Session
                  </button>
                  <button
                    onClick={() => startSpecialActivity("training")}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    🎯 Training
                  </button>
                  <button
                    onClick={() => startSpecialActivity("grooming_party")}
                    className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    🛁 Grooming Party
                  </button>
                  <button
                    onClick={() => startSpecialActivity("talent_show")}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    🎪 Talent Show
                  </button>
                </div>
              </div>
            </div>
          )}

          {gameMode === "achievements" && (
            <div className="relative h-full">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
                <Trophy className="w-8 h-8 text-yellow-500" />
                Achievements & Rewards
                <Trophy className="w-8 h-8 text-yellow-500" />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsList.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-4 ${achievement.unlocked ? "border-yellow-400 shadow-yellow-400/50" : "border-gray-300"
                      } relative overflow-hidden`}
                  >
                    {achievement.unlocked && (
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-10" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-4xl ${achievement.unlocked ? "grayscale-0" : "grayscale"}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-800">{achievement.name}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                        {achievement.unlocked && <div className="text-2xl">✅</div>}
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm font-semibold text-gray-700">Reward:</p>
                        <div className="flex gap-2 mt-1">
                          {achievement.reward.coins && (
                            <span className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold">
                              💰 {achievement.reward.coins}
                            </span>
                          )}
                          {achievement.reward.gems && (
                            <span className="bg-purple-400 text-white px-2 py-1 rounded text-xs font-bold">
                              💎 {achievement.reward.gems}
                            </span>
                          )}
                          {achievement.reward.item && (
                            <span className="bg-blue-400 text-white px-2 py-1 rounded text-xs font-bold">
                              🎁 {achievement.reward.item}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
