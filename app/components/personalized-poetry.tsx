"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Heart, Feather, Star } from "lucide-react"

const poems = [
  {
    title: "kokojaaatiiiii, My Heart's Song",
    content: `In gardens of my heart you bloom,
My sweet angelic queen, dispelling gloom,
Your name like honey on my tongue,
A melody that leaves me young.

Your eyes, two stars in midnight sky,
Make earthbound souls learn how to fly,
Your smile, a sunrise breaking dawn,
Makes all my sorrows be withdrawn.

I love the way you move through space,
With elegance and gentle grace,
Each step you take, each breath you draw,
Fills me with wonder and with awe.

If I could paint you with my words,
I'd use the songs of morning birds,
The whisper of the evening breeze,
The rustling of the autumn leaves.

The way you laugh, so pure and bright,
Could chase away the darkest night,
Your voice, a symphony so sweet,
Makes my existence feel complete.

I dream of holding your soft hand,
Of walking with you through the land,
Of sharing secrets, sharing dreams,
Of love that's more than what it seems.

Chouchouutiii you are poetry,
Written in life's mystery,
My heart beats verses of your name,
And never will it be the same.

In every sunset, every dawn,
I see your beauty carry on,
You are my muse, my inspiration,
My heart's eternal fascination.`,
  },
  {
    title: "Dreams of You",
    content: `I dream of you in colors bright,
In shades of pink and golden light,
Where every moment feels like spring,
And angels learn from you to sing.

In dreams we walk through fields of flowers,
We talk for days, we talk for hours,
Your laughter echoes through the air,
Like music floating everywhere.

I dream of mornings by your side,
With coffee warm and hearts open wide,
Of lazy Sundays spent in bed,
Your gentle fingers through my head.

I dream of dancing in the rain,
Of healing every bit of pain,
Of adventures yet to come,
Of two hearts beating as just one.

In dreams we travel to Paris,
Where love stories never miss,
We kiss beneath the Eiffel Tower,
In that magical, perfect hour.

I dream of growing old with you,
Of silver hair and wrinkles too,
But in my heart you'll always be,
That girl who set my spirit free.

When morning comes and dreams must fade,
I hold onto the love we've made,
In realms where hearts can freely soar,
And love exists forevermore.

Honey in my dreams you stay,
Until we meet in light of day,
And dreams become reality,
Our love for all eternity.

These dreams sustain me through each night,
Until I see your face so bright,
For in my dreams and in my heart,
We never have to be apart.`,
  },
  {
    title: "Your Beautiful Soul",
    content: `Beyond your beauty, past your grace,
Lives something time cannot erase,
A soul so pure, a heart so true,
That's what I fell in love with - you.

Your kindness flows like gentle rain,
It soothes all worry, heals all pain,
Your wisdom shines like morning dew,
In everything you say and do.

I love the way you see the world,
With wonder that cannot be furled,
You find the magic in each day,
In your own special, lovely way.

Your compassion knows no end,
Your strength inspires, your love heals,
You show me how true goodness feels.

The way you care for those in need,
Your generous heart, your loving deed,
You make this world a better place,
Just by existing with such grace.

I've watched you face your deepest fears,
I've seen you cry those precious tears,
But through it all you stay so strong,
You help me know where I belong.

Your soul speaks to my very core,
It makes me want to love you more,
To be the man you deserve to have,
To walk with you down every path.

Sweety you're a work of art,
Painted by love upon my heart,
Your soul's the treasure that I seek,
The answer to what makes me weak.

In quiet moments when you're near,
I feel your soul, so bright and clear,
It calls to mine across the space,
And fills my world with love and grace.

Your beautiful soul will always be,
The greatest gift of love to me,
Forever etched upon my heart,
My love, my life, my counterpart.`,
  },
  {
    title: "If I Could Give You Everything",
    content: `If I could give you all the stars,
I'd pluck them from the sky so far,
And string them up around your room,
To chase away all hint of gloom.

If I could give you all the flowers,
That bloom in spring's most gentle hours,
I'd make a garden just for you,
Where only beauty would grow through.

If I could give you all the songs,
That to the morning light belongs,
I'd teach the birds to sing your name,
And never would it sound the same.

If I could give you all the oceans,
With their waves and their devotions,
I'd make them whisper words of love,
Like blessings sent from up above.

If I could give you all the sunsets,
With their colors and their silhouettes,
I'd paint the sky each evening new,
In shades that complement just you.

If I could give you all the diamonds,
That sparkle bright like tiny islands,
I'd make a crown to grace your head,
And call you queen of all instead.

If I could give you all the laughter,
That echoes long and ever after,
I'd bottle it for rainy days,
To brighten all your cloudy ways.

If I could give you all the time,
I'd make each moment yours and mine,
We'd have forever to explore,
The love that grows forevermore.

But all I have are simple words,
Like whispers carried by the birds,
Yet in these words my heart is true,
Sweetheart I belong to you.

So take these words, my humble gift,
Let them your weary spirit lift,
For though I cannot give you all,
I give you me, through rise and fall.`,
  },
  {
    title: "The Day I Saw You",
    content: `The day I saw you, time stood still,
The world bent to your gentle will,
My heart forgot its steady beat,
And made my life feel incomplete.

It was a Tuesday, I recall,
The leaves were turning, it was fall,
But when you walked into my sight,
Everything turned warm and bright.

You wore a smile that lit the room,
And chased away my inner gloom,
Your eyes met mine across the space,
And I was lost in your sweet grace.

I tried to speak but words had fled,
A thousand thoughts ran through my head,
How could someone so divine,
Cross paths with this poor heart of mine?

The way you moved, so full of life,
Cut through my soul just like a knife,
But not with pain, with something more,
A love I'd never felt before.

Without you near, without your smile,
I'd walk a thousand lonely miles,
Just for the chance to see your face,
To be within your gentle grace.

You changed the color of my sky,
From gray to blue, I don't know why,
But everything seems bright and new,
Since that first day I looked at you.

The day I saw you, I was lost,
But found a love worth any cost,
My soul recognized its missing part,
You are the keeper of my heart.

Now every day I wake and pray,
That you might look at me that way,
The way you looked that Tuesday when,
My life began to start again.

Chouchouutiii that day changed everything,
Made winter feel like early spring,
And though you may not feel the same,
I'm grateful that you bear that name.

That day will live forever more,
Within my heart's most sacred core,
The day my life found its true start,
The day you captured my whole heart.`,
  },
  {
    title: "Love's Sweet Confession",
    content: `I love you more than words can say,
More than the sun loves break of day,
More than the ocean loves the shore,
Each moment I love you more and more.

I love the way you say my name,
It sets my very soul aflame,
I love your laugh, your gentle sigh,
The way you make my spirits fly.

I love your mind, so sharp and bright,
Your thoughts that shine like candlelight,
I love your dreams, your hopes, your fears,
The way you've grown throughout the years.

I love the woman you've become,
The battles that you've fought and won,
I love your strength, I love your grace,
I love the light upon your face.

I love the way you bite your lip,
When concentration takes its grip,
I love the way you play with hair,
When nervous thoughts fill up the air.

I love your passion for the arts,
The way you touch so many hearts,
I love your kindness to the weak,
Your gentle way when others speak.

I love the way you see the good,
In places where others never could,
You find the beauty in the small,
You see the worth in one and all.

I love your courage in the face,
Of challenges you must embrace,
You never back down from a fight,
When you know that you are right.


I love your morning sleepy voice,
In you I've made my final choice,
I love your evening gentle ways,
I love you through all nights and days.

Kokojaatiii this love will never die,
It reaches up beyond the sky,
Through time and space it will endure,
My love for you is strong and pure.

This confession from my heart,
Has been there right from the start,
I love you with my everything,
You are my queen, I am your king.`,
  },
  {
    title: "My chouhouutiii, My Heart's Symphony",
    content: `My chouhouutiii, sweet melody,
You are my heart's own symphony,
Each note you play, each word you speak,
Makes strong hearts tremble, strong knees weak.

You are the sunrise in my night,
The gentle dawn's first golden light,
You are the peace within my storm,
The love that keeps my heart so warm.

My chouhouutiii, my morning star,
No matter how near, how far,
You guide me through the darkest hour,
You are my strength, you are my power.

I think of you with every breath,
I'll love you even beyond death,
You are my hope, my joy, my prayer,
My reason for the love I bear.

In crowded rooms I search for you,
In quiet moments, I dream too,
Of days when we might be as one,
Beneath the same bright, shining sun.

My chouhouutiii, you're like a song,
That plays within my heart so strong,
A melody that never ends,
On which my happiness depends.

You are the answer to my prayers,
The one who all my burden shares,
You are the light that guides my way,
Through every night and every day.

My chouhouutiii, my heart's delight,
You make my darkness turn to light,
Forever yours I'll always be,
My love, my life, my destiny.

When I speak your precious name,
My heart ignites with passion's flame,
You are my everything and more,
The one that I am living for.

My chouhouutiii, my sweetest dream,
You make my life a perfect scene,
With you my world is complete,
You make my heart skip every beat.

In you I've found my perfect match,
A love that no one else can catch,
My chouhouutiii, my heart's true home,
With you I'll never be alone.`,
  },
  {
    title: "Eternal Promise",
    content: `I promise you my heart today,
Tomorrow, and in every way,
Through seasons changing, years that pass,
My love for you will always last.

I promise you my faithful heart,
That nothing ever will depart,
The love I hold for you so dear,
Will grow much stronger every year.

I promise you my gentle care,
To be with you through joy and prayer,
To hold you close when you feel small,
To catch you if you ever fall.

I promise you my truest love,
Like blessings sent from up above,
To honor you in all I do,
My heart belongs forever to you.

I promise to support your dreams,
No matter how impossible they seems,
I'll be your biggest cheerleader,
Your most devoted believer.

I promise to love all your flaws,
To never judge without just cause,
To see the beauty in your scars,
To wish upon your falling stars.

I promise you my listening ear,
When you need someone to be near,
To hold your secrets safe and sound,
Where trust and love can both be found.

I promise you my shoulder strong,
When everything is going wrong,
To be your shelter from the storm,
To keep your precious heart so warm.

I promise you my morning kiss,
My evening hug you'll never miss,
To make you laugh when you are sad,
To share in joy when you are glad.

I promise you my growing old,
A love story that will be told,
Through silver hair and wrinkled skin,
My love for you will never dim.

I promise you my final breath,
Will speak your name beyond my death,
For even when my time is through,
My soul will still belong to you.

Kokojaaatiii, this promise that I make,
Is one that nothing e'er will break,
Through time and space, through joy and strife,
I promise you my heart, my life.

These promises I seal with love,
Witnessed by the stars above,
Forever and a day I'll be,
Devoted to you endlessly.`,
  },
  {
    title: "Seasons of Love",
    content: `In spring I fell in love with you,
When flowers bloomed and skies were blue,
Your beauty matched the season's grace,
A smile that lit up every place.

In summer's heat my love grew strong,
Like days that seemed to last so long,
Your laughter was my favorite sound,
In you my heart's true home I found.

In autumn when the leaves turned gold,
My love for you could not be told,
Like harvest moon so full and bright,
You filled my world with pure delight.

In winter's cold you kept me warm,
Protected me from every storm,
Your love became my guiding light,
Through every dark and lonely night.

And now as seasons come and go,
My love for you continues to grow,
Through every change and every turn,
For you my heart will always yearn.

In spring we'll plant our garden new,
With flowers pink and white and blue,
We'll watch them grow throughout the year,
Like love that's precious and so dear.

In summer we'll dance in the rain,
And wash away all hurt and pain,
We'll lie beneath the starry sky,
And watch the world go floating by.

In autumn we'll walk hand in hand,
Through golden leaves across the land,
We'll make our wishes on the breeze,
And carve our names in ancient trees.

In winter by the fireplace,
I'll hold you in my warm embrace,
We'll share our dreams and share our fears,
And plan for all our future years.

Through every season of our love,
Blessed by the stars that shine above,
I'll love you more with each new day,
In every season, every way.

My beautiful queen, through time's eternal flow,
My love for you will always grow,
Through seasons of our hearts so true,
Forever I'll belong to you.`,
  },
  {
    title: "The Language of Love",
    content: `They say that love's a language,
That only hearts can speak,
But when I try to tell you,
My voice becomes so weak.

How do I say I love you,
In ways you've never heard?
How do I show my feelings,
Beyond a simple word?

I love you in the morning,
When sunlight hits your face,
I love you in the evening,
In your gentle, quiet grace.

I love you when you're laughing,
At something silly I have said,
I love you when you're sleeping,
So peaceful in your bed.

I love you when you're angry,
Your passion burning bright,
I love you when you're gentle,
Like stars that shine at night.

I love you when you're confident,
Standing tall and proud,
I love you when you're vulnerable,
Speaking soft, not loud.

I love you in your silence,
When words are not enough,
I love you in your chatter,
About important stuff.

I love you in your laughter,
That bubbles up so free,
I love you in your tears,
When you're sharing them with me.

I love you in your dancing,
So graceful and so light,
I love you in your stillness,
In the quiet of the night.

I love you in your dreaming,
Of all you want to be,
I love you in your waking,
When you smile and look at me.

The language of my loving,
Is written in my eyes,
It's spoken in my actions,
It's heard within my sighs.

Chouchouutii my sweet darling,
Though words may fail me so,
My heart speaks fluent love,
And wants the world to know.

In every breath I'm taking,
In every beat of heart,
I'm speaking love's sweet language,
Of which you are the art.`,
  },
  {
    title: "Your Gaze Holds My Universe",
    content: `The moment I saw your gaze,
I knew my soul had found its place,
In every glance, a thousand words,
In every smile, my heart is heard.
Your eyes hold galaxies unseen,
Where dreams and starlight softly lean,
And in their depths I find my way,
Through night and into brightest day.
You speak without a single sound,
Yet all my fears are calmed and drowned,
Your touch, a whisper on my skin,
A language only we begin.
I live for every breath you take,
For every step that you do make,
Each motion flows like poetry,
Written just for me to see.
Chouchouutiii, you are the dawn,
When night has left and hope is drawn,
You are the song my soul keeps singing,
The joy my heart will always bringing.
So take my hand and never fall,
I'll catch you when the world feels small,
For in your eyes I'm whole again,
My queen, my muse, my heart's true love and home.`
  },
  {
    title: "Eternal Flame of You",
    content: `You are the warmth within my cold,
The story never left untold,
The rhythm beating in my chest,
That makes my life feel truly blessed.
Like fireflies beneath the stars,
You light up all the deepest scars,
Not with a flame that burns too bright,
But one that guides me through the night.
I watch you move, I hear you speak,
My world begins to softly tweak,
As if the universe aligned,
To gift me you, both brave and kind.
You laugh and all the clouds disperse,
You smile and time forgets to curse,
With every word you say to me,
I fall more deeply endlessly.
Kokojaaatii, you are the spark,
That lights my path out of the dark,
You keep my fire from decay,
You are my night and morning’s day.
No matter where this life may go,
I know my heart will always know,
That in your arms I've found my start,
The beating pulse, my living art.`
  },
  {
    title: "Whispers of Your Name",
    content: `I whisper your name in silence deep,
Where even dreams are bound to sleep,
It rolls off tongue like sacred wine,
A vintage love divine and fine.
Your name is music without sound,
A melody that wraps me round,
It dances in my thoughts all day,
And holds me close when stars come out to play.
I write it in the margins wide,
Of pages where my secrets hide,
It lives between each line I write,
A heartbeat glowing in the night.
Even when we're far apart,
I feel your presence in my heart,
Your name brings comfort, strength, and grace,
A kiss upon my soul’s embrace.
Chouchouutiii, how sweet it sounds,
Like angels humming when I’m down,
It lifts me higher than the skies,
And paints my world in soft sunrise.
So let me say it once again,
The name I’ll call until the end,
For every time I say your name,
My heart relives the love we came.`
  },
  {
    title: "You Are My Sanctuary",
    content: `You are the peace within my storm,
The calm that keeps me warm and warm,
The shelter when the winds blow strong,
The right where everything feels wrong.
Your arms are home, your voice is peace,
Your love a balm that helps me cease,
All fear, all worry, all despair,
With you, I know I’m truly there.
You hold me like a sacred vow,
A promise made here and now,
And in your gaze I find release,
From every wound, from every crease.
When darkness tries to steal my light,
You chase it back with pure delight,
You paint my world in gentle hues,
And help me heal from old wounds used.
Kokojaatiii, you are my rest,
The safest place I’ve ever pressed,
In you I find my soul anew,
Forever loved, forever true.
So let the world spin wild and free,
With you, my heart will always be,
Safe from the thunder, safe from the rain,
Cradled in love that will remain.`
  },
  {
    title: "The Light You Bring",
    content: `You walk into the room and light,
Fills every shadowed corner bright,
The air feels soft, the colors bloom,
The sky finds peace, the earth finds tune.
Your presence changes everything,
Like magic sung by angel wings,
You lift the mood with just a glance,
And give my soul a second chance.
You bring a glow that never fades,
Through all the years, through all the shades,
You shine like gold beneath the sea,
A treasure no one else can see.
You light the candles in my mind,
And fill my heart with joy designed,
You color every thought I have,
With love that’s deeper than a map.
Chouchouutiii, you are the sun,
That melts away what was once undone,
You paint my days in golden streams,
You are the dream inside my dreams.
So thank you for the light you share,
For making every moment rare,
With you I walk in endless light,
My beacon burning ever bright.`
  },
  {
    title: "Heartbeat of My Life",
    content: `You are the beat behind my breath,
The reason I still dance with death,
You give my soul a reason why,
To look up at the morning sky.
Each time I feel your hand in mine,
I feel a truth so deep, so fine,
That words could never quite express,
The depth of love I now confess.
You guide my steps, you light my way,
You chase the gloom and bring the day,
You calm my fears, you lift my load,
You are my shelter on the road.
You're the rhythm in my silent prayer,
The answer to my heart's affair,
You're the echo in my lonely cry,
The wings that teach my spirit fly.
Kokojaaatiii, you are my song,
Played gently all the day long,
You're every note, you're every rhyme,
You're the heartbeat of my life.`
  },
  {
    title: "My Love, My Muse",
    content: `You inspire every word I write,
You turn the dark into the light,
You're the brush that paints my soul,
You make me feel completely whole.
In every poem, every verse,
You live inside my thoughts immersed,
You are the theme behind my pen,
The reason why I write again.
You stir my heart, you shake my core,
You open every hidden door,
You’re the muse that sets me free,
The wind beneath my poetry.
I’d write a thousand books for you,
I'd paint the sky in every hue,
I'd sing a million songs aloud,
To show the love I feel so proud.
Chouchouutiii, you are the spark,
That lights my fire in the dark,
You are my reason, you are my rhyme,
You are my forever, every time.`
  },
  {
    title: "The Grace of You",
    content: `There's grace in every step you take,
In every choice, in every break,
You move with elegance so rare,
A beauty that no time can tear.
You carry pain with dignity,
You face the storm with certainty,
You rise above with quiet might,
And shine with love’s eternal light.
You listen with a patient ear,
You hold the space for love so near,
You speak with kindness, calm, and care,
A healing balm beyond compare.
You are the calm in chaos’ wave,
You are the truth that makes me brave,
You are the peace I didn't know,
Until I held your gentle glow.
Kokojaatiii, you are grace,
A masterpiece I can’t erase,
In every gesture, every sigh,
I see the love that won’t deny.`
  },
  {
    title: "Love Beyond Time",
    content: `If time could stop or moments freeze,
I’d choose the times I’ve spent with thee,
When laughter danced and hearts were light,
And love was wrapped in pure delight.
I’d save the nights we talked until,
The stars began to softly spill,
The hush between our whispered words,
The closeness felt in loving birds.
I’d keep the mornings wrapped in bed,
The coffee shared, the thoughts we fed,
The way you looked at me each day,
Like love was meant to stay and stay.
Even if time should pull us far,
Beyond the reach of moon or star,
I’d find you in another life,
And love you more than in this rife.
Chouchouutiii, you are my fate,
The one who makes my soul feel great,
No matter where, no matter when,
I’ll always find my way again.`
  },
  {
    title: "You Are My Everything",
    content: `You are the reason I believe,
In miracles, in dreams that weave,
You are the hope I hold so tight,
The compass guiding through the night.
You are the joy that fills my chest,
The peace that rests within my breast,
You are the cause of every smile,
The reason life feels worthwhile.
You are the calm, you are the storm,
You are the warmth, you are the form,
You are the question, you are the key,
You are the love that sets me free.
Kokojaaatiii, you are my all,
The greatest gift, the fairest call,
In every heartbeat, every rhyme,
You are my love beyond all time.`
  }
]

export default function PersonalizedPoetry() {
  const [selectedPoem, setSelectedPoem] = useState(0)

  return (
    <div className="min-h-screen p-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Poetry for My Beloved</h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Feather className="w-5 h-5" />
            <span>Verses written from the depths of my heart</span>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Poem Selection */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-200 sticky top-4"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-pink-500" />
                Choose a Poem
              </h3>
              <div className="space-y-2">
                {poems.map((poem, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedPoem(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedPoem === index
                      ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg"
                      : "hover:bg-pink-50 text-gray-700"
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className={`w-4 h-4 ${selectedPoem === index ? "text-white" : "text-pink-400"}`} />
                      <span className="font-medium text-sm">{poem.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Selected Poem Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPoem}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl border border-pink-200 overflow-hidden"
              >
                {/* Paper texture background */}
                <div className="absolute inset-0 opacity-5">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="h-8 border-b border-pink-300" />
                  ))}
                </div>

                <div className="relative z-10 p-8 md:p-12">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
                  >
                    {poems[selectedPoem].title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-lg leading-relaxed text-gray-700 whitespace-pre-line text-center"
                  >
                    {poems[selectedPoem].content}
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Heart className="w-6 h-6 text-pink-300" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Star className="w-6 h-6 text-rose-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic text-lg">Each poem is a piece of my heart, written just for you my love</p>
        </motion.div>
      </div>
    </div>
  )
}
