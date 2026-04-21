export type HardwareProduct = {
  id: number;
  title: string;
  category: string;
  platform: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating: number;
  image: string;
  description: string;
  specs: string[];
};

export const hardwareData: HardwareProduct[] = [
  {
    id: 1,
    title: "PlayStation 5 Console",
    category: "Console",
    platform: "PlayStation 5",
    price: "£449.99",
    oldPrice: "£499.99",
    discount: "-10%",
    rating: 5,
    image: "/hardware/images/ps5.jpg",
    description:
      "The PlayStation 5 delivers ultra-fast SSD loading, ray-traced visuals, and adaptive trigger immersion for modern AAA gaming.",
    specs: ["825GB SSD", "4K/120Hz Output", "Ray Tracing", "Tempest 3D AudioTech"],
  },
  {
    id: 2,
    title: "Xbox Series X",
    category: "Console",
    platform: "Xbox Series X|S",
    price: "£449.99",
    oldPrice: "£499.99",
    discount: "-10%",
    rating: 5,
    image: "/hardware/images/xbox.jpg",
    description:
      "Xbox Series X combines high frame rates, low latency, and backwards compatibility across generations in one compact powerhouse.",
    specs: ["1TB NVMe SSD", "4K/120Hz", "Quick Resume", "Smart Delivery"],
  },
  {
    id: 3,
    title: "Pro Gaming Keyboard",
    category: "Peripherals",
    platform: "PC / Console",
    price: "£109.99",
    oldPrice: "£139.99",
    discount: "-21%",
    rating: 4,
    image: "/hardware/images/pro_gaming_keyboard.jpg",
    description:
      "A tournament-focused mechanical keyboard with ultra-fast switches, anti-ghosting, and customizable RGB zones.",
    specs: ["Mechanical Switches", "N-Key Rollover", "RGB Profiles", "Detachable Cable"],
  },
  {
    id: 4,
    title: "Precision Wireless Mouse",
    category: "Peripherals",
    platform: "PC / Console",
    price: "£74.99",
    oldPrice: "£99.99",
    discount: "-25%",
    rating: 5,
    image: "/hardware/images/wireless_mouse.jpg",
    description:
      "Built for esports precision, this lightweight wireless mouse features low-latency tracking and long battery life.",
    specs: ["26K DPI Sensor", "Low-Latency Wireless", "Up to 70h Battery", "Custom Side Buttons"],
  },
  {
    id: 5,
    title: "Virtual Reality Headset VR2",
    category: "Accessories",
    platform: "PlayStation 5",
    price: "£499.99",
    oldPrice: "£559.99",
    discount: "-11%",
    rating: 5,
    image: "/hardware/images/vr.jpg",
    description:
      "Step into immersive worlds with advanced eye tracking, OLED displays, and responsive haptic feedback in the headset.",
    specs: ["4K HDR OLED", "Inside-Out Tracking", "Eye Tracking", "Sense Controller Haptics"],
  },
  {
    id: 6,
    title: "High-Fidelity Gaming Headset",
    category: "Audio",
    platform: "PC / PS5 / Xbox",
    price: "£119.99",
    oldPrice: "£159.99",
    discount: "-25%",
    rating: 4,
    image: "/hardware/images/gaming_headset.jpg",
    description:
      "High-resolution drivers and a noise-isolating mic deliver clear team comms and positional sound for competitive sessions.",
    specs: ["7.1 Virtual Surround", "Detachable Mic", "Memory Foam Pads", "Multi-Platform Jack + USB"],
  },
];

export const getHardwareById = (id: number) =>
  hardwareData.find((item) => item.id === id);
