const products = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 4999,
    description:
      "Comfortable and stylish Nike Air Max shoes designed for running, workouts, and everyday casual wear.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },

  {
    id: 2,
    title: "Rolex Classic",
    price: 12499,
    description:
      "A classic luxury watch with an elegant design, premium finish, and comfortable fit for everyday use.",
    category: "Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: {
      rate: 4.7,
      count: 85,
    },
  },

  {
    id: 3,
    title: "iPhone 15 Pro",
    price: 129999,
    description:
      "Premium smartphone with powerful performance, advanced cameras, a beautiful display, and modern design.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    rating: {
      rate: 4.8,
      count: 240,
    },
  },

  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: 29999,
    description:
      "Premium wireless headphones featuring active noise cancellation, immersive sound, and long battery life.",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: {
      rate: 4.6,
      count: 190,
    },
  },

  {
    id: 5,
    title: "Adidas Runner",
    price: 5499,
    description:
      "Lightweight and comfortable running shoes designed for workouts, jogging, running, and daily activities.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
    rating: {
      rate: 4.4,
      count: 150,
    },
  },

  {
    id: 6,
    title: "RayBan Aviator",
    price: 8499,
    description:
      "Classic aviator sunglasses with a stylish frame and comfortable design suitable for everyday outdoor use.",
    category: "Sunglasses",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    rating: {
      rate: 4.3,
      count: 98,
    },
  },

  {
    id: 7,
    title: "Apple Watch",
    price: 42999,
    description:
      "Smart wearable with fitness tracking, notifications, health features, and a premium high-resolution display.",
    category: "Smart Watch",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    rating: {
      rate: 4.7,
      count: 210,
    },
  },

  {
    id: 8,
    title: "Canon EOS M50",
    price: 58999,
    description:
      "Compact mirrorless camera designed for photography and video with excellent image quality and portability.",
    category: "Camera",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
    rating: {
      rate: 4.5,
      count: 76,
    },
  },

  {
    id: 9,
    title: "MacBook Air",
    price: 99999,
    description:
      "Slim and lightweight laptop offering powerful performance, long battery life, and a premium aluminum design.",
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    rating: {
      rate: 4.9,
      count: 310,
    },
  },

  {
    id: 10,
    title: "Mechanical Keyboard",
    price: 6999,
    description:
      "Durable mechanical keyboard with responsive switches, comfortable keys, and a modern gaming-inspired design.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500",
    rating: {
      rate: 4.4,
      count: 132,
    },
  },

  {
    id: 11,
    title: "Gaming Mouse",
    price: 2999,
    description:
      "High-precision gaming mouse designed for accurate tracking, fast response, and comfortable long gaming sessions.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=500",
    rating: {
      rate: 4.6,
      count: 175,
    },
  },

  {
    id: 12,
    title: "Puma Hoodie",
    price: 2499,
    description:
      "Soft and comfortable hoodie suitable for casual outfits, workouts, travel, and everyday winter wear.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    rating: {
      rate: 4.2,
      count: 89,
    },
  },

  {
    id: 13,
    title: "Levi's Jacket",
    price: 4299,
    description:
      "Classic denim jacket featuring a timeless design that works perfectly with casual everyday outfits.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
    rating: {
      rate: 4.5,
      count: 115,
    },
  },

  {
    id: 14,
    title: "Backpack Pro",
    price: 3499,
    description:
      "Spacious and durable backpack designed for college, office, travel, and everyday carrying needs.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    rating: {
      rate: 4.3,
      count: 142,
    },
  },

  {
    id: 15,
    title: "Leather Wallet",
    price: 1899,
    description:
      "Premium leather wallet with a compact design and multiple compartments for cards, cash, and identification.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
    rating: {
      rate: 4.4,
      count: 67,
    },
  },

  {
    id: 16,
    title: "Bluetooth Speaker",
    price: 4999,
    description:
      "Portable Bluetooth speaker delivering clear audio, powerful bass, and convenient wireless connectivity.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    rating: {
      rate: 4.6,
      count: 201,
    },
  },

  {
    id: 17,
    title: "Gaming Chair",
    price: 11999,
    description:
      "Ergonomic gaming chair designed for comfortable long-duration gaming, studying, and working sessions.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    rating: {
      rate: 4.5,
      count: 128,
    },
  },

  {
    id: 18,
    title: "Study Lamp",
    price: 1599,
    description:
      "Modern study lamp providing focused lighting for reading, studying, working, and other desk activities.",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
    rating: {
      rate: 4.1,
      count: 94,
    },
  },

  {
    id: 19,
    title: "DSLR Camera",
    price: 74999,
    description:
      "Professional DSLR camera designed for high-quality photography with detailed images and smooth video recording.",
    category: "Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    rating: {
      rate: 4.8,
      count: 156,
    },
  },

  {
    id: 20,
    title: "Running Shoes",
    price: 3999,
    description:
      "Comfortable lightweight running shoes designed for jogging, workouts, running, and everyday active use.",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: {
      rate: 4.3,
      count: 118,
    },
  },
];

export default products;