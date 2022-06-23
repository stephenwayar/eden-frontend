module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shop": "url('/assets/images/shop.jpg')",
        "men": "url('/assets/images/menSuit.jpeg')",
        "women": "url('/assets/images/women.jpeg')",
        "kids": "url('/assets/images/kid.jpeg')",
        "bags": "url('/assets/images/shoppingBags.jpg')",
      }
    },
  },
  plugins: []
}