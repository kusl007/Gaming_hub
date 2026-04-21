export type GameNewsItem = {
  title: string;
  timeAgo: string;
  excerpt: string;
};

export type SimilarProduct = {
  title: string;
  discount: string;
  platform: string;
  price: string;
};

export type GameComment = {
  author: string;
  text: string;
  timeAgo: string;
};

export type GameReview = {
  author: string;
  text: string;
  date: string;
  useful: number;
};

export type GameDetails = {
  id: number;
  title: string;
  storeTitle: string;
  platform: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  video: string;
  features: string[];
  description: string[];
  latestNews: GameNewsItem[];
  similarProducts: SimilarProduct[];
  comments: GameComment[];
  reviews: GameReview[];
};

export const gamesData: GameDetails[] = [
  {
    id: 1,
    title: "Pragmata",
    storeTitle: "Pragmata - Xbox Series X|S",
    platform: "Pragmata - Xbox Series X|S",
    price: "£47.58",
    rating: 5,
    reviewsCount: 94,
    image: "/games/images/1.jpg",
    video: "/games/videos/1.webm",
    features: [
      "Steam Deck Playable",
      "Online Co-op",
      "Shared/Split Screen Co-op",
      "Cross-Platform Multiplayer",
      "HDR available",
    ],
    description: [
      "Embrace mind-blowing moments as you are pulled deep into the many worlds of Split Fiction, a boundary-pushing co-op action adventure from the studio behind 2021 Game of the Year Winner, It Takes Two.",
      "Mio and Zoe are contrasting writers, one writes sci-fi and the other writes fantasy, who become trapped in their own stories after being hooked up to a machine designed to steal their creative ideas. They must rely on each other to break free, master new abilities, and overcome diverse challenges while jumping between sci-fi and fantasy worlds.",
      "Split Fiction is a unique action-adventure experience that keeps you on the edge of your couch with unexpected moments. One minute you are taming dragons and the next you are fighting as cyber ninjas, escaping trolls, and dodging hover cars.",
      "Grab your co-op partner and get ready to overcome any obstacle thrown your way.",
      "TRUE CO-OP ADVENTURE - This split-screen adventure is tailored for two. Coordinate actions and timing, and invite a partner for free across platforms with Friend's Pass.",
      "UNPARALLELED VARIETY - Discover new mechanics in every level across sci-fi and fantasy settings, from platforming and stealth to puzzles and fast action.",
      "THE POWER OF FRIENDSHIP - Mio and Zoe start as opposites but become each other's best chance to survive this wild and emotional journey.",
    ],
    latestNews: [
      {
        title: "Split Fiction has sold two million units in just one week",
        timeAgo: "a year ago",
        excerpt:
          "Hazelight Studios confirmed that Split Fiction sold over two million copies worldwide in its first week.",
      },
      {
        title: "Split Fiction has sold 1 million copies in just two days",
        timeAgo: "a year ago",
        excerpt:
          "The game reached one million units sold in the first 48 hours after launch.",
      },
      {
        title: "Split Fiction surpasses 250,000 concurrent players on Steam",
        timeAgo: "a year ago",
        excerpt:
          "The title hit 259,003 simultaneous players on Steam, far beyond prior studio records.",
      },
    ],
    similarProducts: [
      {
        title: "Gotham Knights",
        discount: "-20%",
        platform: "Gotham Knights - Xbox Series X|S",
        price: "£59.73",
      },
      {
        title: "Prince of Persia The Lost Crown",
        discount: "-17%",
        platform: "Prince of Persia The Lost Crown - Xbox One & Xbox Series X|S",
        price: "£24.99",
      },
      {
        title: "Gears 5",
        discount: "-54%",
        platform: "Gears 5 - PC, Xbox One & Xbox Series X|S (Microsoft Store)",
        price: "£16.22",
      },
    ],
    comments: [
      {
        author: "gamer-d148d92",
        text: "I purchased this game through the app and tried redeeming the code, but it says my code cannot be used in my region.",
        timeAgo: "10 months ago",
      },
      {
        author: "gamer-b38e85d",
        text: "It will not let me use the code on my Xbox.",
        timeAgo: "10 months ago",
      },
    ],
    reviews: [
      {
        author: "bananenmilch_csgo",
        text: "veri good beri nice yes yes i am human",
        date: "21st March 2025",
        useful: 11,
      },
      {
        author: "gamer-e7b3fba",
        text: "Me and my wife like this game a lot. Maybe not as good as It Takes Two, but a good game nonetheless.",
        date: "9th April 2025",
        useful: 5,
      },
      {
        author: "Hunter",
        text: "A very good co-op game.",
        date: "4th April 2025",
        useful: 4,
      },
    ],
  },
  {
    id: 2,
    title: "Split Fiction-29%",
    storeTitle: "Split Fiction - Xbox Series X|S",
    platform: "Split Fiction - Xbox Series X|S",
    price: "£35.57",
    oldPrice: "£50.00",
    discount: "-29%",
    rating: 5,
    reviewsCount: 88,
    image: "/games/images/2.jpg",
    video: "/games/videos/2.webm",
    features: ["Online Co-op", "Cross-Platform Multiplayer", "HDR available"],
    description: ["A premium co-op adventure with sci-fi and fantasy worlds, built for two-player teamwork and variety."],
    latestNews: [],
    similarProducts: [],
    comments: [],
    reviews: [],
  },
  {
    id: 3,
    title: "Borderlands 4 Super Deluxe Edition-43%",
    storeTitle: "Borderlands 4 Super Deluxe Edition - Xbox Series X|S",
    platform: "Borderlands 4 Super Deluxe Edition - Xbox Series X|S",
    price: "£73.99",
    oldPrice: "£129.80",
    discount: "-43%",
    rating: 5,
    reviewsCount: 77,
    image: "/games/images/3.jpg",
    video: "/games/videos/3.webm",
    features: ["Online Co-op", "Cross-Platform Multiplayer", "HDR available"],
    description: ["Loot, shoot, and level up through chaotic worlds with the complete deluxe package and co-op support."],
    latestNews: [],
    similarProducts: [],
    comments: [],
    reviews: [],
  },
  {
    id: 4,
    title: "Minecraft Ultimate Collection-47%",
    storeTitle: "Minecraft Ultimate Collection - Xbox One & Xbox Series X|S",
    platform: "Minecraft Ultimate Collection - Xbox One & Xbox Series X|S",
    price: "£21.25",
    oldPrice: "£40.10",
    discount: "-47%",
    rating: 5,
    reviewsCount: 150,
    image: "/games/images/4.jpg",
    video: "/games/videos/4.webm",
    features: ["Shared/Split Screen Co-op", "Cross-Platform Multiplayer", "HDR available"],
    description: ["Build, survive, and explore with expanded content in a complete collection optimized for console players."],
    latestNews: [],
    similarProducts: [],
    comments: [],
    reviews: [],
  },
  {
    id: 5,
    title: "PGA Tour 2K25-60%",
    storeTitle: "PGA Tour 2K25 - Xbox Series X|S",
    platform: "PGA Tour 2K25 - Xbox Series X|S",
    price: "£29.99",
    oldPrice: "£74.99",
    discount: "-60%",
    rating: 5,
    reviewsCount: 44,
    image: "/games/images/5.jpg",
    video: "/games/videos/5.webm",
    features: ["Online Multiplayer", "HDR available"],
    description: ["Step onto the fairway with improved swing mechanics, tournament modes, and next-gen presentation."],
    latestNews: [],
    similarProducts: [],
    comments: [],
    reviews: [],
  },
  {
    id: 6,
    title: "NHL 26-74%",
    storeTitle: "NHL 26 - Xbox Series X|S",
    platform: "NHL 26 - Xbox Series X|S",
    price: "£29.99",
    oldPrice: "£115.35",
    discount: "-74%",
    rating: 5,
    reviewsCount: 39,
    image: "/games/images/6.jpg",
    video: "/games/videos/6.webm",
    features: ["Online Co-op", "Cross-Platform Multiplayer", "HDR available"],
    description: ["Fast-paced hockey action with enhanced physics, team modes, and online competition for every skill level."],
    latestNews: [],
    similarProducts: [],
    comments: [],
    reviews: [],
  },
];

export const getGameById = (id: number) => gamesData.find((game) => game.id === id);
